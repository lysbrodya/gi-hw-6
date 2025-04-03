import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, onDelet }) {
  return (
    <ul className={css.contactlist}>
      {contacts.map((contact) => (
        <li className={css.contactitem} key={contact.id}>
          <Contact contact={contact} onDelet={onDelet} />
        </li>
      ))}
    </ul>
  );
}
