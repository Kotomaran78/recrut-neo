// // src/pages/Create.tsx
// import React, { useState } from 'react';
// import styles from './Create.module.scss';
// import ConfirmationModal from '@pages/CreateMeetingPage/ConfirmationModal';
// import ParticipantsSelection from '@pages/CreateMeetingPage/ParticipantsSelection';

// // const timeslots = [
// //   '10:00-11:00',
// //   '11:00-12:00',
// //   '12:00-13:00',
// //   '13:00-14:00',
// //   '14:00-15:00',
// //   '15:00-16:00',
// //   '16:00-17:00',
// //   '17:00-18:00',
// // ];

// // const getNext7Days = () => {
// //   const days = [];
// //   for (let i = 1; i <= 7; i++) {
// //     const date = new Date();
// //     date.setDate(date.getDate() + i);
// //     days.push({
// //       dayOfWeek: date.toLocaleDateString('ru-RU', { weekday: 'short' }),
// //       displayDate: date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }), // Отображаемый формат DD.MM
// //       dateISO: date.toISOString().split('T')[0], // Используем формат YYYY-MM-DD для сохранения
// //     });
// //   }
// //   return days;
// // };

// const Create: React.FC = () => {
//   const [meetingTitle, setMeetingTitle] = useState('');
//   const [meetingDescription, setMeetingDescription] = useState('');
//   const [meetingTitle, setMeetingTitle] = useState('');
//   const [meetingDescription, setMeetingDescription] = useState('');
//   const [selectedParticipants, setSelectedParticipants] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTimeslot, setSelectedTimeslot] = useState('');

//   // const days = getNext7Days();

//   // Модальное окно для подтверждения (отдельный компонент)
//   // const [showConfirmationModal, setShowConfirmationModal] = useState(false);

//   // const handleCreateMeeting = (event: React.FormEvent) => {
//   //   event.preventDefault();
//   //   // Показать модальное окно для подтверждения
//   //   setShowConfirmationModal(true);
//   // };

//   return (
//     <section className={styles.create}>
//       <h2 className={styles.create__title}>Создать встречу</h2>
//       <form onSubmit={handleCreateMeeting} className={styles.create__form}>
//         <div className={styles.create__formItem}>
//           <label className={styles.create__label}>Название встречи</label>
//           <input
//             className={styles.create__input}
//             type='text'
//             placeholder='Введите название встречи'
//             value={meetingTitle}
//             onChange={(e) => setMeetingTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.create__formItem}>
//           <label className={styles.create__label}>Описание встречи</label>
//           <textarea
//             className={styles.create__textarea}
//             placeholder='Введите описание встречи'
//             value={meetingDescription}
//             onChange={(e) => setMeetingDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.create__formItem}>
//           <label className={styles.create__label}>Участник 1</label>
//           <input
//             className={styles.create__input}
//             type='text'
//             placeholder=' Введите email участника 1'
//             value={meetingTitle}
//             onChange={(e) => setMeetingTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.create__formItem}>
//           <label className={styles.create__label}>Участник 2</label>
//           <input
//             className={styles.create__input}
//             type='text'
//             placeholder=' Введите email участника 2'
//             value={meetingTitle}
//             onChange={(e) => setMeetingTitle(e.target.value)}
//             required
//           />
//         </div>
//  {/*
//         <div className={styles.create__formItem}>
//           <label className={styles.create__label}>Выбор дня</label>
//           <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required>
//             <option value='' disabled>
//               Выберите день
//             </option>
//             {days.map((day) => (
//               <option key={`${day.displayDate}`} value={`${day.displayDate}`}>
//                 {day.displayDate}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className={styles.create__formItem}>
//           <label className={styles.create__label}>Выбор времени</label>
//           <select
//             value={selectedTimeslot}
//             onChange={(e) => setSelectedTimeslot(e.target.value)}
//             required
//           >
//             {timeslots.map((timeslot) => (
//               <option key={timeslot} value={timeslot}>
//                 {timeslot}
//               </option>
//             ))}
//           </select>
//         </div>*/}

//         {/* Секция с фильтрацией и выбором участников */}
//         {/* <div className={styles.participantsSection}>
//           <label className={styles.create__label}>Выбор участников</label>
//         </div> */}

//         {/* <div className={styles.participantsSection}>
//           <label className={styles.create__label}>Выбор участников</label>
//           <ParticipantsSelection />
//         </div> */}
//         <button type='submit'>Создать встречу</button>
//       </form>

//       {/* Модальное окно подтверждения */}
//       {/* {showConfirmationModal && (
//         <ConfirmationModal
//           title={meetingTitle}
//           description={meetingDescription}
//           participants={selectedParticipants}
//           date={selectedDate}
//           time={selectedTimeslot}
//           onClose={() => setShowConfirmationModal(false)}
//           onConfirm={() => {
//             // Отправка данных на сервер
//           }}
//         />
//       )} */}
//     </section>
//   );
// };

// export default Create;

// // src/pages/Create.tsx
// import React, { useState } from 'react';
// import styles from './Create.module.scss';

// const Create: React.FC = () => {
//   const [meetingTitle, setMeetingTitle] = useState('');
//   const [meetingDescription, setMeetingDescription] = useState('');
//   const [ychastnik1email, setychastnik1email] = useState('');
//   const [ychastnik2email, setychastnik2email] = useState('');

//   const handleSubmitForm = (event: React.FormEvent) => {
//     event.preventDefault();
//   };

//   return (
//     <section className={styles.create}>
//       <h2 className={styles.create__title}>Создать встречу</h2>
//       <form onSubmit={handleSubmitForm} className={styles.create__form}>
//         <div className={styles.create__formItem}>
//           <label className={styles.create__label}>Название встречи</label>
//           <input
//             className={styles.create__input}
//             type='text'
//             placeholder='Введите название встречи'
//             value={meetingTitle}
//             onChange={(e) => setMeetingTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.create__formItem}>
//           <label className={styles.create__label}>Описание встречи</label>
//           <textarea
//             className={styles.create__textarea}
//             placeholder='Введите описание встречи'
//             value={meetingDescription}
//             onChange={(e) => setMeetingDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.create__formItem}>
//           <label className={styles.create__label}>Участник 1</label>
//           <input
//             className={styles.create__input}
//             type='email'
//             placeholder=' Введите email участника 1'
//             value={ychastnik1email}
//             onChange={(e) => setychastnik1email(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.create__formItem}>
//           <label className={styles.create__label}>Участник 2</label>
//           <input
//             className={styles.create__input}
//             type='email'
//             placeholder=' Введите email участника 2'
//             value={ychastnik2email}
//             onChange={(e) => setychastnik2email(e.target.value)}
//             required
//           />
//         </div>
//         <button type='submit'>Создать встречу</button>
//       </form>
//     </section>
//   );
// };

// export default Create;

import React, { useState } from 'react';
import axios from 'axios';
import styles from './Create.module.scss';
import { useNavigate } from 'react-router-dom';

const Create: React.FC = () => {
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDescription, setMeetingDescription] = useState('');
  const [participant1Email, setParticipant1Email] = useState('');
  const [participant2Email, setParticipant2Email] = useState('');

  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [participant1EmailError, setParticipant1EmailError] = useState('');
  const [participant2EmailError, setParticipant2EmailError] = useState('');

  const [modalError, setModalError] = useState<string | null>(null);

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    // Сброс ошибок
    setTitleError('');
    setDescriptionError('');
    setParticipant1EmailError('');
    setParticipant2EmailError('');

    // Валидация названия встречи
    if (!meetingTitle) {
      setTitleError('Название встречи обязательно.');
      isValid = false;
    } else if (meetingTitle.length > 255) {
      setTitleError('Название встречи не должно превышать 255 символов.');
      isValid = false;
    }

    // Валидация описания встречи
    if (meetingDescription.length > 1000) {
      setDescriptionError('Описание встречи не должно превышать 1000 символов.');
      isValid = false;
    }

    // Валидация электронной почты участника 1
    const emailRegex = /^[A-Za-zА-Яа-я0-9._%+-]+@[A-Za-zА-Яа-я0-9.-]+\.[A-Za-zА-Яа-я]{2,}$/;
    if (!participant1Email) {
      setParticipant1EmailError('Email участника 1 обязателен.');
      isValid = false;
    } else if (participant1Email.length > 255) {
      setParticipant1EmailError('Email участника 1 не должен превышать 255 символов.');
      isValid = false;
    } else if (!emailRegex.test(participant1Email)) {
      setParticipant1EmailError('Email участника 1 имеет неправильный формат.');
      isValid = false;
    }

    // Валидация электронной почты участника 2
    if (!participant2Email) {
      setParticipant2EmailError('Email участника 2 обязателен.');
      isValid = false;
    } else if (participant2Email.length > 255) {
      setParticipant2EmailError('Email участника 2 не должен превышать 255 символов.');
      isValid = false;
    } else if (!emailRegex.test(participant2Email)) {
      setParticipant2EmailError('Email участника 2 имеет неправильный формат.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('/meetings', {
          title: meetingTitle,
          description: meetingDescription,
          participants: [participant1Email, participant2Email],
        });

        // Обработка успешного ответа
        console.log('Встреча успешно создана:', response.data);
        navigate('/');
      } catch (error) {
        // Обработка ошибок при отправке запроса
        console.error('Ошибка при создании встречи:', error);
        setModalError('Ошибка при создании встречи. Пожалуйста, попробуйте еще раз.');
      }
    }
  };

  const closeModal = () => {
    setModalError(null);
  };

  return (
    <section className={styles.create}>
      <h2 className={styles.create__title}>Создать встречу</h2>
      <form onSubmit={handleSubmitForm} className={styles.create__form}>
        <div className={styles.create__formItem}>
          <label className={styles.create__label}>Название встречи</label>
          <input
            className={styles.create__input}
            type='text'
            placeholder='Введите название встречи'
            value={meetingTitle}
            onChange={(e) => setMeetingTitle(e.target.value)}
            required
            maxLength={255} // Ограничение длины
          />
          {titleError && <p className={styles.create__error}>{titleError}</p>}
        </div>
        <div className={styles.create__formItem}>
          <label className={styles.create__label}>Описание встречи</label>
          <textarea
            className={styles.create__textarea}
            placeholder='Введите описание встречи'
            value={meetingDescription}
            onChange={(e) => setMeetingDescription(e.target.value)}
            maxLength={1000} // Ограничение длины
          />
          {descriptionError && <p className={styles.create__error}>{descriptionError}</p>}
        </div>
        <div className={styles.create__formItem}>
          <label className={styles.create__label}>Участник 1</label>
          <input
            className={styles.create__input}
            type='email'
            placeholder='Введите email участника 1'
            value={participant1Email}
            onChange={(e) => setParticipant1Email(e.target.value)}
            required
            maxLength={255} // Ограничение длины
          />
          {participant1EmailError && (
            <p className={styles.create__error}>{participant1EmailError}</p>
          )}
        </div>
        <div className={styles.create__formItem}>
          <label className={styles.create__label}>Участник 2</label>
          <input
            className={styles.create__input}
            type='email'
            placeholder='Введите email участника 2'
            value={participant2Email}
            onChange={(e) => setParticipant2Email(e.target.value)}
            required
            maxLength={255} // Ограничение длины
          />
          {participant2EmailError && (
            <p className={styles.create__error}>{participant2EmailError}</p>
          )}
        </div>
        {/* <button type='submit'>Создать встречу</button> */}
        <div className={styles.create__buttonWrapper}>
          <button className={styles.create__buttonSubmit} type='submit'>
            Создать встречу
          </button>
        </div>
      </form>

      {/* Модальное окно с ошибкой */}
      {modalError && (
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <p>{modalError}</p>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Create;
