import { useState } from "react";
import "./styles/app.scss";

import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { UploadComponent } from "./components/UploadComponent";
import { Footer } from "./components/Footer";

import { FilesList } from "./components/FilesList";
import { Description } from "./components/Description";

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

  const handleFileDelete = (event) => {
    const target = event.currentTarget;
    if (target.dataset.id === "card-button-remove") {
      const filteredList = files.filter(
        (file) => file.lastModified != target.id
      );
      setFiles(filteredList);
    }
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Title text="Upload your files" />
        <Description text="to attach to a project" />
        <main>
          <UploadComponent onChange={(event) => handleUploadFile(event)} />
          {files && (
            <FilesList
              files={files}
              onClick={(event) => handleFileDelete(event)}
            />
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};
