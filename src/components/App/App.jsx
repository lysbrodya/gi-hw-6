import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
// import { useEffect, useState } from "react";

// const contactsArr = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const savedObj = JSON.parse(localStorage.getItem("objectState")) || [];
  //   if (Array.isArray(savedObj)) {
  //     return savedObj;
  //   }
  //   return contactsArr;
  // });

  // useEffect(() => {
  //   localStorage.setItem("objectState", JSON.stringify(contacts));
  // }, [contacts]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
