import React from 'react';
import styles from './Content.module.scss';

function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}

export default Content;
