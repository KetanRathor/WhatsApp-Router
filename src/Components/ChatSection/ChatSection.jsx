import React from "react";
import { useEffect } from "react";
import ChatSectionHeader from "./ChatSectionHeader";
import MessageSection from "./MesssageSection";
import ChatSectionFooter from "./ChatSectionFooter";
import { Grid, Stack } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedPerson } from "../Slices/peopleSlice";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Screen from "../Screen";


const ChatSection = (props) =>{
    const selectedPerson = useSelector((state)=>state.selectedPerson)
   const dispatch = useDispatch()
    // console.log("first",selectedPerson)
    let {mobileNo} = useParams()

    // useEffect(() => {
    
    //     dispatch(setSelectedPerson(props.person));
    // }, [mobileNo]);

                  


    return(
    
    <Stack direction="column" height="75%" width="100%"
    sx={{display: { xs:selectedPerson?'block': 'none', sm: 'block' }}}
    // sx={{display: { xs:selectedPerson?'block': 'none', sm: 'block' }}}
    >

      <Routes>
        <Route path="/" element={<Screen/>} />
        <Route path="/:mobileNo" element={<><ChatSectionHeader/> <MessageSection /> 
        <ChatSectionFooter SendMessage = {props.SendMessage}
            /> </>} />
      </Routes>
            {/* <ChatSectionHeader 
            // mobileNo={mobileNo} 
            />
            <MessageSection />
            <ChatSectionFooter
            SendMessage = {props.SendMessage}
            /> */}
        </Stack>


    )
}
export default ChatSection;