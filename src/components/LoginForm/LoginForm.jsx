import React from 'react';
import {Form, Button, Input, Checkbox} from "antd";
import { Link } from 'react-router-dom'; // Import Link from React Router

import './LoginForm.css';
import {MaskedInput} from "antd-mask-input";

const LoginForm = ({ onLogin }) => {
    const onFinish = (values) => {
        onLogin(values)
    };
    // const onFinish = async (values) => {
    //     try{
    //         const response = await fetch("/api/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(values)
    //         });
    //         const data = await response.json();
    //         if (data.success) {
    //             console.log("Login successful");
    //         } else {
    //             console.error('Login failed:', data.message);
    //         }
    //     } catch (error) {
    //         console.error('Login failed:', error);
    //     }
    // };
    return (
        <div className="login-form-container">
            <Form
                layout="vertical"
                onFinish={onFinish}
            >
                <div className="login-form-header">
                    <h2>Вход в аккаунт</h2>
                </div>
                <Form.Item
                    label="Номер телефона:"
                    name="phoneNumber"
                >
                    <MaskedInput
                        mask={
                        '(000) 000-00-00'
                        }
                        addonBefore="+7"
                        placeholder="(___)__ ____" required />
                </Form.Item>

                <Form.Item
                    label="Пароль:"
                    name="password"
                >
                    <Input.Password placeholder="Введите пароль" required />
                </Form.Item>

                <Form.Item className="remember-me" block>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>
                    <a className="password-forgot" href="#">
                        Забыли пароль?
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Войти
                    </Button>
                </Form.Item>
                <Form.Item>
                    <span>Нет аккаунта? </span>
                    {/*<a className="login-form-forgot" onClick={onToggleForm} href="./RegistrationForm">*/}
                    {/*    Зарегистрироваться*/}
                    {/*</a>*/}
                    <Link to='/RegistrationForm' className="login-form-forgot">Зарегистрироваться </Link>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginForm;