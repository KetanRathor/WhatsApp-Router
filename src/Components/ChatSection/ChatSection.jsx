import React from "react";
import ChatSectionHeader from "./ChatSectionHeader";
import MessageSection from "./MesssageSection";
import ChatSectionFooter from "./ChatSectionFooter";
import { Grid, Stack } from "@mui/material";

const ChatSection = (props) =>{



    return(
    
    <Stack direction="column" height="75%" width="100%"
    sx={{display: { xs:props.selectedPerson?'block': 'none', sm: 'block' }}}
    >
            <ChatSectionHeader 
            // people={props.people}
            selectedPerson = {props.selectedPerson}
            />
            <MessageSection 
            people={props.people}
            selectedPerson = {props.selectedPerson}
            setSelectedPerson = {props.setSelectedPerson}
            />
            <ChatSectionFooter
            selectedPerson = {props.selectedPerson}
            SendMessage = {props.SendMessage}
            />
        </Stack>


    )
}
export default ChatSection;