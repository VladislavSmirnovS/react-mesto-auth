import React from "react";

function PopupWithForm({
  name,
  title,
  buttonTitle,
  isOpen,
  onClose,
  children,
  onPopupClick,
  onSubmit,
}) {
  return (
    <div
      className={`popup popup_${name} ${isOpen ? "popup_opened" : false}`}
      onClick={onPopupClick}
    >
      <div className={"popup__container"}>
        <button
          onClick={onClose}
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
        ></button>
        <h2 className={"popup__title"}>{title}</h2>
        <form
          className={`popup__form popup__form_${name}`}
          name={`popup__form_${name}`}
          onSubmit={onSubmit}
        >
          {children}
          <button
            className={`popup__button-save popup__button-save_${name}`}
            type="submit"
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
