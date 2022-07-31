import {FC} from "react";
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedDispatch} from "../hooks/useTypedDispatch";


export const LoginForm: FC = () => {
    const dispatch = useTypedDispatch()

    const submit = () => {
        dispatch(AuthActionCreators.login('', ''))
    }

    return (
        <Form
            onFinish={submit}
        >
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Введите логин!')]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введите пароль!')]}
            >
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}