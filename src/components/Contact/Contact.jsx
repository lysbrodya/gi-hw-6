import { FaUser, FaPhone } from "react-icons/fa6";
import React from "react";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
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
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
