import { CalendarPlus } from "@phosphor-icons/react";

export const Title = ({ text }) => {
  return (
    <>
      <CalendarPlus size={32} color="#242424" />
      <h1 className="title">{text}</h1>;
    </>
  );
};
