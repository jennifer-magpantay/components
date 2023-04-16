import { CloudArrowUp } from "@phosphor-icons/react";

export const UploadComponent = () => {
  return (
    <section className="upload-container">
      <CloudArrowUp size={48} color="#5412c4" weight="bold" />
      <h2 className="">Upload your files</h2>
      <p>Click or drag files to upload</p>
      <input type="file" name="file" id="file-js" />
    </section>
  );
};
