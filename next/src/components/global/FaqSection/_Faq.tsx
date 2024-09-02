'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { EASING } from '@/global/constants';
import Button from '@/components/ui/Button';
import Img from '@/components/ui/image';
import styles from './FaqSection.module.scss';
import { FaqTypes } from './FaqSection.types';

export default function Faq({ list, PlusIcon, MinusIcon, UserIcon, CartIcon }: FaqTypes) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const handleClick = (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault();
    setOpenIndex(i === openIndex ? null : i);
  };
  return (
    <div className={styles.faq}>
      {list.map(({ question, answer, image, cta }, i) => (
        <div className={styles.box}>
          {image ? <Img data={image} sizes='' /> : <div className={styles.user}>{UserIcon}</div>}
          <details key={i} open data-open={openIndex === i}>
            <summary onClick={e => handleClick(e, i)} tabIndex={openIndex === i ? -1 : 0}>
              {question}
              {openIndex === i ? MinusIcon : PlusIcon}
            </summary>
            <motion.div
              initial={{ height: i === 0 ? 'auto' : 0 }}
              animate={{ height: openIndex === i ? 'auto' : 0 }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.4,
                ease: EASING,
              }}
              className={styles.container}
            >
              {answer}
              {!!cta && <Button tabIndex={openIndex === i ? 0 : -1} {...cta} shade='dark' icon={CartIcon} />}
            </motion.div>
          </details>
        </div>
      ))}
    </div>
  );
}
