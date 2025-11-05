import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  extra?: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  extra,
  className = '',
  hoverable = false,
}) => {
  const cardClasses = [
    styles.card,
    hoverable && styles.hoverable,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses}>
      {(title || extra) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {extra && <div className={styles.extra}>{extra}</div>}
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
};

