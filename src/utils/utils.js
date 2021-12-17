const editButton = document.querySelector(".profile__edit-button");
const formSubmitProfile = document.querySelector(".popup__form_profile");
const formSubmitElement = document.querySelector(".popup__form_element");
const formSubmitAvatar = document.querySelector(".popup__form_avatar");
const addButton = document.querySelector(".profile__button-add");
const userName = document.querySelector(".profile__info-name");
const userAbout = document.querySelector(".profile__info-profession");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const picturesTemplateSelector = "#element-template";
const avatar = document.querySelector(".profile__avatar");
const savedButtons = document.querySelectorAll(".popup__button-save");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export {
  editButton,
  formSubmitProfile,
  formSubmitElement,
  formSubmitAvatar,
  addButton,
  userName,
  userAbout,
  nameInput,
  jobInput,
  picturesTemplateSelector,
  savedButtons,
  avatar,
  config,
};
