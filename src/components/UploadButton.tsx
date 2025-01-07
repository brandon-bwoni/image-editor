"use client";
import { CldUploadButton } from "next-cloudinary";

import { Upload } from "lucide-react";

const UploadButton = () => {
  return (
    <div>
      <CldUploadButton
        uploadPreset="ml_default"
        signatureEndpoint={"/api/sign-cloudinary-params"}
        options={{
          autoMinimize: true,
        }}
      >
        <span className="flex items-center gap-2">
          <Upload className="w-4 h-4" /> Upload
        </span>
      </CldUploadButton>
    </div>
  );
};

export default UploadButton;
