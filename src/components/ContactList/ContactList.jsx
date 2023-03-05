import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={style.list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={style.contacts__item}>
            <span className={style.item__name}>{name}:</span>
            <span className={style.item__number}>{number}</span>
            <button
              type="button"
              className={style.button}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
