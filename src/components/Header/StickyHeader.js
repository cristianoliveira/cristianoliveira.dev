import React from 'react';
import PropTypes from 'prop-types';
import styles from './StickyHeader.module.scss';
import TwitterSvg from './twitter.svg';
import GithubSvg from './github.svg';
import LinkedinSvg from './linkedin.svg';
import InstagramSvg from './instagram.svg';
import MediumSvg from './medium.svg';

const SocialMedia = ({ children }) => (
  <div className={styles.socialmedia}>{children}</div>
);

function StickyHeader({}) {
  return (
    <div className={styles['sticky']}>
      <SocialMedia>
        <a href="https://twitter.com/cristian_or_" target="_blank">
          <img src={TwitterSvg} alt="twitter" />
        </a>

        <a href="https://github.com/cristianoliveira" target="_blank">
          <img src={GithubSvg} alt="github" />
        </a>

        <a
          href="https://www.linkedin.com/in/cristianoliveiradarosa/"
          target="_blank"
        >
          <img src={LinkedinSvg} alt="linkedin" />
        </a>

        <a href="https://www.instagram.com/_cristianoliveira_/" target="_blank">
          <img src={InstagramSvg} alt="instagram" />
        </a>
        <a
          href="https://medium.com/@cristian.oliveira"
          alt="medium"
          target="_blank"
        >
          <img src={MediumSvg} alt="medium" />
        </a>
      </SocialMedia>
    </div>
  );
}
StickyHeader.defaultProps = {};
StickyHeader.propTypes = {};
export default StickyHeader;
