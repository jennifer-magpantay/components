import { X, File } from "@phosphor-icons/react";
export const FileItem = ({ filename, lastModified }) => {
  return (
    <div className="card-container" id={lastModified}>
      <div className="card-icon" aria-hidden={true}>
        <File size={32} weight="bold" />
      </div>
      <div className="card-content">
        <p>{filename}</p>
        <button type="button">
          <span>Remove file</span> <X size={32} weight="bold" />
        </button>
      </div>
    </div>
  );
};
