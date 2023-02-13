import React from 'react'

const Button = (props) => {
  return (
    <a className={props.classname} href={props.href} rel={props.rel} target={props.target}>{`${props.children}`}</a>
  )
}

export default Button