import { ArrowRight, Mail, TrendingUp } from 'lucide-react';
import Button from '../../components/Button/Button.jsx';
import DashboardMockup from '../../components/DashboardMockup/DashboardMockup.jsx';
import ProcessSteps from '../../components/ProcessSteps/ProcessSteps.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import { profile, stats } from '../../data/profile.js';
import { projects } from '../../data/projects.js';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={`${styles.copy} reveal`}>
            <span className="eyebrow">
              <TrendingUp size={16} aria-hidden="true" /> Portafolio Profesional de Data Analytics
            </span>
            <h1>{profile.name}</h1>
            <h2>{profile.heroTitle}</h2>
            <p>{profile.shortSummary}</p>
            <div className={styles.actions}>
              <Button to="/proyectos" icon={ArrowRight}>
                Ver Proyectos
              </Button>
              <Button to="/contacto" variant="secondary" icon={Mail}>
                Contactar
              </Button>
            </div>
            <div className={styles.stats}>
              {stats.map((stat) => (
                <article key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
          <div className={`${styles.visual} reveal`}>
            <DashboardMockup type="sales" />
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <span className="eyebrow">Metodo de trabajo</span>
          <h2 className="sectionTitle">Proceso de Analisis de Datos</h2>
          <p className="sectionLead">
            Un flujo claro para convertir datos dispersos en visualizaciones, hallazgos y acciones de negocio.
          </p>
          <ProcessSteps />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Casos de estudio</span>
          <h2 className="sectionTitle">Proyectos destacados</h2>
          <div className={styles.projects}>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
