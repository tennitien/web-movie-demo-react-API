import React from 'react';
import './Button.scss';

export default function Button(props) {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
