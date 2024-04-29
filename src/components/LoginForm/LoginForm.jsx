import React from 'react';
import { Form, Button, Input, Checkbox } from "antd";
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
    const onFinish = (values) => {
        onLogin(values);
    };

    return (
        <div className="login-form-container">
            <Form
                layout="vertical"
                onFinish={onFinish}>
                <div className="login-form-header">
                    <h2>Вход в аккаунт</h2>
                </div>
                <Form.Item
                    label="Номер телефона:"
                    name="phoneNumber"
                >
                    <Input placeholder="+7(___)__ ____" required />
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
                    <a className="login-form-forgot" href="#">
                        Зарегистрироваться
                    </a>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginForm;
