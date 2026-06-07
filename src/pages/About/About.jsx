import { BriefcaseBusiness, GraduationCap, Target, UserRound } from 'lucide-react';
import { profile, timeline } from '../../data/profile.js';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <aside className={`${styles.profileCard} reveal`}>
          <div className={styles.avatar} aria-label="Foto de perfil placeholder">
            ER
          </div>
          <h1>{profile.name}</h1>
          <p>{profile.title}</p>
        </aside>

        <div className={styles.content}>
          <span className="eyebrow">Sobre Mi</span>
          <h2 className="sectionTitle">Analisis de datos con mentalidad de producto y negocio.</h2>
          <p className="sectionLead">{profile.summary}</p>

          <div className={styles.infoGrid}>
            <article>
              <GraduationCap size={24} aria-hidden="true" />
              <h3>Formacion academica</h3>
              <p>Estudiante del ITLA con formacion en Desarrollo de Software y enfoque en analitica.</p>
            </article>
            <article>
              <BriefcaseBusiness size={24} aria-hidden="true" />
              <h3>Experiencia tecnica</h3>
              <p>Excel, Power BI, SQL, Python, Pandas, Power Query, DAX, React y JavaScript.</p>
            </article>
            <article>
              <Target size={24} aria-hidden="true" />
              <h3>Objetivo profesional</h3>
              <p>Aportar valor a equipos que convierten datos en decisiones medibles y accionables.</p>
            </article>
            <article>
              <UserRound size={24} aria-hidden="true" />
              <h3>Perfil</h3>
              <p>Data Analyst Junior con base Full Stack para crear soluciones tecnicas completas.</p>
            </article>
          </div>

          <div className={styles.timeline}>
            {timeline.map((item) => (
              <article key={item.title}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
