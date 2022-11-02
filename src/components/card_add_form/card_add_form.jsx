import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import { useState } from 'react';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [file, setFile] = useState({ fileName: null, fileUrl: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileUrl: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value || '';
    const company = companyRef.current.value || '';
    const theme = themeRef.current.value;
    const title = titleRef.current.value || '';
    const email = emailRef.current.value || '';
    const message = messageRef.current.value || '';
    const fileName = file.fileName || '';
    const fileUrl = file.fileUrl || '';

    const card = {
      id: Date.now(), //uuid
      name,
      company,
      theme,
      title,
      email,
      message,
      fileName,
      fileUrl,
    };

    formRef.current.reset();
    onAdd(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name" />
      <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="Company" />
      <select ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title" />
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email" />
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message" />
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
