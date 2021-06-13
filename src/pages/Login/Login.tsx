import React, { useState, ReactElement } from 'react'

import {
  UserOutlined,
  LockOutlined,
} from '@ant-design/icons'

import {
  Button,
  Form,
  Input,
  Result,
  Checkbox,
  Typography,
  Image
} from 'antd'

import './login.css'

export default function Login (): ReactElement {
  const [loginButtonLoading] = useState(false)

  const onFinish = values => {
    console.log(values)
  }

  return (
    <div className='login__container'>
      <Result
        icon={
          <div className='logo_container'>
            <Image
              width={80}
              src='logo.png'
              preview={false}
            />
            <span>
              Quiz App
            </span>
          </div>
        }
        extra={
          <Form
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <div className="remember__container">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password?
                </a>
              </div>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Log in
              </Button>
            </Form.Item>
          </Form>
        }
      />
    </div>
  )
}
