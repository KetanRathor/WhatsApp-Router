

const initialState = {
    contact: [],
    selectedPerson: null,
    // other state properties
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SOME_ACTION_TYPE':
        // Your existing code here
        const personIndex = state.contact.findIndex(
          (people) => people.contactNumber === state.selectedPerson.contactNumber
        );
  
        if (personIndex !== -1) {
          state.contact[personIndex].messages.push(action.payload);
          state.selectedPerson.messages.push(action.payload);
        }
  
        return { ...state }; // Return the updated state
  
      // Handle other action types if needed
  
      default:
        return state;
    }
  };
  
  export default reducer;
  