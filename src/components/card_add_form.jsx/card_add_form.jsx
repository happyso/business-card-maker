import React from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import { useRef } from 'react';

const CardAddForm = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    //const name = inputRef.current.value;
    //name && addCard(name);

    const name = nameRef.current.value || '';
    const company = companyRef.current.value || '';
    const theme = themeRef.current.value || '';
    const title = titleRef.current.value || '';
    const email = emailRef.current.value || '';
    const message = messageRef.current.value || '';

    const card = {
      id: Date.now(),
      name,
      company,
      theme,
      title,
      email,
      message,
      fileName: '',
      fileUrl: '',
    };

    card && addCard(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name" />
      <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="company" />
      <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title" />
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email" />
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="message" />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
