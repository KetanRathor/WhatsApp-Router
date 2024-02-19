import { createSlice } from "@reduxjs/toolkit";

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
        setPeople: (state, action) => {

            state = action.payload
            // console.log("setProple" ,state.contacts)
        },
        // newMessage: (state, action) => {
        //     // dispatch(newMessage({ contactNumber: "", message: "" }))

        //     state.map((people, index) => {
        //         if (people.contactNumber === action.payload.contactNumber) {
        //             people.messages.push(action.payload.message)
        //         }
        //     })
        // },
        newMessage: (state, action) => {
            const person = state.find(people => people.contactNumber === action.payload.contactNumber);
            // console.log("111111111",state);
            // console.log("action.payload.contactNumber",action.payload.contactNumber);
            // console.log("action.payload.message",action.payload.message);
            if (person) {

                person.messages.push(action.payload.message);
                // console.log(";;;;;;;;;;;",person)

            }
            // state.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPeople, newMessage } = peopleSlice.actions

export default peopleSlice.reducer