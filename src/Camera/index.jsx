import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function Camera() {
  const [code, setCode] = useState("Not Found");

  const handleUpdate = (_, result) => {
    if (result?.text && result?.text !== "Not Found") setCode(result.text);
  };

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={handleUpdate}
      />

      <h3>{code}</h3>
    </>
  );
}
