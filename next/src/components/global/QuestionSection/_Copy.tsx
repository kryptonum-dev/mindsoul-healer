'use client';

import { useState } from 'react';
import styles from './QuestionSection.module.scss';
import { CopyButtonTypes } from './QuestionSection.types';

export default function Copy({ email }: CopyButtonTypes) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <button
      className={styles.copy}
      onClick={() => {
        navigator.clipboard.writeText(email);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      }}
    >
      {isCopied ? 'Skopiowano' : 'Skopiuj'}
    </button>
  );
}
