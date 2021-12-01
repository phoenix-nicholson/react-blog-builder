import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle, font, align, text }) {
  return (
    <div className={`preview ${font}`} style={{ textAlign: align }}>
      <h1> {title}</h1>
      <h3> {subtitle}</h3>
      <p>{text}</p>
    </div>
  );
}
