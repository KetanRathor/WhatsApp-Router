import { createSlice, current } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
    name: 'people',
    initialState: [
        { contactNumber: 1111111111, name: "Ashutosh", messages: ["Hii! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 2222222222, name: "Ketan Rathor", messages: ["Hello! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 3333333333, name: "Arpit", messages: ["Bye! "], time: "2.00pm" },
        { contactNumber: 4444444444, name: "Sourabh", messages: ["cjkansckjna! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 5555555555, name: "Mihir", messages: ["akjskjhas! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 6666666666, name: "Abhishek", messages: ["asdjk! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 7777777777, name: "Abhinandan", messages: ["aslkckla! ", "How Are You"], time: "2.00pm" },
        { contactNumber: 8888888888, name: "Pragya", messages: ["akscnnac! ", "How Are You"], time: "2.00pm" }
    ],
    // initialState: {
    //     contacts: [
    //         { contactNumber: 1111111111, name: "Ashutosh", messages: ["Hii! ", "How Are You"], time: "2.00pm" },
    //         { contactNumber: 2222222222, name: "Ketan Rathor", messages: ["Hello! ", "How Are You"], time: "2.00pm" },
    //         { contactNumber: 3333333333, name: "Arpit", messages: ["Bye! "], time: "2.00pm" },
    //         { contactNumber: 4444444444, name: "Sourabh", messages: ["cjkansckjna! ", "How Are You"], time: "2.00pm" },
    //         { contactNumber: 5555555555, name: "Mihir", messages: ["akjskjhas! ", "How Are You"], time: "2.00pm" },
    //         { contactNumber: 6666666666, name: "Abhishek", messages: ["asdjk! ", "How Are You"], time: "2.00pm" },
    //         { contactNumber: 7777777777, name: "Abhinandan", messages: ["aslkckla! ", "How Are You"], time: "2.00pm" },
    //         { contactNumber: 8888888888, name: "Pragya", messages: ["akscnnac! ", "How Are You"], time: "2.00pm" }
    //     ]
    // },
    reducers: {
        // setPeople: (state, action) => {
        //     // console.log("kkkkkkkkkkk",state);
        //     // state = action.payload
        //     console.log("first",current(state));
        //     // console.log("setProple" ,state.contacts)
        // },
        // newMessage: (state, action) => {
        //     // dispatch(newMessage({ contactNumber: "", message: "" }))

        //     state.map((people, index) => {
        //         if (people.contactNumber === action.payload.contactNumber) {
        //             people.messages.push(action.payload.message)
        //         }
        //     })
        // },
        newMessage (state, action) {
            
            // let clonePeople = JSON.parse(JSON.stringify(state)) 
            // console.log("actuib.oayhdsj", action.payload)

            // const contact = state.find((people)=> people.contactNumber === action.payload.contactNumber)

            // if (contact) {
            //     contact.messages.push(action)
            // }

            const personIndex = state.findIndex(people => people.contactNumber === action.payload.contactNumber);
            // const clonePeopleIndex = clonePeople.findIndex(clonePeople => clonePeople.contactNumber === action.payload.contactNumber);
            // console.log("111111111",state);
            // console.log("action.payload.contactNumber",action.payload.contactNumber);
            // console.log("action.payload.message",action.payload.message);
            if (personIndex!==-1) {
                // console.log("jjjjjj",peopleIndex);
                state[personIndex].messages.push(action.payload.message);
              
                // console.log(";;;;;;;;;;;",person)

            }
            // state.push(action.payload)

            // const clonePeopleIndex = clonePeople.findIndex(clonePeople=>clonePeople.contactNumber === action.payload.contactNumber);
            // if(clonePeopleIndex){
            //     let clonedPeople = {...clonePeople[clonePeopleIndex]};
            
            // let clonedMessages = [...clonedPeople.messages];
            // clonedMessages.push(action.payload.messages)
            // clonedPerson = { ...clonedPerson, messages: clonedMessages };
            // clonePeople[clonePeopleIndex] = clonedPerson;
            // }
            // state = clonePeople;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPeople, newMessage } = peopleSlice.actions

export default peopleSlice.reducer