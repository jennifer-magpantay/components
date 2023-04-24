import { Card } from "./Card";

export const FileItem = ({ name, type, lastModified, onClick }) => {
  return <Card id={lastModified} title={name} type={type} onClick={onClick} />;
};
