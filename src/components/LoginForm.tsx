import {FC, useEffect, useState} from "react";
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


export const LoginForm: FC = () => {
  const {error, isLoading} = useTypedSelector(state => state.auth)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {login} = useActions()


  const submit = () => {
    login(username, password)
  }

  useEffect(() => {
    console.log("isLoading", isLoading)
  }, [isLoading])

  return (
    <Form
      onFinish={submit}
    >
      {error && <div style={{color: 'red'}}>
        {error}
      </div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Введите логин!')]}
      >
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Введите пароль!')]}
      >
        <Input
          type={"password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}