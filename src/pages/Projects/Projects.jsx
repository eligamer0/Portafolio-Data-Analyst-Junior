import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import { projects } from '../../data/projects.js';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Portafolio analitico</span>
        <h1 className="sectionTitle">Proyectos de analisis de datos orientados a decisiones.</h1>
        <p className="sectionLead">
          Casos de estudio con problema de negocio, limpieza, transformacion, KPIs, insights y
          recomendaciones.
        </p>
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
