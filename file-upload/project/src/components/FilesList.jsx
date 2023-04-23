import { FileItem } from "./FileItem";
export const FilesList = ({ files }) => {
  return (
    <>
      {files && (
        <ul>
          {files.map((file, index) => (
            <li key={index} id={file.lastModified}>
              <FileItem filename={file.name} lastModified={file.lastModified} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
