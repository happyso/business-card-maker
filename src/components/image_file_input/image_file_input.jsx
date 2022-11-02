import React from 'react';
import { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ cloudService, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    const uploaded = await cloudService.uploadImage(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input type="file" ref={inputRef} className={styles.input} accept="image/*" name="file" onChange={onChange} />
      <button onClick={onButtonClick} className={styles.button}>
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
