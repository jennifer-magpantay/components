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
        return <FileSvg size={32} />;

      case "image/png":
        return <FilePng size={32} />;

      case "image/jpeg":
        return <ImageSquare size={32} />;

      case "application/pdf":
        return <FilePdf size={32} />;

      default:
        return <File size={32} />;
    }
  };

  const icon = setIcon(type);
  return (
    <div className="card">
      <div className="card__aside" aria-hidden={true}>
        {icon}
      </div>
      <div className="card__body">
        <p className="card__body--title">{title}</p>
        <p className="card__body--desc">{type}</p>
      </div>
      <div className="card__aside">
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
