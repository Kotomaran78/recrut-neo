// import React, { useState } from 'react';
// import styles from './ScheduleForm.module.scss';

// const timeslots = [
//   '10:00-11:00',
//   '11:00-12:00',
//   '12:00-13:00',
//   '13:00-14:00',
//   '14:00-15:00',
//   '15:00-16:00',
//   '16:00-17:00',
//   '17:00-18:00',
// ];

// // Функция для получения массива из 7 дней, начиная с завтрашнего дня
// const getNext7Days = () => {
//   const days = [];
//   for (let i = 1; i <= 7; i++) {
//     const date = new Date();
//     date.setDate(date.getDate() + i);
//     days.push({
//       dayOfWeek: date.toLocaleDateString('ru-RU', { weekday: 'short' }),
//       date: date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }),
//     });
//   }
//   return days;
// };

// const ScheduleForm: React.FC = () => {
//   // const [selectedSlots, setSelectedSlots] = useState<{ [key: string]: boolean }>({});
//   // const [selectedDate, setSelectedDate] = useState<{ [key: string]: boolean }>({});
//   const [selectedSlots, setSelectedSlots] = useState<{ [day: string]: [time: string] }>({});
//   const [selectedDate, setSelectedDate] = useState<{ [day: string]: [time: string] }>({});

//   const days = getNext7Days();

//   const handleCheckboxChange = (day: string, time: string) => {
//     // const key = `${day}-${time}`;
//     // setSelectedSlots((prev) => ({
//     //   ...prev,
//     //   [key]: !prev[key],
//     // }));

//     // setSelectedSlots((prev) => ({
//     //   ...prev,
//     //   [day]: [time],
//     // }));
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Здесь можно обработать отправку данных
//     console.log('Selected Slots:', selectedSlots);
//     setSelectedDate(selectedSlots);
//     setSelectedSlots({});
//   };

//   return (
//     <section className={styles.scheduleForm__section}>
//       <form onSubmit={handleSubmit} className={styles.scheduleForm}>
//         <table className={styles.scheduleTable}>
//           <thead>
//             <tr>
//               <th>Время</th>
//               {days.map((day, index) => (
//                 <th key={index}>
//                   {day.dayOfWeek} <br />
//                   {day.date}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {timeslots.map((time) => (
//               <tr key={time} className={styles.scheduleTable__tdRow}>
//                 <td>{time}</td>
//                 {days.map((day) => {
//                   const key = `${day.date}-${time}`;
//                   return (
//                     <td key={key}>
//                       <input
//                         type='checkbox'
//                         checked={!!selectedSlots[key]}
//                         onChange={() => handleCheckboxChange(day.date, time)}
//                       />
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button type='submit' className={styles.submitButton}>
//           Отправить
//         </button>
//       </form>
//       <div>{selectedDate}</div>
//     </section>
//   );
// };

// export default ScheduleForm;

// import React, { useState } from 'react';
// import styles from './ScheduleForm.module.scss';

// const timeslots = [
//   '10:00-11:00',
//   '11:00-12:00',
//   '12:00-13:00',
//   '13:00-14:00',
//   '14:00-15:00',
//   '15:00-16:00',
//   '16:00-17:00',
//   '17:00-18:00',
// ];

// // Функция для получения массива из 7 дней, начиная с завтрашнего дня
// const getNext7Days = () => {
//   const days = [];
//   for (let i = 1; i <= 7; i++) {
//     const date = new Date();
//     date.setDate(date.getDate() + i);
//     days.push({
//       dayOfWeek: date.toLocaleDateString('ru-RU', { weekday: 'short' }),
//       displayDate: date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }), // Отображаемый формат DD.MM
//       dateISO: date.toISOString().split('T')[0], // Используем формат YYYY-MM-DD для сохранения
//     });
//   }
//   return days;
// };

// interface SelectedSlot {
//   id: number;
//   start_time: string;
//   end_time: string;
// }

// const ScheduleForm: React.FC = () => {
//   const [selectedSlots, setSelectedSlots] = useState<SelectedSlot[]>([]);
//   const [submittedSlots, setSubmittedSlots] = useState<SelectedSlot[]>([]);

//   const days = getNext7Days();

//   const handleCheckboxChange = (dayISO: string, time: string) => {
//     const [startTime, endTime] = time.split('-');

//     const start_time = `${dayISO}T${startTime}:00`;
//     const end_time = `${dayISO}T${endTime}:00`;

//     const slotIndex = selectedSlots.findIndex(
//       (slot) => slot.start_time === start_time && slot.end_time === end_time,
//     );

//     if (slotIndex > -1) {
//       setSelectedSlots(selectedSlots.filter((_, index) => index !== slotIndex));
//     } else {
//       const newSlot: SelectedSlot = {
//         id: selectedSlots.length + 1,
//         start_time,
//         end_time,
//       };
//       setSelectedSlots([...selectedSlots, newSlot]);
//     }
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     setSubmittedSlots(selectedSlots);
//     console.log('Submitted Slots:', selectedSlots);
//   };

//   return (
//     <section className={styles.scheduleForm__section}>
//       <form onSubmit={handleSubmit} className={styles.scheduleForm}>
//         <h2>Выберите удобное время встречи</h2>
//         <table className={styles.scheduleTable}>
//           <thead>
//             <tr>
//               <th>Время</th>
//               {days.map((day, index) => (
//                 <th key={index}>
//                   {day.dayOfWeek} <br />
//                   {day.displayDate}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {timeslots.map((time) => (
//               <tr key={time} className={styles.scheduleTable__tdRow}>
//                 <td>{time}</td>
//                 {days.map((day) => {
//                   const key = `${day.dateISO}-${time}`;
//                   const [startTime, endTime] = time.split('-');
//                   const slotSelected = selectedSlots.some(
//                     (slot) =>
//                       slot.start_time === `${day.dateISO}T${startTime}:00` &&
//                       slot.end_time === `${day.dateISO}T${endTime}:00`,
//                   );
//                   return (
//                     <td key={key}>
//                       <input
//                         type='checkbox'
//                         checked={slotSelected}
//                         onChange={() => handleCheckboxChange(day.dateISO, time)}
//                       />
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button type='submit' className={styles.submitButton}>
//           Отправить
//         </button>
//       </form>

//       {submittedSlots.length > 0 && (
//         <div className={styles.selectedSlots}>
//           <h2>Выбранные даты и время:</h2>
//           <ul>
//             {submittedSlots.map((slot) => (
//               <li key={slot.id}>
//                 id: {slot.id}, start_time: {slot.start_time}, end_time: {slot.end_time}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ScheduleForm;

import React, { useState } from 'react';
import styles from './ScheduleForm.module.scss';

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

// Функция для получения массива из 7 дней, начиная с завтрашнего дня
const getNext7Days = () => {
  const days = [];
  for (let i = 1; i <= 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    days.push({
      dayOfWeek: date.toLocaleDateString('ru-RU', { weekday: 'short' }),
      displayDate: date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }), // Отображаемый формат DD.MM
      dateISO: date.toISOString().split('T')[0], // Используем формат YYYY-MM-DD для сохранения
    });
  }
  return days;
};

interface SelectedSlot {
  id: number;
  start_time: string;
  end_time: string;
}

const ScheduleForm: React.FC = () => {
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlot[]>([]);
  const [submittedSlots, setSubmittedSlots] = useState<SelectedSlot[]>([]);

  const days = getNext7Days();

  const handleCheckboxChange = (dayISO: string, time: string) => {
    const [startTime, endTime] = time.split('-');

    const start_time = `${dayISO}T${startTime}:00`;
    const end_time = `${dayISO}T${endTime}:00`;

    const slotIndex = selectedSlots.findIndex(
      (slot) => slot.start_time === start_time && slot.end_time === end_time,
    );

    if (slotIndex > -1) {
      setSelectedSlots(selectedSlots.filter((_, index) => index !== slotIndex));
    } else {
      const newSlot: SelectedSlot = {
        id: selectedSlots.length + 1,
        start_time,
        end_time,
      };
      setSelectedSlots([...selectedSlots, newSlot]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmittedSlots(selectedSlots);
    console.log('Submitted Slots:', selectedSlots);
  };

  return (
    <section className={styles.scheduleForm__section}>
      <form onSubmit={handleSubmit} className={styles.scheduleForm__form}>
        <h2>Выберите удобное время встречи</h2>
        <table className={styles.scheduleForm__table}>
          <thead>
            <tr>
              <th className={styles.scheduleForm__th}>Время</th>
              {days.map((day, index) => (
                <th key={index} className={styles.scheduleForm__th}>
                  {day.dayOfWeek} <br />
                  {day.displayDate}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeslots.map((time) => (
              <tr key={time} className={styles.scheduleForm__tdRow}>
                <td className={styles.scheduleForm__td}>{time}</td>
                {days.map((day) => {
                  const key = `${day.dateISO}-${time}`;
                  const [startTime, endTime] = time.split('-');
                  const slotSelected = selectedSlots.some(
                    (slot) =>
                      slot.start_time === `${day.dateISO}T${startTime}:00` &&
                      slot.end_time === `${day.dateISO}T${endTime}:00`,
                  );
                  return (
                    // <td key={key} className={styles.scheduleForm__td}>
                    //   <label className={styles.scheduleForm__label}>
                    //     <input
                    //       type='checkbox'
                    //       checked={slotSelected}
                    //       onChange={() => handleCheckboxChange(day.dateISO, time)}
                    //       className={styles.scheduleForm__checkbox}
                    //     />
                    //   </label>
                    // </td>

                    <td key={key} className={styles.scheduleForm__td}>
                      <input
                        type='checkbox'
                        id={key}
                        checked={slotSelected}
                        onChange={() => handleCheckboxChange(day.dateISO, time)}
                        className={styles.scheduleForm__checkbox}
                      />
                      <label htmlFor={key} className={styles.scheduleForm__label}></label>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <button type='submit' className={styles.scheduleForm__submitButton}>
          Отправить
        </button>
      </form>

      {submittedSlots.length > 0 && (
        <div className={styles.selectedSlots}>
          <h2>Выбранные даты и время:</h2>
          <ul>
            {submittedSlots.map((slot) => (
              <li key={slot.id}>
                id: {slot.id}, start_time: {slot.start_time}, end_time: {slot.end_time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ScheduleForm;
