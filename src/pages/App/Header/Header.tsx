import './header.css'

import { DownOutlined } from '@ant-design/icons'
import { Button, Image, Menu } from 'antd'
import { ReactElement } from 'react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(): ReactElement {
  const [visibleNavDrawer, setVisibleNavDrawer] = useState(false)
  const loggedIn = true
  return (
    <div className='nav__container'>
      {/* Logo */}
      <div>
        <Link to='/'>
          <Image width={50} src='../../../assets/image/logo.png' />
          <img
            src=''
            style={{ width: 50, height: 50, marginLeft: 16 }}
            alt='Logo'
          />
        </Link>
      </div>

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

          {loggedIn ? (
            <Menu.Item key='login'>
              <Button
                size='small'
                href='/login'
                type='primary'
                onClick={() => console.log('login handle')}
              >
                Login
              </Button>
            </Menu.Item>
          ) : (
            <Menu.Item key='logout'>
              <Button
                size='small'
                type='primary'
                onClick={() => console.log('logout handle')}
              >
                Logout
              </Button>
            </Menu.Item>
          )}
        </Menu>
      </div>
    </div>
  )
}
