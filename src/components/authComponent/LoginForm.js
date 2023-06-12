import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { login } from '../../api/authApi';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
    const { setUser } = useAuth();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await login(values);
            setUser(response.data);
            setSubmitting(false);
        } catch (error) {
            console.error(error);
        }
    };

    const validateForm = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'E-posta alanı boş bırakılamaz.';
        }

        if (!values.password) {
            errors.password = 'Şifre alanı boş bırakılamaz.';
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

                <button className='submitButton' type="submit">Giriş Yap</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;