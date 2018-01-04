export default function registerReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_REGISTAR':
      console.log('state for registar.js reducers is: ', state);
      return [...state, Object.assign({}, action.registered_applications)];
    default:
      return state;
  }
}
