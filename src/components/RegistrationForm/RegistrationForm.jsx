import React from 'react';
import {Form, Button, Input} from 'antd';
import {Link} from "react-router-dom";
import {MaskedInput} from "antd-mask-input";
import './RegistrationForm.css';


const RegistrationForm = ({ onToggleForm }) => {

    return (
        <div className="registration-form-container">
            <Form
                layout="horizontal"
            >
                <div className="registration-form-header">
                    <h2>Создать аккаунт</h2>
                </div>
                <Form.Item
                    label="Имя:"
                    name="firstName"
                >
                    <Input required/>
                </Form.Item>
                <Form.Item
                    label="Фамилия:"
                    name="lastName"
                >
                    <Input required/>
                </Form.Item>
                <Form.Item
                    label="Номер телефона:"
                    name="phoneNumber"
                >
                    <MaskedInput
                        mask={
                            '(000) 000-00-00'
                        }
                        addonBefore="+7"
                        placeholder="(___)__ ____" required/>
                </Form.Item>
                <Form.Item
                    label="Пароль:"
                    name="password"
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    label="Повторите пароль:"
                    name="matchedPassword"
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Создать аккаунт
                    </Button>
                </Form.Item>

                <Form.Item>
                    <span>Войти в аккаунт </span>
                    <Link to='/' className="smth">Войти</Link>
                </Form.Item>
            </Form>
        </div>
    );
};
export default RegistrationForm;
