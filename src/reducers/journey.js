const initialState = {
  outwardTrip: [{
    from: 'Stockholm C',
    to: 'Göteborg C',
    dateTime: '?',
    departureId: 0,
  }],
  returnTrip: [{
    from: 'Göteborg C',
    to: 'Jönköping C',
    dateTime: '?',
    departureId: 1,
  }],
  selectedSeats: [
    /*
    {
      departureId: 0,
      wagonId: 0,
      seatId: 0,
    }
    */
  ]
};

export default function journey(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INITIAL_ROUTE':
      return [
        action.routes,
      ];
    default:
      return state;
  }
}
