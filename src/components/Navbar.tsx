import {FC} from "react";
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedDispatch} from "../hooks/useTypedDispatch";
import {useActions} from "../hooks/useActions";

export const Navbar: FC = () => {
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()

    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth ?
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                            style={{minWidth: '100px'}}
                        >
                            <div style={{color: 'white'}}>
                                {user.username}
                            </div>
                            <Menu.Item
                                key={1}
                                onClick={logout}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                        :
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                            style={{minWidth: '100px'}}
                        >
                            <Menu.Item
                                key={2}
                                onClick={() => navigate(RouteNames.LOGIN)}
                            >
                                Логин
                            </Menu.Item>
                        </Menu>
                }
            </Row>
        </Layout.Header>
    )
}