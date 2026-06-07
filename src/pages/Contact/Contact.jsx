import { Github, Linkedin, Mail, Send } from 'lucide-react';
import Button from '../../components/Button/Button.jsx';
import { profile } from '../../data/profile.js';
import styles from './Contact.module.css';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <div>
          <span className="eyebrow">Contacto</span>
          <h1 className="sectionTitle">Hablemos sobre datos, dashboards y oportunidades.</h1>
          <p className="sectionLead">
            Disponible para posiciones junior, pasantias y colaboraciones donde el analisis de datos
            ayude a tomar mejores decisiones.
          </p>

          <div className={styles.links}>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={20} aria-hidden="true" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={20} aria-hidden="true" /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={20} aria-hidden="true" /> {profile.email}
            </a>
          </div>
        </div>

        <form className={styles.form} aria-label="Formulario de contacto" onSubmit={handleSubmit}>
          <label>
            <span>Nombre</span>
            <input type="text" name="name" placeholder="Tu nombre" autoComplete="name" />
          </label>
          <label>
            <span>Correo</span>
            <input type="email" name="email" placeholder="correo@empresa.com" autoComplete="email" />
          </label>
          <label>
            <span>Mensaje</span>
            <textarea name="message" rows="6" placeholder="Cuentame sobre la oportunidad o proyecto." />
          </label>
          <Button type="submit" icon={Send}>
            Enviar Mensaje
          </Button>
        </form>
      </div>
    </section>
  );
}
