import { ReactElement } from 'react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { DownOutlined, LogoutOutlined } from '@ant-design/icons'
import { Button, Image, Menu, Avatar } from 'antd'

import './header.css'

import { isLoggedIn, loadUser, logout } from '../../../services/user'


export default function Header (): ReactElement {
  const [, setVisibleNavDrawer] = useState<boolean>(false)
  const { SubMenu } = Menu

  function handleLogout () {
    const state: boolean = logout()
    if (state) {
      window.location.reload()
    }
  }

  return (
    <div className='nav__container'>
      {/* Logo */}
      <Link to='/'>
        <div className='nav__logo'>
          <Image
            style={{
              paddingTop: '6px 0',
              margin: '0 20px',
            }}
            width={36}
            src='logo.png'
            preview={false}
          />
          <span className="nav__app-name">
            Quiz App
          </span>
        </div>
      </Link>

      {/* Navbar */}
      <div className='menu__container'>
        <Menu
          mode='horizontal'
          inlineIndent={40}
          overflowedIndicator={
            <DownOutlined onClick={() => setVisibleNavDrawer(true)} />
          }
          style={{ border: 'none' }}
        >
          <Menu.Item key='home'>
            <Link to='/'>Home</Link>
          </Menu.Item>

          <Menu.Item key='quiz-challenge'>
            <Link to='/quiz-challenge'>Quiz challenge</Link>
          </Menu.Item>

          <Menu.Item key='view-result'>
            <Link to='/view-result'>View result</Link>
          </Menu.Item>

          {!isLoggedIn() ? (
            <Menu.Item key='login'>
              <Button
                size='small'
                href='/login'
                type='primary'
                style={{ color: 'white' }}
              >
                Login
              </Button>
            </Menu.Item>
          ) : (
            <SubMenu
              key="username"
              icon={<Avatar src='default_avatar.jpg' style={{ marginBottom: '5px' }} />}
              title={`${loadUser()?.username}`}
            >
              <Menu.Item
                key="username-logout"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button
                  key='logout'
                  size='small'
                  type='link'
                  onClick={() => handleLogout()}
                >
                  <LogoutOutlined />
                  Logout
                </Button>
              </Menu.Item>
            </SubMenu>
          )}
        </Menu>
      </div>
    </div>
  )
}
