// src/components/ParticipantsSelection.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ParticipantsSelection.module.scss';

interface Participant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'Кандидат' | 'Эксперт';
  availableDates: string[]; // Добавляем поле для доступных дат
  availableTimes: string[];
}
// src/data/testParticipants.ts

// export const testParticipants: Participant[] = [
//   {
//     id: '1',
//     firstName: 'Иван',
//     lastName: 'Иванов',
//     email: 'ivanov@example.com',
//     phone: '+7 (900) 123-45-67',
//     role: 'Кандидат',
//     availableDates: ['15.08', '16.08', '17.08'], // Добавляем доступные даты
//     availableTimes: ['10:00-11:00', '13:00-14:00', '15:00-16:00'],
//   },
//   {
//     id: '2',
//     firstName: 'Петр',
//     lastName: 'Петров',
//     email: 'petrov@example.com',
//     phone: '+7 (900) 234-56-78',
//     role: 'Кандидат',
//     availableDates: ['15.08', '18.08', '19.08'],
//     availableTimes: ['11:00-12:00', '14:00-15:00', '16:00-17:00'],
//   },
//   {
//     id: '3',
//     firstName: 'Мария',
//     lastName: 'Сидорова',
//     email: 'sidorova@example.com',
//     phone: '+7 (900) 345-67-89',
//     role: 'Эксперт',
//     availableDates: ['16.08', '17.08', '20.08'],
//     availableTimes: ['10:00-11:00', '12:00-13:00', '14:00-15:00'],
//   },
//   {
//     id: '4',
//     firstName: 'Анна',
//     lastName: 'Кузнецова',
//     email: 'kuznetsova@example.com',
//     phone: '+7 (900) 456-78-90',
//     role: 'Эксперт',
//     availableDates: ['15.08', '17.08', '21.08'],
//     availableTimes: ['13:00-14:00', '15:00-16:00', '17:00-18:00'],
//   },
// ];

export const testCandidates: Participant[] = [
  {
    id: '1',
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'ivanov@example.com',
    phone: '+7 (900) 123-45-67',
    role: 'Кандидат',
    availableDates: ['15.08', '16.08', '10.08'],
    availableTimes: ['10:00-11:00', '13:00-14:00', '15:00-16:00'],
  },
  {
    id: '2',
    firstName: 'Петр',
    lastName: 'Петров',
    email: 'petrov@example.com',
    phone: '+7 (900) 234-56-78',
    role: 'Кандидат',
    availableDates: ['15.08', '11.08', '13.08'],
    availableTimes: ['11:00-12:00', '14:00-15:00', '16:00-17:00'],
  },
];

export const testExperts: Participant[] = [
  {
    id: '1',
    firstName: 'Мария',
    lastName: 'Сидорова',
    email: 'sidorova@example.com',
    phone: '+7 (900) 345-67-89',
    role: 'Эксперт',
    availableDates: ['16.08', '13.08', '10.08'],
    availableTimes: ['10:00-11:00', '12:00-13:00', '14:00-15:00'],
  },
  {
    id: '2',
    firstName: 'Анна',
    lastName: 'Кузнецова',
    email: 'kuznetsova@example.com',
    phone: '+7 (900) 456-78-90',
    role: 'Эксперт',
    availableDates: ['15.08', '13.08', '10.08'],
    availableTimes: ['13:00-14:00', '15:00-16:00', '17:00-18:00'],
  },
];

const timeslots = [
  '10:00-11:00',
  '11:00-12:00',
  '12:00-13:00',
  '13:00-14:00',
  '14:00-15:00',
  '15:00-16:00',
  '16:00-17:00',
  '17:00-18:00',
];

const ParticipantsSelection: React.FC = () => {
  // const [participants, setParticipants] = useState<Participant[]>([]);
  // const [filteredParticipants, setFilteredParticipants] = useState<Participant[]>([]);
  const [candidates, setCandidates] = useState<Participant[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<Participant[]>([]);
  const [experts, setExperts] = useState<Participant[]>([]);
  const [filteredExperts, setFilteredExperts] = useState<Participant[]>([]);
  const [selectedRole, setSelectedRole] = useState<'Кандидат' | 'Эксперт' | ''>('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<Participant | null>(null);
  const [selectedExpert, setSelectedExpert] = useState<Participant | null>(null);

  useEffect(() => {
    // // Использование тестовых данных
    // setParticipants(testParticipants);
    // setFilteredParticipants(testParticipants);

    // Использование тестовых данных
    setExperts(testExperts);
    setFilteredExperts(testExperts);

    // Использование тестовых данных
    setCandidates(testCandidates);
    setFilteredCandidates(testCandidates);

    // // Загрузка данных с сервера
    // axios.get('/api/participants')
    //   .then(response => {
    //     setParticipants(response.data);
    //     setFilteredParticipants(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Ошибка загрузки данных', error);
    //   });
  }, []);

  useEffect(() => {
    // Фильтрация участников на основе выбранных фильтров
    let filteredC = candidates;
    let filteredE = experts;

    if (selectedRole) {
      filteredC = filteredC.filter((participant) => participant.role === selectedRole);
      filteredE = filteredE.filter((participant) => participant.role === selectedRole);
    }

    if (selectedDays.length > 0) {
      filteredC = filteredC.filter((participant) =>
        selectedDays.some((day) => participant.availableDates.includes(day)),
      );
      filteredE = filteredE.filter((participant) =>
        selectedDays.some((day) => participant.availableDates.includes(day)),
      );
    }

    if (selectedTimes.length > 0) {
      filteredC = filteredC.filter((participant) =>
        selectedTimes.some((time) => participant.availableTimes.includes(time)),
      );
      filteredE = filteredE.filter((participant) =>
        selectedTimes.some((time) => participant.availableTimes.includes(time)),
      );
    }

    // setFilteredParticipants(filtered);
    setFilteredCandidates(filteredC);
    setFilteredExperts(filteredE);
  }, [selectedRole, selectedDays, selectedTimes, candidates, experts]);

  const handleSelectParticipant = (participant: Participant) => {
    if (participant.role === 'Кандидат') {
      setSelectedCandidate(participant);
    } else if (participant.role === 'Эксперт') {
      setSelectedExpert(participant);
    }
  };

  const handleDayChange = (day: string) => {
    console.log(selectedDays); //dsfffffffffffffffffffffffffffffffffffffffffff
    setSelectedDays((prevDays) => {
      if (prevDays.includes(day)) {
        return prevDays.filter((d) => d !== day);
      } else {
        return [...prevDays, day];
      }
    });
  };

  const handleTimeChange = (time: string) => {
    setSelectedTimes((prevTimes) => {
      if (prevTimes.includes(time)) {
        return prevTimes.filter((t) => t !== time);
      } else {
        return [...prevTimes, time];
      }
    });
  };

  return (
    <div className={styles.participantsSelection}>
      <div className={styles.participantsSelection__filters}>
        <label className={styles.participantsSelection__label}>Роль</label>
        <div className={styles.participantsSelection__filterItem}>
          <select
            className={styles.participantsSelection__select}
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value as any)}
          >
            <option value=''>Все</option>
            <option value='Кандидат'>Кандидат</option>
            <option value='Эксперт'>Эксперт</option>
          </select>
        </div>
        <label className={styles.participantsSelection__label}>Выбор даты</label>
        <div className={styles.participantsSelection__filterItem}>
          {Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() + i + 1);
            const day = date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });

            return (
              <div key={day} className={styles.participantsSelection__item}>
                <input
                  className={styles.participantsSelection__checkbox}
                  type='checkbox'
                  id={day}
                  checked={selectedDays.includes(day)}
                  onChange={() => handleDayChange(day)}
                />
                <label htmlFor={day} className={styles.participantsSelection__labelCheckbox}>
                  {day}
                </label>
              </div>
            );
          })}
        </div>
        <label className={styles.participantsSelection__label}>Выбор времени</label>
        <div className={styles.participantsSelection__filterItem}>
          {timeslots.map((timeslot) => (
            <div key={timeslot} className={styles.participantsSelection__item}>
              <input
                className={styles.participantsSelection__checkbox}
                type='checkbox'
                id={timeslot}
                checked={selectedTimes.includes(timeslot)}
                onChange={() => handleTimeChange(timeslot)}
              />
              <label htmlFor={timeslot} className={styles.participantsSelection__labelCheckbox}>
                {timeslot}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* <div className={styles.participantsSelection__participantsList}>
        {filteredParticipants.map((participant) => (
          <div
            key={participant.id}
            className={`${styles.participantsSelection__participantCard} ${
              (selectedCandidate &&
                participant.id !== selectedCandidate.id &&
                participant.role === 'Кандидат') ||
              (selectedExpert &&
                participant.id !== selectedExpert.id &&
                participant.role === 'Эксперт')
                ? styles.disabled
                : ''
            }`}
            onClick={() => handleSelectParticipant(participant)}
          >
            <div className={styles.participantsSelection__participantInfo}>
              <p>
                <strong>
                  {participant.firstName} {participant.lastName}
                </strong>
              </p>
              <p>{participant.email}</p>
              <p>{participant.phone}</p>
              <p>{participant.role}</p>
            </div>
            <input
              type='checkbox'
              checked={
                (participant.role === 'Кандидат' && selectedCandidate?.id === participant.id) ||
                (participant.role === 'Эксперт' && selectedExpert?.id === participant.id)
              }
              onChange={() => handleSelectParticipant(participant)}
            />
          </div>
        ))}
      </div> */}

      <div className={styles.participantsSelection}>
        {/* Секция кандидатов */}
        <div className={styles.participantsSelection__block}>
          <h3>Кандидаты</h3>
          <div className={styles.participantsSelection__participantsList}>
            {candidates.map((participant) => (
              <div
                key={participant.id}
                className={`${styles.participantsSelection__participantCard} ${
                  selectedCandidate && participant.id !== selectedCandidate.id
                    ? styles.disabled
                    : ''
                }`}
                onClick={() => handleSelectParticipant(participant)}
              >
                <div className={styles.participantsSelection__participantInfo}>
                  <p>
                    <strong>
                      {participant.firstName} {participant.lastName}
                    </strong>
                  </p>
                  <p>{participant.email}</p>
                  <p>{participant.phone}</p>
                  <p>{participant.role}</p>
                  <p>Доступные даты: {participant.availableDates.join(', ')}</p>
                  <p>Доступное время: {participant.availableTimes.join(', ')}</p>
                </div>
                <input
                  type='checkbox'
                  checked={selectedCandidate?.id === participant.id}
                  onChange={() => handleSelectParticipant(participant)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Секция экспертов */}
        <div className={styles.participantsSelection__block}>
          <h3>Эксперты</h3>
          <div className={styles.participantsSelection__participantsList}>
            {experts.map((participant) => (
              <div
                key={participant.id}
                className={`${styles.participantsSelection__participantCard} ${
                  selectedExpert && participant.id !== selectedExpert.id ? styles.disabled : ''
                }`}
                onClick={() => handleSelectParticipant(participant)}
              >
                <div className={styles.participantsSelection__participantInfo}>
                  <p>
                    <strong>
                      {participant.firstName} {participant.lastName}
                    </strong>
                  </p>
                  <p>{participant.email}</p>
                  <p>{participant.phone}</p>
                  <p>{participant.role}</p>
                  <p>Доступные даты: {participant.availableDates.join(', ')}</p>
                  <p>Доступное время: {participant.availableTimes.join(', ')}</p>
                </div>
                <input
                  type='checkbox'
                  checked={selectedExpert?.id === participant.id}
                  onChange={() => handleSelectParticipant(participant)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsSelection;
