// var calendar = new FullCalendar.Calendar(calendarEl, {
//   initialView: 'listWeek',
//   events: [
//     {
//       title: 'Meeting',
//       start: '2019-08-12T14:30:00',
//       extendedProps: {
//         status: 'done'
//       }
//     },
//     {
//       title: 'Birthday Party',
//       start: '2019-08-13T07:00:00',
//       backgroundColor: 'green',
//       borderColor: 'green'
//     }
//   ],
//   eventDidMount: function(info) {
//     if (info.event.extendedProps.status === 'done') {

//       // Change background color of row
//       info.el.style.backgroundColor = 'red';

//       // Change color of dot marker
//       var dotEl = info.el.getElementsByClassName('fc-event-dot')[0];
//       if (dotEl) {
//         dotEl.style.backgroundColor = 'white';
//       }
//     }
//   }

// });