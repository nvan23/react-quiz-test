import './App.css'

import { ConfigProvider } from 'antd'
import vi_VN from 'antd/lib/locale/vi_VN'
import { ReactElement } from 'react'

import AppContainer from './pages/App'

export default function App(): ReactElement {
  return (
    <ConfigProvider locale={vi_VN}>
      <AppContainer />
    </ConfigProvider>
  )
}
