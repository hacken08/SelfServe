import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import { z } from 'zod';

export function createZodConverter<T extends z.AnyZodObject>(
  schema: T
): FirestoreDataConverter<z.infer<T>> {
  return {
    toFirestore(data: z.infer<T>): object {
      // Validate the data before writing to ensure it's correct.
      // This step can be optional if you trust your application logic.
      schema.parse(data);
      return data;
    },
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): z.infer<T> {
      const data = snapshot.data(options);
      // Validate the data read from Firestore against the schema.
      // This will throw a ZodError if the data is invalid, preventing silent errors.
      return schema.parse(data);
    },
  };
}



