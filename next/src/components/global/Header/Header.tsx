import Logo from '@/components/ui/Logo';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <>
      <a href='#main' className={styles.skipToMainContent}>
        Przejdź do głównej treści
      </a>
      <header className={styles.header}>
        <div>
          <Logo />
        </div>
      </header>
    </>
  );
}
