import { addDoc, collection, Firestore } from 'firebase/firestore';
import { getDbInstance } from '../../firebase-config';



export async function GET(request: Request) {
  const db = await getDbInstance()

  console.log("Recieving a get request on route: api/auth/login")

  // Adding user to db
  try {
    console.log("Saving user to firestore database: db type", db instanceof Firestore);
    const docRef = await addDoc(collection(db, "users"), {
      first: "Anmol",
      last: "Goya",
      born: 2005,
      smartness: "infinite"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  return new Response(JSON.stringify({ message: "User added succesfully" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}


