import { Database, Eraser, LineChart, Search, Sparkles, Target } from 'lucide-react';
import { analysisProcess } from '../../data/profile.js';
import styles from './ProcessSteps.module.css';

const icons = [Database, Eraser, Sparkles, Search, LineChart, Target];

export default function ProcessSteps() {
  return (
    <div className={styles.process}>
      {analysisProcess.map((step, index) => {
        const Icon = icons[index];
        return (
          <article className={styles.step} key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <Icon size={24} aria-hidden="true" />
            <h3>{step}</h3>
          </article>
        );
      })}
    </div>
  );
}
