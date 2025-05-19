import React, { useState } from "react";
import { t } from "./i18n";
import "./styles.css";

function App() {
  const [file, setFile] = useState(null);

  function handleDrop(e) {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  }

  function handleUpload() {
    if (!file) return alert("No file selected.");
    alert(`Uploading: ${file.name}`);
    // TODO: Send til backend
  }

  return (
    <div className="container">
      <img src="./logo.png" alt="Move Vision" className="logo" />
      <h2>{t("upload")}</h2>
      <p>{t("welcome")}</p>

      <div
        className="dropzone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {file ? file.name : t("drop_prompt")}
      </div>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ marginTop: "1rem" }}
      />
      <button onClick={handleUpload} style={{ marginTop: "1rem" }}>
        {t("upload")}
      </button>
    </div>
  );
}

export default App;


