import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__remove ${
    isOwn ? "element__remove_active" : "element__remove_hidden"
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);


  }

  return (
    <div className="element">
      <button
        className="element__big-picture"
        type="button"
        onClick={handleClick}
      >
        <img
          className="element__picture"
          src={props.card.link}
          alt={`Фото ${props.card.name}`}
        />
      </button>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <div className="element__group">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-cover">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="element__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
