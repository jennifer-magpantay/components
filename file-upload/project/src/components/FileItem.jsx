import { Card } from "./Card";

export const FileItem = ({ name, type, lastModified }) => {
  return <Card id={lastModified} title={name} type={type} />;
};
