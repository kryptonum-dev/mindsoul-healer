'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import styles from './QuestionSection.module.scss';
import { CopyButtonTypes } from './QuestionSection.types';

export default function Copy({ email }: CopyButtonTypes) {
  return (
    <button
      className={styles.copy}
      onClick={() => {
        navigator.clipboard.writeText(email);
        toast.success('Skopiowano do schowka');
      }}
    >
      Skopiuj
    </button>
  );
}
