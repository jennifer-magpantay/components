import { useEffect } from "react";

import { File, X } from "@phosphor-icons/react";

export const Card = ({ id, title, type }) => {
  useEffect(() => {}, []);
  return (
    <div className="card" id={id}>
      <div className="card__aside" aria-hidden={true}>
        <File size={32} />
      </div>
      <div className="card__body">
        <p className="card__body--title">{title}</p>
        <p className="card__body--desc">{type}</p>
      </div>
      <div className="card__aside">
        <button className="card__button--remove" type="button">
          <span className="sr-only">Remove file</span>
          <X size={32} weight="bold" />
        </button>
      </div>
    </div>
  );
};
