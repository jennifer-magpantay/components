import { CloudArrowUp } from "@phosphor-icons/react";

export const UploadComponent = ({ onChange }) => {
  return (
    <section className="uploader">
      <div className="uploader__container">
        <CloudArrowUp
          size={48}
          color="#5412c4"
          weight="bold"
          aria-hidden={true}
        />
        <h2 className="section">Upload your files</h2>
        <label htmlFor="file-js">Click or drag files to upload</label>
        <input
          id="file-js"
          name="file"
          type="file"
          accept="image/png, image/jpeg, image/svg+xml, .pdf,.doc"
          multiple
          onChange={onChange}
        />
      </div>
    </section>
  );
};
