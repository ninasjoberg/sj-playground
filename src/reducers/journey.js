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
  userSelectedSeats: [
  ],
  proceedButton: false,
};

export default function journey(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_SEAT': {
      const userSelectedSeatExist = state.userSelectedSeats.find((s) => (s.departureId === action.selectedSeat.departureId)) || false;
      return {
        ...state,
        userSelectedSeats: userSelectedSeatExist ? state.userSelectedSeats.map((s) => (
          (s.departureId === action.selectedSeat.departureId) ? Object.assign({}, action.selectedSeat) : s)) : [...state.userSelectedSeats, action.selectedSeat],
        proceedButton: (action.selectedSeat.departureId === 0) || false,
      };
    }
    case 'PROCEED_BUTTON': {
      return {
        ...state,
        proceedButton: false,
      };
    }
    default:
      return state;
  }
}
