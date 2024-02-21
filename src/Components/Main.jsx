import React, { useState } from "react";
import { Box } from "@mui/material";
import Screen from "./Screen";
import ChatSection from "./ChatSection/ChatSection";
import SideBar from "./SideBar/SideBar";
import { useSelector,useDispatch } from "react-redux";
import { setSelectedPerson } from "./Slices/peopleSlice";
// import {setPeople} from "./Slices/peopleSlice";
// import { useEffect } from "react";
// import { setSelectedPerson } from "./Slices/selctedPersonSlice";
// import ChatSection from "./ChatSection/MesssageSection";


const Main = () => {
  const dispatch = useDispatch()

  
  const people = useSelector((state) => state.people.contact)

  const selectedPerson = useSelector((state)=>state.people.selectedPerson)


  return (

    <Box sx={{ display: "flex",overflowY:"hidden", flexDirection: "row",overflowX:'hidden' }}>
      
      
      <SideBar
      
      />
      
      
      {/* {Object.values(selectedPerson) > 1 ?  */}
      {selectedPerson ? 

      <ChatSection 
      // people={people}
      // selectedPerson = {selectedPerson}
      // setSelectedPerson ={setSelectedPerson}
      // SendMessage= {SendMessage}
      /> : <Screen
      // selectedPerson = {selectedPerson}
      
      />}
      
      
      
    </Box>
  );
};
export default Main;
