import SkillBar from '../../components/SkillBar/SkillBar.jsx';
import { skillGroups } from '../../data/skills.js';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Stack tecnico</span>
        <h1 className="sectionTitle">Habilidades para analizar, modelar y visualizar datos.</h1>
        <p className="sectionLead">
          Herramientas agrupadas por area para mostrar una combinacion practica entre analitica,
          bases de datos y desarrollo web.
        </p>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article className={`${styles.card} reveal`} key={group.category}>
              <h2>{group.category}</h2>
              <div className={styles.skills}>
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} accent={group.accent} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
