import React, { ReactElement } from 'react'

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
  Image,
  Tooltip,
  message,
} from 'antd'

import './login.css'

import { login } from '../../services/user'

interface loginDataInterface {
  username: string,
  password: string,
  remember: boolean,
}

export default function Login (): ReactElement {
  const [form] = Form.useForm()

  const onFinish = (values: loginDataInterface) => {
    const { username, password, remember } = values
    const state: boolean = login(username, password, remember)

    if (!state) {
      form.resetFields()
      message.error('Account and password not match.')
      return
    }

    window.location.reload()
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
            form={form}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
              hasFeedback
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
              hasFeedback
            >
              <Input.Password
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
                <Tooltip title="Coming soon...">
                  <a className="login-form-forgot" href="/reset-password" style={{ pointerEvents: 'auto' }}>
                    Forgot password?
                  </a>
                </Tooltip>
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

