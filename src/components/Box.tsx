import { ReactElement } from 'react'
import React from 'react'

export default function Box (props): ReactElement {
  const { children, ...restProps } = props

  return (
    <div
      style={{
        padding: '14px 8px 4px 8px',
        border: '1px solid #F0F0F0',
        boxSizing: 'border-box',
        borderRadius: 2,
        width: '60%',
      }}
      {...restProps}
    >
      {children}
    </div >
  )
}
