import React from 'react';
import { useParams } from 'react-router-dom';
import './Rgb.css';

export default function Rgb() {

  const { r, g, b } = useParams();
  return (
    <div className="wallpaper" style={{ background: `rgb(${r}, ${g}, ${b})` }}>
      <p>{ `rgb(${r}, ${g}, ${b})` }</p>
    </div>
  );
}
