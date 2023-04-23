import { useState, useEffect } from "react";
import "./styles/app.scss";

import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { UploadComponent } from "./components/UploadComponent";
import { Footer } from "./components/Footer";

import { FilesList } from "./components/FilesList";

export const App = () => {
  const [files, setFiles] = useState([]);

  const handleUploadFile = (event) => {
    const target = event.currentTarget;
    const inputFiles = target.files;
    //iterate each file of FileLIst and save into state
    Array.from(inputFiles).forEach((file) =>
      setFiles((prev) => [...prev, file])
    );
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Title text="File Uploader" />
        <main>
          <UploadComponent onChange={(event) => handleUploadFile(event)} />
          {files && <FilesList files={files} />}
        </main>
      </div>
      <Footer />
    </>
  );
};
