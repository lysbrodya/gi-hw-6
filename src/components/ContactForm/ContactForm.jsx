import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { ErrorMessage } from "formik";

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: "",
    number: "",
  };
  const FormSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string("Must be a valid number!")
      .min(5, "Too Short!")
      .required("Required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), ...values });
    console.log({ id: nanoid(), ...values });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" className={css.erm} />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="tel" name="number" id={numberFieldId} />
        <ErrorMessage name="name" component="span" className={css.erm} />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
