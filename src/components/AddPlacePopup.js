import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onPopupClick, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleAddName(e) {
    setName(e.target.value);
  }

  function handleAddLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="element"
      title="Новое место"
      isOpen={isOpen}
      buttonTitle="Сохранить"
      onClose={onClose}
      onPopupClick={onPopupClick}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_place"
        type="text"
        id="popup-place"
        placeholder="Название"
        name="name"
        minLength="2"
        maxLength="30"
        required
        value={name}
        onChange={handleAddName}
      />
      <span id="popup-place-error" className="popup__error"></span>
      <input
        className="popup__input popup__input_type_link"
        id="popup-link"
        placeholder="Ссылка на картинку"
        name="link"
        type="url"
        required
        value={link}
        onChange={handleAddLink}
      />
      <span id="popup-link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
