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
        <h2 className="">Upload your files</h2>
        <p>Click or drag files to upload</p>
        <input
          id="file-js"
          name="file"
          type="file"
          multiple
          onChange={onChange}
        />
      </div>
    </section>
  );
};
