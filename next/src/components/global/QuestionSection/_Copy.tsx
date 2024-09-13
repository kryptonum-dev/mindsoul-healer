'use client';

import { useState } from 'react';
import styles from './QuestionSection.module.scss';
import { CopyButtonTypes } from './QuestionSection.types';

export default function Copy({ email }: CopyButtonTypes) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyClick = async () => {
    const buttonEl = document.getElementById('copy-button')!;

    buttonEl.addEventListener('click', () => {});
    try {
      navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.error('Nie udało się skopiować');
    }
  };

  return (
    <button id='copy-button' className={styles.copy} onClick={handleCopyClick}>
      {isCopied ? 'Skopiowano' : 'Skopiuj'}
    </button>
  );
}
