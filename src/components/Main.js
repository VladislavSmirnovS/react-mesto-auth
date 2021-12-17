import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__cover">
          <div
            className="profile__avatar"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          ></div>
          <div className="profile__info">
            <div className="profile__name-block">
              <h1 className="profile__info-name">{currentUser.name}</h1>
              <button
                onClick={props.onEditProfile}
                className="profile__edit-button"
                type="button"
                aria-label="открыть редактирование профиля"
              ></button>
            </div>
            <p className="profile__info-profession">{currentUser.about}</p>
          </div>
        </div>

        <button
          onClick={props.onAddPlace}
          className="profile__button-add"
          type="button"
          aria-label="добавить информацию"
        ></button>
      </section>

      <section className="elements">
        {props.cards.map((item) => (
            <Card
              card={item}
              key={item['_id']}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
            />
        ))}
      </section>
    </main>
  );
}

export default Main;
