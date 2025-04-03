import { FaUser, FaPhone } from "react-icons/fa6";
import React from "react";
import css from "./Contact.module.css";
export default function Contact({ contact, onDelet }) {
  return (
    <>
      <div className={css.contact}>
        {" "}
        <p className={css.name}>
          <FaUser className={css.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => onDelet(contact.id)}
      >
        Delete
      </button>
    </>
  );
}
