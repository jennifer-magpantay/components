import { CloudArrowUp, FolderNotchPlus } from "@phosphor-icons/react";
import { Description } from "./Description";

export const Uploader = ({ isMobile, onChange }) => {
  return (
    <section className="uploader">
      <div className="uploader__container">
        <div className="icon--container-circle" aria-hidden={true}>
          <FolderNotchPlus
            size={80}
            color="#3479e5"
            weight="fill"
            aria-hidden={true}
          />
        </div>

        <h2 className="section-title">
          Drag & drop your files here or{" "}
          <span>upload from your {isMobile ? "device" : "computer"}</span>
        </h2>
        <label htmlFor="file-js">
          <span className="sr-only">Click or drag files to upload</span>
        </label>
        <input
          id="file-js"
          name="file"
          type="file"
          accept="image/png, image/jpeg, image/svg+xml, .pdf,.doc"
          size={50}
          multiple
          onChange={onChange}
        />
        <Description text="50 MB max file size" />
      </div>
    </section>
  );
};
