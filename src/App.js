import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [imgURL, setImgUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUpload = (event) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgUrl(url);
        });
      }
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleUpload}>
          <input type="file" />
          <button type="submit"> Enviar </button>
        </form>
        <br />
        {!imgURL && <progress value={progress} max="100" />}
        {imgURL && <img src={imgURL} alt="Imagem" />}
      </header>
    </div>
  );
}

export default App;
