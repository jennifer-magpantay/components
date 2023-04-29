import { FileItem } from "./FileItem";
export const FilesList = ({ files, onClick }) => {
  console.log(files);
  const title =
    files.length != 0
      ? "Uploaded files"
      : "No files currently selected for uploaded";
  return (
    <>
      {files && (
        <section className="files">
          <h2
            className={
              files.length != 0 ? "section__title" : "section__title disabled"
            }
          >
            {title}
          </h2>
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
                  size={file.size}
                  lastModified={file.lastModified}
                  onClick={onClick}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
