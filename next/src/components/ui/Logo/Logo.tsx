import Link from 'next/link';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <Link href='/' className={styles.logo}>
      <span>mind&soulhealer</span>
      <span>Ali Bahrudinov</span>
    </Link>
  );
}
