import { useEffect, useState } from "react";

export default function useBarcodeScanner() {
  const [barcode, setBarcode] = useState("Not found");

  useEffect(() => {
    let barcode = "";
    let interval;

    const handleBarcode = (scanned_barcode) => {
      setBarcode(scanned_barcode);
    };

    const handleKeyDown = (evt) => {
      if (interval) clearInterval(interval);

      if (evt.code === "Enter") {
        if (barcode) handleBarcode(barcode);
        barcode = "";
        return;
      }

      if (evt.key !== "Shift") barcode += evt.key;

      interval = setInterval(() => (barcode = ""), 20);
    };

    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return [barcode];
}
