import React from "react";

function ImagePopup({
  onClose,
  card: {
    isOpen,
    element: { name, link },
  },
  onPopupClick,
}) {
  return (
    <div
      className={`popup popup_picture ${isOpen ? "popup_opened" : false}`}
      onClick={onPopupClick}
    >
      <div className="popup__container-picture">
        <button
          onClick={onClose}
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
        />
        <img className="popup__image" src={link} alt={`Фото ${name}`} />
        <h2 className="popup__caption">{name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
