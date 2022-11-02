import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import CloudService from './service/cloud_service';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const cloudService = new CloudService();
const FileInput = (props) => <ImageFileInput {...props} cloudService={cloudService} />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
);
