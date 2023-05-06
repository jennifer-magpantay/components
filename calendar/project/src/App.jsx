import React from "react";
import "./styles/app.scss";

import { Header } from "../../../file-upload/project/src/components/Header";
import { Footer } from "../../../file-upload/project/src/components/Footer";
import { Title } from "../../../file-upload/project/src/components/Title";
import { Description } from "./components/Description";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Title text="Calendar" />
        <Description text="Simple date picker built with react-calendar to add to any project" />
        <div className="calendar--container" data-calendar>
          <input
            type="text"
            className="calendar"
            id="calendar-js"
            name="calendar"
            placeholder="Select a date from the calendar"
            readOnly
          />
          <label htmlFor="calendar-js">Choose date</label>
        </div>
      </main>
      <Footer />
    </>
  );
};
