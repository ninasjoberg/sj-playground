export const changeSeat = (selectedSeat) => ({
  type: 'CHANGE_SEAT',
  selectedSeat,
});

export const proceedButtonAction = () => ({
  type: 'PROCEED_BUTTON',
});

export const toggleShowSeatMap = (departureId) => ({
  type: 'TOGGLE_SHOW_SEATMAP',
  departureId,
});
