export const reduser = (state,action) => {
switch(action.type) {
  case 'INCREMENT':
      return state = state+1;
  case 'DECREMENT':
      return state = state-1;
  case 'RESET':
      return state = 0;    
      default: return state
}
} 
