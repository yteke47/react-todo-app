import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { register } from '../../api/authApi';
import { useAuth } from '../../context/AuthContext';

const RegisterForm = () => {
    const { setUser } = useAuth();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values) => {
        try {
            const response = await register(values);
            setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const validateForm = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'E-posta alanı boş bırakılamaz.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Geçerli bir e-posta adresi girin.';
        }

        if (!values.password) {
            errors.password = 'Şifre alanı boş bırakılamaz.';
        } else if (values.password.length < 6) {
            errors.password = 'Şifre en az 6 karakter olmalıdır.';
        }

        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Şifreler eşleşmiyor.';
        }

        return errors;
    };


    return (
        <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={handleSubmit}
        >
            <Form className='authForm'>
                <div className='emailContainer'>
                    <label className='label' htmlFor="email">E-posta:</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div className='passwordContainer'>
                    <label className='label' htmlFor="password">Şifre:</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" className="error" />
                </div>
                <div className='passwordContainer'>
                    <label className='label' htmlFor="confirmPassword">Şifre Onayı:</label>
                    <Field type="password" id="confirmPassword" name="confirmPassword" />
                    <ErrorMessage name="confirmPassword" component="div" className="error" />
                </div>
                <button className='submitButton' type="submit">Kayıt ol</button>
            </Form>
        </Formik>
    );
};

export default RegisterForm;