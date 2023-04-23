import { FileItem } from "./FileItem";
export const FilesList = ({ files }) => {
  return (
    <>
      {files && (
        <section className="files">
          <ul className="files__list">
            {files.map((file, index) => (
              <li
                key={index}
                className="file__list--item"
                id={file.lastModified}
              >
                <FileItem
                  name={file.name}
                  type={file.type}
                  lastModified={file.lastModified}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
