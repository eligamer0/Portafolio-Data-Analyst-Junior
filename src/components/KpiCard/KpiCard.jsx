import styles from './KpiCard.module.css';

export default function KpiCard({ item }) {
  return (
    <article className={styles.card}>
      <span>{item.label}</span>
      <strong>{item.value}</strong>
      <em>{item.trend}</em>
    </article>
  );
}
