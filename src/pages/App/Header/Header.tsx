import './header.css'

import { DownOutlined } from '@ant-design/icons'
import { Button, Menu } from 'antd'
import { ReactElement } from 'react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(): ReactElement {
  const [visibleNavDrawer, setVisibleNavDrawer] = useState(false)
  const loggedIn = true
  return (
    <div className='nav__container'>
      {/* Logo */}
      <Link to='/'>
        <div>
          <img
            src='../../../assets/image/logo.png'
            style={{ width: 50, height: 50, marginLeft: 16 }}
            alt='Logo'
          />
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
          style={{ border: 0 }}
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
              <Link to='/login'>Login</Link>
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
