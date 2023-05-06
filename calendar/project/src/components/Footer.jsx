import React from "react";

import { Confetti } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer>
      <small>Developed with fun by Jennifer Magpantay </small>
      <Confetti size={18} color="#fafafa" />{" "}
      <small>
        Perfectly designed by{" "}
        <a href="https://dribbble.com/kobmax" target="_blank">
          Maksym Kobets
        </a>
      </small>
    </footer>
  );
};
