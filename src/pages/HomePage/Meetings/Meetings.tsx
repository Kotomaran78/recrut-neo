import React from 'react';
import { useAuth } from '@context/AuthContext';
import styles from './Meetings.module.scss';
import { Link } from 'react-router-dom';

// Интерфейс для карточки встречи
interface MeetingCardProps {
  date: string;
  recruiter: string;
  expert: string;
  candidate: string;
  link: string;
}

// Тестовые данные
const testMeetings: MeetingCardProps[] = [
  {
    date: '2024-08-09',
    recruiter: 'Иван Иванов',
    expert: 'Анна Петрова',
    candidate: 'Сергей Кузнецов',
    link: 'https://example.com/meeting1',
  },
  {
    date: '2024-08-10',
    recruiter: 'Мария Смирнова',
    expert: 'Дмитрий Михайлов',
    candidate: 'Ольга Васильева',
    link: 'https://example.com/meeting2',
  },
];

const Meetings: React.FC = () => {
  const { userRole } = useAuth();

  return (
    <section className={styles.meetings}>
      <div className={styles.meetings__header}>
        <h2>Ваши встречи</h2>
        {userRole === 'Рекрутер' && (
          <Link to='/create-meeting' className={styles.meetings__createButton}>
            Создать встречу
          </Link>
        )}
      </div>
      <div className={styles.meetings__cardsContainer}>
        {testMeetings.map((meeting, index) => (
          <div key={index} className={styles.meetings__card}>
            <p><strong>Дата:</strong> {meeting.date}</p>
            <p><strong>Рекрутер:</strong> {meeting.recruiter}</p>
            <p><strong>Эксперт:</strong> {meeting.expert}</p>
            <p><strong>Кандидат:</strong> {meeting.candidate}</p>
            <p><strong>Ссылка на встречу:</strong> <a href={meeting.link} target='_blank' rel='noopener noreferrer'>{meeting.link}</a></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meetings;
