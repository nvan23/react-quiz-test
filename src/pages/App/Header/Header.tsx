import { ReactElement } from 'react'
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { DownOutlined } from '@ant-design/icons'
import { Button, Image, Menu, Avatar } from 'antd'

import './header.css'

import { isLoggedIn, loadUser, logout } from '../../../services/user'

interface userInterface {
  username?: string,
  password?: string,
}

export default function Header (): ReactElement {
  const [, setVisibleNavDrawer] = useState<boolean>(false)
  const [user, setUser] = useState<userInterface>(null)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  const { SubMenu } = Menu
  let history = useHistory()

  useEffect(() => {
    if (isLoggedIn()) {
      return setLoggedIn(isLoggedIn())
    }
  }, [])

  useEffect(() => {
    if (loadUser()) {
      setUser(loadUser())
    }
  }, [])

  function handleLogout () {
    logout()
    setUser(null)
    setLoggedIn(false)
    return history.push("/")
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

          {!loggedIn ? (
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
              icon={<Avatar src='default_avatar.jpg' />}
              title={`${user?.username}`}
            >
              <Menu.Item
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button
                  key='logout'
                  size='small'
                  type='primary'
                  danger
                  onClick={() => handleLogout()}
                >
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
