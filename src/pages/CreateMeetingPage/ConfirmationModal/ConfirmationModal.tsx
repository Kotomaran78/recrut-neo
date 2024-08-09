// src/components/ConfirmationModal.tsx
import React from 'react';
import styles from './ConfirmationModal.module.scss';

interface ConfirmationModalProps {
  title: string;
  description: string;
  participants: any[]; // Массив выбранных участников
  date: string;
  time: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  description,
  participants,
  date,
  time,
  onClose,
  onConfirm
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3>Подтверждение встречи</h3>
        <p><strong>Название:</strong> {title}</p>
        <p><strong>Описание:</strong> {description}</p>
        <p><strong>Дата:</strong> {date}</p>
        <p><strong>Время:</strong> {time}</p>
        <div className={styles.participants}>
          <h4>Участники:</h4>
          {/* Здесь можно отобразить информацию о выбранных участниках */}
        </div>
        <div className={styles.actions}>
          <button onClick={onClose}>Отмена</button>
          <button onClick={onConfirm}>Подтвердить</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
