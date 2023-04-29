import { useState, useEffect } from "react";
import "./styles/app.scss";

import { resizeHandler } from "./assets/helpers/resizeHandler";

import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Description } from "./components/Description";
import { Uploader } from "./components/Uploader";
import { FilesList } from "./components/FilesList";
import { Footer } from "./components/Footer";

export const App = () => {
  const [files, setFiles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    resizeHandler(isMobile, setIsMobile, 900);
    window.addEventListener("resize", () => {
      resizeHandler(isMobile, setIsMobile, 900);
    });

    return () => {
      window.removeEventListener("resize", () => {
        resizeHandler(isMobile, setIsMobile, 900);
      });
    };
  });

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
          <Uploader
            isMobile={isMobile}
            onChange={(event) => handleUploadFile(event)}
          />
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
