import { BarChart3, Database, LineChart, PieChart, TrendingUp } from 'lucide-react';
import styles from './DashboardMockup.module.css';

export default function DashboardMockup({ type = 'sales' }) {
  const isInventory = type === 'inventory';
  const bars = isInventory ? [58, 82, 45, 72, 38, 64] : [42, 65, 55, 88, 73, 96];

  return (
    <div className={styles.dashboard} aria-label={`Visual de dashboard ${type}`}>
      <div className={styles.topbar}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.header}>
        <div>
          <p>{isInventory ? 'Inventory Control' : 'Sales Analytics'}</p>
          <strong>{isInventory ? 'Stock Overview' : 'Revenue Overview'}</strong>
        </div>
        <div className={styles.icon}>
          {isInventory ? <Database size={20} aria-hidden="true" /> : <TrendingUp size={20} aria-hidden="true" />}
        </div>
      </div>
      <div className={styles.kpiRow}>
        <div>
          <span>{isInventory ? 'Entradas' : 'Ingresos'}</span>
          <strong>{isInventory ? '18.2K' : '486K'}</strong>
        </div>
        <div>
          <span>{isInventory ? 'Salidas' : 'Margen'}</span>
          <strong>{isInventory ? '15.7K' : '31%'}</strong>
        </div>
        <div className={isInventory ? styles.warning : ''}>
          <span>{isInventory ? 'Stock' : 'Ventas'}</span>
          <strong>{isInventory ? '78' : '12.4K'}</strong>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.chart}>
          {bars.map((height, index) => (
            <i key={height + index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className={styles.side}>
          <LineChart size={28} aria-hidden="true" />
          <PieChart size={28} aria-hidden="true" />
          <BarChart3 size={28} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
