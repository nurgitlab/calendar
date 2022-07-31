import {FC} from "react";
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router";

export const Navbar: FC = () => {
    const navigate = useNavigate()

    const auth = true

    const items = [
        {
            label: 'Выйти',
            key: '1',

        }
    ]
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    auth ?
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