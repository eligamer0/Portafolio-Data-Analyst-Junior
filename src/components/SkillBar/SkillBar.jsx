import styles from './SkillBar.module.css';

export default function SkillBar({ skill, accent = 'cyan' }) {
  return (
    <div className={styles.skill}>
      <div className={styles.top}>
        <span>{skill.name}</span>
        <strong>{skill.level}%</strong>
      </div>
      <div className={styles.track} aria-label={`${skill.name}: ${skill.level}%`}>
        <span className={styles[accent]} style={{ width: `${skill.level}%` }} />
      </div>
    </div>
  );
}
