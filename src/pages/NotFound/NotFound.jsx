import Button from '../../components/Button/Button.jsx';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <section className={`section ${styles.notFound}`}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Pagina no encontrada</h1>
        <p>La ruta que buscas no existe en este portafolio.</p>
        <Button to="/">Volver al Inicio</Button>
      </div>
    </section>
  );
}
