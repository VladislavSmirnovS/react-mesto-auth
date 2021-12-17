import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onPopupClick, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onPopupClick={onPopupClick}
      onSubmit={handleSubmit}
      buttonTitle="Сохранить"
    >
      <input
        className="popup__input popup__input_type_name"
        type="text"
        id="popup-name"
        placeholder="Ваше имя"
        name="name"
        minLength="2"
        maxLength="40"
        required
        onChange={handleChangeName}
        value={name || ""}
      />
      <span id="popup-name-error" className="popup__error"></span>
      <input
        className="popup__input popup__input_type_job"
        type="text"
        id="popup-profession"
        placeholder="Чем занимаетесь"
        name="about"
        minLength="2"
        maxLength="200"
        required
        onChange={handleChangeDescription}
        value={description || ""}
      />
      <span id="popup-profession-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
