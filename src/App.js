import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';



export const App = () => {
  return <>
    <div className='app_wrapper'>

      <Navbar className='app_navbar' bg="dark" variant="dark">
        <Container className='app_navbar_content'>
          <h4 style={{color: '#fff'}}>
            <CameraOutlinedIcon className='app_icon' /> {' '}Photo Booth
          </h4>
          <Nav>
            <Nav.Link href="#home">Моя страница</Nav.Link>
            <Nav.Link href="#messages">Сообщения</Nav.Link>
            <Nav.Link href="#friends">Друзья</Nav.Link>
            <Nav.Link href="#login">Войти</Nav.Link>
          </Nav>

          MY CHANGE!!
        </Container>
      </Navbar>

ggggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!
i make changes bitchessssssss


      <footer className='app_footer'>
        I am footer
      </footer>
    </div>
  </>
}


