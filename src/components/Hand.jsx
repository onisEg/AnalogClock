import React from 'react'

export default function Hand({ handDeg }) {
  return (
    <div className="hand" style={{ transform: `rotate(${handDeg}deg)` }}></div>
  );
}
