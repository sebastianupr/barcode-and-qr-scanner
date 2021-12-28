import { useState } from "react";
import Camera from './Camera';
import useBarcodeScanner from "./useBarcodeScanner";
import "./App.css";

const SCANNER_MODES = {
  MACHINE: "CODE",
  CAMERA: "CAMERA",
};

function App() {
  const [scannerMode, setScannerMode] = useState(SCANNER_MODES.CAMERA);
  const [barcode] = useBarcodeScanner();

  return (
    <div className="App">
      <h1>Barcode</h1>

      <div>
        <button onClick={() => setScannerMode(SCANNER_MODES.CAMERA)}>Camera</button>
        <button onClick={() => setScannerMode(SCANNER_MODES.MACHINE)}>Machine</button>
      </div>

      {scannerMode === SCANNER_MODES.MACHINE ? (
        <h3>{barcode}</h3>
      ) : (
        <div>
          <Camera />
        </div>
      )}
    </div>
  );
}

export default App;
