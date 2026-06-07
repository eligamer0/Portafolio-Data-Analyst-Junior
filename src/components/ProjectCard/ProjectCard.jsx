import { ArrowUpRight } from 'lucide-react';
import Button from '../Button/Button.jsx';
import DashboardMockup from '../DashboardMockup/DashboardMockup.jsx';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <article className={`${styles.card} reveal`}>
      <DashboardMockup type={project.imageType} />
      <div className={styles.content}>
        <span className={styles.category}>{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.techs}>
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <Button to={`/proyectos/${project.slug}`} variant="ghost" icon={ArrowUpRight}>
          Ver Caso de Estudio
        </Button>
      </div>
    </article>
  );
}
