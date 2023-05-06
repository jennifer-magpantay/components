import React from "react";
import "./styles/app.scss";

import { Header } from "../../../file-upload/project/src/components/Header";
import { Footer } from "../../../file-upload/project/src/components/Footer";
import { Title } from "../../../file-upload/project/src/components/Title";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Title text="Calendar" />
      </main>
      <Footer />
    </>
  );
};
