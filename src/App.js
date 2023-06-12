import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { useAuth } from './context/AuthContext';
import httpClient from './api/httpClient';
import TodoComponent from './components/todoComponent';
import AuthComponent from './components/authComponent';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const { auth, logOut } = useAuth();

  useEffect(() => {
    const responseInterceptor = httpClient.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        notifyError(error.response);
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          logOut();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      httpClient.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut]);

  const notifyError = (error) => {
    let errorMessage = "Bir hata oluştu.";

    switch (error.status) {
      case 400:
        errorMessage = "Geçersiz istek.";
        break;
      case 401:
        errorMessage = "Yetkilendirme hatası.";
        break;
      case 403:
        errorMessage = "Erişim reddedildi.";
        break;
      case 404:
        errorMessage = "Kaynak bulunamadı.";
        break;
      case 409:
        errorMessage = "Kullanıcı zaten kayıtlı!";
        break;
      case 500:
        errorMessage = "Sunucu hatası.";
        break;
      default:
        errorMessage = "Bir hata oluştu.";
        break;
    }

    toast.error(errorMessage, {
      type: error
    });
  };


  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        {auth ? <TodoComponent /> : <AuthComponent />}
      </div>
    </div>
  );
}
