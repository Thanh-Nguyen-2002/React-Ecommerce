import {Layout} from 'antd'
const {Header, Content, Footer} = Layout;
import './App.css';
import LayoutFooter from './features/layout/LayoutFooter'
import LayoutHeader from './features/layout/LayoutHeader'
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <Layout className="layout" style={{minHeight: '100vh', width : '100%'}}>
        <Header style={{ 
          padding: '0 50px',
          position: 'fixed',
          width: '100%',
          zIndex: 1000,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}>
          <LayoutHeader />
        </Header>
        <Content style={{
            padding: '24px 50px', 
            marginTop: 64,
            minHeight : 'calc(100vh - 64px)',
            background: '#f0f2f5',
            width : '100%',
            minWidth : 500,
          }}
        >
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </Content>

        <Footer style={{
          padding: '24px 50px',
          borderTop: '1px solid rgb(98, 98, 98)',
          width : '100%'
        }}>
          <LayoutFooter />
        </Footer>
    </Layout>
  )
}

export default App
