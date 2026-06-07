import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-mi', label: 'Sobre Mi' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Navegacion principal">
        <NavLink className={styles.brand} to="/" onClick={() => setOpen(false)}>
          <span className={styles.brandIcon}>
            <BarChart3 size={22} aria-hidden="true" />
          </span>
          <span>Eliezer Rosario</span>
        </NavLink>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <div className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              to={link.to}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
