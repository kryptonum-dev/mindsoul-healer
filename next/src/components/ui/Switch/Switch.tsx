'use client';

import styles from './Switch.module.scss';
import type { SwitchTypes } from './Switch.types';

const Switch = ({ labelProps, inputProps, children }: SwitchTypes) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      target.checked = !target.checked;
      e.target.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <label {...labelProps} className={`${styles['Switch']} ${labelProps?.className || ''}`}>
      <div className={styles.container}>
        <input type='checkbox' {...inputProps} onKeyDown={handleKeyDown} />
        <div className={styles.box}>
          <CheckIcon />
        </div>
      </div>
      {children}
    </label>
  );
};

export default Switch;

const CheckIcon = () => (
  <svg width={16} height={17} viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g>
      <path
        d='M13.8047 4.0074C14.0651 4.26775 14.0651 4.68986 13.8047 4.95021L6.4714 12.2835C6.21106 12.5439 5.78894 12.5439 5.5286 12.2835L2.19526 8.9502C1.93491 8.68986 1.93491 8.26775 2.19526 8.0074C2.45561 7.74705 2.87772 7.74705 3.13807 8.0074L6 10.8693L12.8619 4.0074C13.1223 3.74705 13.5444 3.74705 13.8047 4.0074Z'
        fill='#FCFCFC'
      />
    </g>
  </svg>
);
