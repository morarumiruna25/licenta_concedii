const toastReducer = (state = { message: '', type: '' }, action) => {
  switch (action.type) {
    case 'SHOW_TOAST':
      return { message: action.payload.message, type: action.payload.type };
    case 'RESET_TOAST':
      return { message: '', type: '' };
    default:
      return state;
  }
};

export default toastReducer;
