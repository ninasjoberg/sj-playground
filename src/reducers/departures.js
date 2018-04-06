const initialState = [
  {
    id: 0, // despartureId state.departures.find(d)=> {d.id === departureId}
    availableSeats: [
      { seat: 1, wagon: 1 },
      { seat: 3, wagon: 1 },
      { seat: 6, wagon: 1 },
      { seat: 7, wagon: 1 },
      { seat: 5, wagon: 2 },
      { seat: 6, wagon: 2 },
      { seat: 12, wagon: 2 },
      { seat: 23, wagon: 2 },
      { seat: 24, wagon: 2 },
    ],
    wagons: [
      { type: 'locomotive', number: null },
      { type: 'bistro', number: 1 },
      { type: 'standard', number: 2 },
    ],
    preSelectedSeat: {
      departureId: 0,
      wagonId: 2,
      seatId: 12,
    },
  },
  {
    id: 1,
    availableSeats: [
      { seat: 1, wagon: 1 },
      { seat: 3, wagon: 1 },
      { seat: 6, wagon: 1 },
      { seat: 7, wagon: 1 },
      { seat: 5, wagon: 2 },
      { seat: 6, wagon: 2 },
      { seat: 8, wagon: 2 },
      { seat: 23, wagon: 2 },
      { seat: 24, wagon: 2 },
    ],
    wagons: [
      { type: 'locomotive', number: null },
      { type: 'bistro', number: 1 },
      { type: 'standard', number: 2 },
    ],
    preSelectedSeat: {
      departureId: 1,
      wagonId: 1,
      seatId: 5,
    },
  },
];

export default function departures(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
