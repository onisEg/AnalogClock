import React from 'react'
import Hand from './Hand'
import { useClock } from '../context/ClockContext';

export default function Clock() {
    let { secDeg, hoursDeg, minsDeg } = useClock();
  return (
    <div className="face">
      <Hand handDeg={secDeg} />
      <Hand handDeg={hoursDeg} />
      <Hand handDeg={minsDeg} />
    </div>
  );
}
