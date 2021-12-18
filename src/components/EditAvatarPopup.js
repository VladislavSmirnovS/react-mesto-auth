import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onPopupClick }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onPopupClick={onPopupClick}
      onSubmit={handleSubmit}
      buttonTitle="Сохранить"
    >
      <input
        className="popup__input popup__input_type_avatar"
        id="popup-avatar"
        placeholder="Ссылка на картинку"
        name="link"
        type="url"
        required
        ref={avatarRef}
      />
      <span id="popup-avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
