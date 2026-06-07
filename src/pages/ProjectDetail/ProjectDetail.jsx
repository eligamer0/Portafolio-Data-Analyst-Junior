import { Navigate, useParams } from 'react-router-dom';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import DashboardMockup from '../../components/DashboardMockup/DashboardMockup.jsx';
import KpiCard from '../../components/KpiCard/KpiCard.jsx';
import Button from '../../components/Button/Button.jsx';
import { projects } from '../../data/projects.js';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    return <Navigate to="/proyectos" replace />;
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">{project.category}</span>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className={styles.techs}>
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <DashboardMockup type={project.imageType} />
        </div>
      </section>

      <section className="section sectionAlt">
        <div className={`container ${styles.studyGrid}`}>
          <StudyBlock title="Problema de Negocio" items={project.businessProblem} />
          <article className={styles.panel}>
            <h2>Datos Utilizados</h2>
            <dl className={styles.dataList}>
              <div>
                <dt>Cantidad de registros</dt>
                <dd>{project.dataUsed.records}</dd>
              </div>
              <div>
                <dt>Variables</dt>
                <dd>{project.dataUsed.variables}</dd>
              </div>
              <div>
                <dt>Fuente de datos</dt>
                <dd>{project.dataUsed.source}</dd>
              </div>
            </dl>
          </article>
          <StudyBlock title={project.slug.includes('ventas') ? 'Limpieza de Datos' : 'Limpieza'} items={project.cleaning} />
          <StudyBlock title="Transformacion" items={project.transformation} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Dashboard</span>
          <h2 className="sectionTitle">Vista ejecutiva para monitorear indicadores clave.</h2>
          <div className={styles.dashboardArea}>
            <DashboardMockup type={project.imageType} />
            <div className={styles.placeholder}>
              <span>Espacio para capturas de Power BI</span>
              <p>Reemplaza este bloque por imagenes reales del dashboard cuando esten disponibles.</p>
            </div>
          </div>

          <div className={styles.kpis}>
            {project.kpis.map((item) => (
              <KpiCard key={item.label} item={item} />
            ))}
          </div>

          {project.alerts ? (
            <div className={styles.alert}>
              <AlertTriangle size={24} aria-hidden="true" />
              <div>
                <strong>{project.alerts[0].label}</strong>
                <span>{project.alerts[0].value} - indicador activo porque el stock es menor de 100 unidades.</span>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section sectionAlt">
        <div className={`container ${styles.insightsGrid}`}>
          <StudyBlock title="Insights" items={project.insights} icon="check" />
          <StudyBlock title="Recomendaciones" items={project.recommendations} icon="check" />
        </div>
        <div className={`container ${styles.back}`}>
          <Button to="/proyectos" variant="secondary">
            Volver a Proyectos
          </Button>
        </div>
      </section>
    </>
  );
}

function StudyBlock({ title, items, icon }) {
  return (
    <article className={styles.panel}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li className={icon === 'check' ? styles.checkedItem : ''} key={item}>
            {icon === 'check' ? <CheckCircle2 size={18} aria-hidden="true" /> : null}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
