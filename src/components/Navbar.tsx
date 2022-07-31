import {FC} from "react";
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const Navbar: FC = () => {
    const navigate = useNavigate()

    const {isAuth} = useTypedSelector(state => state.auth)

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
                            <div style={{color: 'white'}}>Nurbek</div>
                            <Menu.Item
                                key={1}
                                onClick={() => console.log('Выйти')}
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