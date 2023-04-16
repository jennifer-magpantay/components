import "./styles/app.scss";
import { UploadComponent } from "./components/UploadComponent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <h1>Hello Stranger</h1>
        <p>Some</p>
        <main>
          <section className="upload-files">
            <h1>Upload Files</h1>
            <p>Click or drag files to upload</p>
            <UploadComponent />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};
