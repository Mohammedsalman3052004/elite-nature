'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMotionValue, useInView, animate } from 'framer-motion';
import '../css/counting-number.css';

type CounterProps = {
  to: number;
  duration?: number;
  suffix?: string;
};

const Counter = ({ to, duration = 2, suffix = '' }: CounterProps) => {
  const count = useMotionValue(0);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: 'easeOut',
        onUpdate: (latest) => {
          const updated = Number.isInteger(to)
            ? Math.floor(latest)
            : parseFloat(latest.toFixed(1));
          setCurrent(updated);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration, count]);

  return (
    <span ref={ref}>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
};

const CountingNumber = () => {
  return (
    <div className="main" id="counting-number">
      <div className="counting-number-section">
        <div className="counting-number">
          <div className="counting-number-container">
            <p className="numbers"><Counter to={10000} suffix="+" /></p>
            <p className="counting-number-text">Happy Client</p>
          </div>
          <div className="counting-number-container">
            <p className="numbers"><Counter to={2000} suffix="+" /></p>
            <p className="counting-number-text">Member Active</p>
          </div>
          <div className="counting-number-container">
            <p className="numbers"><Counter to={4.8} /></p>
            <p className="counting-number-text">Client Reviews</p>
          </div>
          <div className="counting-number-container">
            <p className="numbers"><Counter to={5} suffix="+" /></p>
            <p className="counting-number-text">Exprience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountingNumber;
