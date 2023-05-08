import React from "react";
import "./styles/app.scss";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Title } from "./components/Title";
import { Description } from "./components/Description";

import { CalendarPlus } from "@phosphor-icons/react";
import { Datepicker } from "./components/Datepicker";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Title
          hasIcon={true}
          icon={<CalendarPlus size={48} color="#844bbb" weight="bold" />}
          text="Calendar"
        />
        <Description text="Simple date picker built with react-calendar to add to any project" />
        <Datepicker />
      </main>
      <Footer />
    </>
  );
};
