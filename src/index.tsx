import './index.css'

import { ConfigProvider } from 'antd'
import vi_VN from 'antd/lib/locale/vi_VN'
import { StrictMode } from 'react'
import { render } from 'react-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'

render(
	<ConfigProvider locale={vi_VN}>
		<StrictMode>
			<App />
		</StrictMode>
	</ConfigProvider>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
