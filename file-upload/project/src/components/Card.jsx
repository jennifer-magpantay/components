import {
  File,
  X,
  FileSvg,
  FilePng,
  FileJpg,
  FilePdf,
} from "@phosphor-icons/react";

export const Card = ({ id, title, type, size, onClick }) => {
  const setIcon = (type) => {
    switch (type) {
      case "image/svg+xml":
        return <FileSvg size={32} color="#7d4195" />;

      case "image/png":
        return <FilePng size={32} color="#10715e" />;

      case "image/jpeg":
        return <FileJpg size={32} color="#e67e22" />;

      case "application/pdf":
        return <FilePdf size={32} color="#d12b1a" />;

      default:
        return <File size={32} color="#3479e5" />;
    }
  };

  const setIconBackground = (type) => {
    let color = "";
    switch (type) {
      case "image/svg+xml":
        color = "#dfcae8";
        break;

      case "image/png":
        color = "#8ddece";
        break;

      case "image/jpeg":
        color = "#f3bf91";
        break;

      case "application/pdf":
        color = "#f7c0bb";
        break;

      default:
        color = "#8eb5f1";
        break;
    }

    return color;
  };

  const icon = setIcon(type);
  return (
    <div className="card">
      <div
        className="card__aside icon"
        style={{ backgroundColor: setIconBackground(type) }}
        aria-hidden={true}
      >
        {icon}
      </div>
      <div className="card__body">
        <p className="card__body--title">{title}</p>
        <p className="card__body--desc">{type}</p>
      </div>
      <div className="card__aside button">
        <button
          className="card__button--remove"
          id={id}
          type="button"
          data-id="card-button-remove"
          onClick={onClick}
        >
          <span className="sr-only">Remove file</span>
          <X size={24} />
        </button>
      </div>
    </div>
  );
};
