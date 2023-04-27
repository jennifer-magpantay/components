import {
  File,
  X,
  FileSvg,
  FilePng,
  ImageSquare,
  FilePdf,
} from "@phosphor-icons/react";

export const Card = ({ id, title, type, onClick }) => {
  const setIcon = (type) => {
    switch (type) {
      case "image/svg+xml":
        return <FileSvg size={32} color="#7d4195" />;

      case "image/png":
        return <FilePng size={32} color="#128770" />;

      case "image/jpeg":
        return <ImageSquare size={32} color="#128770" />;

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
        color = "#b687ca";
        break;

      case "image/png":
        color = "#1abc9c";
        break;

      case "image/jpeg":
        color = "#1abc9c";
        break;

      case "application/pdf":
        color = "#e85040";
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
          <X size={32} weight="bold" />
        </button>
      </div>
    </div>
  );
};
