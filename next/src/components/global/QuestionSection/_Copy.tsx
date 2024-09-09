'use client';

import copy from 'clipboard-copy';
import { useState } from 'react';
import styles from './QuestionSection.module.scss';
import { CopyButtonTypes } from './QuestionSection.types';

export default function Copy({ email }: CopyButtonTypes) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyClick = async () => {
    try {
      await copy(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.error('Nie udało się skopiować');
    }
  };

  return (
    <button className={styles.copy} onClick={handleCopyClick}>
      {isCopied ? 'Skopiowano' : 'Skopiuj'}
    </button>
  );
}
