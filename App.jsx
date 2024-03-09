import { useState } from 'react'
import { Button, Layout, theme} from 'antd';
import {MenuUnfoldOutlined,MenuFoldOutlined } from '@ant-design/icons'
import Logo from './components/Logo';
import MenuList from './components/MenuList';


const { Header, Sider}  = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const [collapsed,setCollapsed] =useState(false)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
 const  { token : {colorBgContainer },
} = theme.useToken()

  return (
    <Layout style={{display: 'flex'}}>
      <Sider collapsed={collapsed}  collapsible
      trigger={null}  className='sidebar'>
        <Logo />
        <MenuList />
        
      </Sider>
      <Layout>
        <Header style={{padding: 0,background:colorBgContainer }}>
        </Header>
      </Layout>

    </Layout>
      

    
  )
}

export default App
