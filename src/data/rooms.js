// const room_list = [
//   {
//     type: 'Family Room',
//     rooms: [
//       {
//         number: 8,
//         reservations: [
//           {
//             checkInDateTime: '2025-05-20T14:00:00',
//             checkOutDateTime: '2025-05-22T12:00:00',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: 'Standard Room',
//     rooms: [
//       {
//         number: 1,
//         reservations: [
//           {
//             checkInDateTime: '2025-05-19T13:00:00',
//             checkOutDateTime: '2025-05-20T11:00:00',
//           },
//         ],
//       },
//       {
//         number: 2,
//         reservations: [
//           {
//             checkInDateTime: '2025-05-21T15:00:00',
//             checkOutDateTime: '2025-05-23T11:00:00',
//           },
//         ],
//       },
//       {
//         number: 3,
//         reservations: [],
//       },
//       {
//         number: 4,
//         reservations: [
//           {
//             checkInDateTime: '2025-05-18T12:00:00',
//             checkOutDateTime: '2025-05-19T10:00:00',
//           },
//           {
//             checkInDateTime: '2025-05-20T14:00:00',
//             checkOutDateTime: '2025-05-22T12:00:00',
//           },
//         ],
//       },
//       {
//         number: 5,
//         reservations: [],
//       },
//       {
//         number: 6,
//         reservations: [
//           {
//             checkInDateTime: '2025-05-19T16:00:00',
//             checkOutDateTime: '2025-05-20T14:00:00',
//           },
//         ],
//       },
//       {
//         number: 7,
//         reservations: [],
//       },
//       {
//         number: 9,
//         reservations: [
//           {
//             checkInDateTime: '2025-05-21T12:00:00',
//             checkOutDateTime: '2025-05-24T10:00:00',
//           },
//         ],
//       },
//       {
//         number: 10,
//         reservations: [],
//       },
//       {
//         number: 11,
//         reservations: [],
//       },
//       {
//         number: 12,
//         reservations: [
//           {
//             checkInDateTime: '2025-05-20T14:00:00',
//             checkOutDateTime: '2025-05-21T12:00:00',
//           },
//         ],
//       },
//       {
//         number: 13,
//         reservations: [],
//       },
//     ],
//   },
// ]

// const room_list = [
//   {
//     number: 1,
//     reservations: [
//       {
//         checkInDateTime: '2025-05-19T13:00:00',
//         checkOutDateTime: '2025-05-20T11:00:00',
//       },
//     ],
//   },
//   {
//     number: 2,
//     reservations: [
//       {
//         checkInDateTime: '2025-05-21T15:00:00',
//         checkOutDateTime: '2025-05-23T11:00:00',
//       },
//     ],
//   },
//   {
//     number: 3,
//     reservations: [],
//   },
//   {
//     number: 4,
//     reservations: [
//       {
//         checkInDateTime: '2025-05-18T12:00:00',
//         checkOutDateTime: '2025-05-19T10:00:00',
//       },
//       {
//         checkInDateTime: '2025-05-20T14:00:00',
//         checkOutDateTime: '2025-05-22T12:00:00',
//       },
//     ],
//   },
//   {
//     number: 5,
//     reservations: [],
//   },
//   {
//     number: 6,
//     reservations: [
//       {
//         checkInDateTime: '2025-05-19T16:00:00',
//         checkOutDateTime: '2025-05-20T14:00:00',
//       },
//     ],
//   },
//   {
//     number: 7,
//     reservations: [],
//   },
//   {
//     number: 8,
//     reservations: [
//       {
//         checkInDateTime: '2025-05-20T14:00:00',
//         checkOutDateTime: '2025-05-22T12:00:00',
//       },
//     ],
//   },
//   {
//     number: 9,
//     reservations: [
//       {
//         checkInDateTime: '2025-05-21T12:00:00',
//         checkOutDateTime: '2025-05-24T10:00:00',
//       },
//     ],
//   },
//   {
//     number: 10,
//     reservations: [],
//   },
//   {
//     number: 11,
//     reservations: [],
//   },
//   {
//     number: 12,
//     reservations: [
//       {
//         checkInDateTime: '2025-05-20T14:00:00',
//         checkOutDateTime: '2025-05-21T12:00:00',
//       },
//     ],
//   },
//   {
//     number: 13,
//     reservations: [],
//   },
// ]

const room_list = [
  {
    no: 1,
    type: 'Standard',
    floor: 1,
    reservations: [
      {
        checkInDateTime: '2025-05-19T13:00:00',
        checkOutDateTime: '2025-05-20T11:00:00',
      },
    ],
  },
  {
    no: 2,
    type: 'Standard',
    floor: 1,
    reservations: [
      {
        checkInDateTime: '2025-05-21T15:00:00',
        checkOutDateTime: '2025-05-23T11:00:00',
      },
    ],
  },
  {
    no: 3,
    type: 'Standard',
    floor: 1,
    reservations: [],
  },
  {
    no: 4,
    type: 'Standard',
    floor: 1,
    reservations: [
      {
        checkInDateTime: '2025-05-18T12:00:00',
        checkOutDateTime: '2025-05-19T10:00:00',
      },
      {
        checkInDateTime: '2025-05-20T14:00:00',
        checkOutDateTime: '2025-05-22T12:00:00',
      },
    ],
  },
  {
    no: 5,
    type: 'Standard',
    floor: 1,
    reservations: [],
  },
  {
    no: 6,
    type: 'Standard',
    floor: 1,
    reservations: [
      {
        checkInDateTime: '2025-05-19T16:00:00',
        checkOutDateTime: '2025-05-20T14:00:00',
      },
    ],
  },
  {
    no: 7,
    type: 'Standard',
    floor: 1,
    reservations: [],
  },
  {
    no: 8,
    type: 'Family',
    floor: 2,
    reservations: [
      {
        checkInDateTime: '2025-05-20T14:00:00',
        checkOutDateTime: '2025-05-22T12:00:00',
      },
    ],
  },
  {
    no: 9,
    type: 'Standard',
    floor: 2,
    reservations: [
      {
        checkInDateTime: '2025-05-21T12:00:00',
        checkOutDateTime: '2025-05-24T10:00:00',
      },
    ],
  },
  {
    no: 10,
    type: 'Standard',
    floor: 2,
    reservations: [],
  },
  {
    no: 11,
    type: 'Standard',
    floor: 2,
    reservations: [],
  },
  {
    no: 12,
    type: 'Standard',
    floor: 2,
    reservations: [
      {
        checkInDateTime: '2025-05-20T14:00:00',
        checkOutDateTime: '2025-05-21T12:00:00',
      },
    ],
  },
  {
    no: 13,
    type: 'Standard',
    floor: 2,
    reservations: [],
  },
]

export default room_list
