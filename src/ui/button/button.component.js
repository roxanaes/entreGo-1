import React from "react";
import Button from '@material-ui/core/Button';
import './button.component.scss';

function UIbutton(props) {
  const {
    className,
    name,
    id,
    variant,
    type = "button",
    children,
    color,
    fullWidth,
    component,
    to
  } = props;
  return (
    <Button
      className={`ui-button ${className}`}
      name={name}
      id={id}
      variant={variant}
      type={type}
      color={color}
      fullWidth={fullWidth}
      component={component}
      to={to}
    >
      {children}
    </Button>
  )
}

export {
  UIbutton
}
