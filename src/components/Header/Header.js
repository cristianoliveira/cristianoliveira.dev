import React from 'react';
import StickyHeader from './StickyHeader';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles['header']}>
      <StickyHeader />
      <div className={styles['header__container']}>
        <div className={styles['header__dev-info']}>
          <div className={styles['header__logo']}>
            <a href="#" className={styles['header__logo']}>
              <img
                src="https://avatars0.githubusercontent.com/u/3959744?s=460&v=4"
                alt="Cristian Oliveira"
              />
            </a>
          </div>
          <div className={styles['description']}>
            <h3>
              <a href="/pages/about">Cristian Oliveira</a>
            </h3>
            <span className="subtitle">
              A simple developer. Also known as the Brazilian guy that lives in
              Berlin, makes some code, cycles around while trying to learn
              German 🇩🇪{' '}
            </span>
          </div>
        </div>
        <div className={styles['header__footer']}>
          <a href="#posts">Click here to check thoughts 🤔💭</a>
        </div>
      </div>
    </header>
  );
}
export default Header;
