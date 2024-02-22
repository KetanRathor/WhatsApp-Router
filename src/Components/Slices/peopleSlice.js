import { createSlice, current } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
    name: 'people',
    initialState:{ 
        contact:[
        { contactNumber: 1111111111, name: "Ashutosh", messages: ["Hii! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 2222222222, name: "Ketan Rathor", messages: ["Hello! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 3333333333, name: "Arpit", messages: ["Bye! "], time: "2.00pm" },
        { contactNumber: 4444444444, name: "Sourabh", messages: ["cjkansckjna! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 5555555555, name: "Mihir", messages: ["akjskjhas! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 6666666666, name: "Abhishek", messages: ["asdjk! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 7777777777, name: "Abhinandan", messages: ["aslkckla! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 8888888888, name: "Pragya", messages: ["akscnnac! ", "How Are You"], time: "2.00pm" }
    ],
    selectedPerson: {}
    
},
    
    reducers: {
        setSelectedPerson: (state,action) => {
            state.selectedPerson=action.payload
            
        },
        
        newMessage (state, action) {   
            // const selectedPerson=state.selectedPerson
            // let msgArr=selectedPerson.messages
            // msgArr.push(action.payload.message)
            console.log("firsttttttttt",action.payload)
            const personIndex = state.contact.findIndex(people => people.contactNumber === state.selectedPerson.contactNumber);
            console.log("first",personIndex);
           
            if (personIndex!==-1) {
                state.contact[personIndex].messages.push(action.payload);
                 state.selectedPerson.messages.push(action.payload); 
            }
            
        },
    },
})


export const {newMessage ,setSelectedPerson} = peopleSlice.actions

export default peopleSlice.reducer