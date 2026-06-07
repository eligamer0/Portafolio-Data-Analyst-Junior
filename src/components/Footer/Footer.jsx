import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>(c) 2026 {profile.name}. Portafolio profesional de Data Analytics.</p>
        <div className={styles.socials} aria-label="Redes profesionales">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Correo profesional">
            <Mail size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
