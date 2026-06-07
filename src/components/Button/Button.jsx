import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ to, href, children, variant = 'primary', icon: Icon, type = 'button' }) {
  const className = `${styles.button} ${styles[variant]}`;
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" size={18} /> : null}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={className} type={type}>
      {content}
    </button>
  );
}
