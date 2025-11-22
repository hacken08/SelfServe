"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileUp, AlertCircle, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
// import { addDoc, collection } from 'firebase/firestore'
// import { db } from '../../app/api/firebase-config'

export function UploadSection() {
  const [uploadType, setUploadType] = useState<"excel" | "qr">("excel")
  const [fileName, setFileName] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [fileInput, setFileInput] = useState<HTMLInputElement | null>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    
  }

  const handleUpload = async () => {
    // try {
    //   const docRef = await addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  }

  const clearFile = () => {
   
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-lg md:text-2xl">Upload QR Codes</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Upload product QR codes or Excel files to the system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <Button
              variant={uploadType === "excel" ? "default" : "outline"}
              onClick={() => setUploadType("excel")}
              className="h-16 md:h-20 flex flex-col items-center justify-center text-xs md:text-base"
            >
              <FileUp className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <span>Excel File</span>
            </Button>
            <Button
              variant={uploadType === "qr" ? "default" : "outline"}
              onClick={() => setUploadType("qr")}
              className="h-16 md:h-20 flex flex-col items-center justify-center text-xs md:text-base"
            >
              <Upload className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <span>QR Codes</span>
            </Button>
          </div>

          <div className="space-y-3">
            <label className="text-xs md:text-sm font-medium block">Select File</label>
            <div className="relative">
              <input
                ref={setFileInput}
                type="file"
                accept={uploadType === "excel" ? ".xlsx,.xls,.csv" : ".zip,.rar"}
                onChange={handleFileSelect}
                disabled={isUploading}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center w-full px-4 py-6 md:py-8 border-2 border-dashed border-muted-foreground/25 rounded-lg hover:border-muted-foreground/50 hover:bg-muted/30 cursor-pointer transition-colors"
              >
                <div className="text-center">
                  <Upload className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs md:text-sm font-medium text-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {uploadType === "excel" ? "XLSX, XLS, CSV" : "ZIP, RAR"}
                  </p>
                </div>
              </label>
            </div>

            {fileName && (
              <div className="flex items-center justify-between p-3 md:p-4 bg-muted rounded-lg border">
                <div className="flex items-center gap-2 min-w-0">
                  <FileUp className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-blue-600" />
                  <p className="text-xs md:text-sm font-medium truncate">{fileName}</p>
                </div>
                <button
                  onClick={clearFile}
                  className="flex-shrink-0 p-1 hover:bg-background rounded transition-colors"
                  aria-label="Clear file"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Info Alert */}
          <Alert className="text-xs md:text-sm">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <AlertDescription>
              {uploadType === "excel"
                ? "Excel file should contain columns: Product Name, QR Code, Quantity"
                : "Upload a ZIP file containing QR code images with product identifiers"}
            </AlertDescription>
          </Alert>

          <Button
            onClick={handleUpload}
            disabled={!fileName || isUploading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-sm md:text-base py-2 md:py-3"
          >
            {isUploading ? "Uploading..." : "Upload File"}
          </Button>
        </CardContent>
      </Card>

      {/* Recent Uploads Preview */}
      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-base md:text-lg">Recent Uploads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
            <p>✓ products_batch_001.xlsx - 2 hours ago</p>
            <p>✓ qr_codes_module_box.zip - 5 hours ago</p>
            <p>✓ products_batch_002.xlsx - 1 day ago</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
