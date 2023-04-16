import "./styles/app.scss";

import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { UploadComponent } from "./components/UploadComponent";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Title text="File Uploader" />
        <main>
          <UploadComponent />
        </main>
      </div>
      <Footer />
    </>
  );
};
