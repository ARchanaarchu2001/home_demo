import { Menu } from 'antd'
import React from 'react'
import { HomeOutlined, CalendarOutlined, ScheduleOutlined,FormOutlined ,LogoutOutlined} from '@ant-design/icons'

const MenuList = () => {
    return (
        <Menu mode="vertical" className='menu-bar' style={{ display: 'flex', flexDirection: 'column'}}>

            
            <Menu.Item key="dash board" icon={<HomeOutlined />}></Menu.Item>
            <Menu.Item key="appointment schedule" icon={<ScheduleOutlined />}></Menu.Item>
            <Menu.Item key="calendar" icon={<CalendarOutlined /> }></Menu.Item>
            <Menu.SubMenu key="forms" icon={<FormOutlined />} >
                   <Menu.Item key="task-1" >Daily Notes</Menu.Item>
                   <Menu.Item key="task-2" >APIE Nursing notes </Menu.Item>
                   </Menu.SubMenu>



                   <Menu.Item key="logout" icon={<LogoutOutlined />}  style={{ position: 'absolute', bottom: 10, left: 10 }} ></Menu.Item>

            
                

            
        </Menu>

    )
}

export default MenuList