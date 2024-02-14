import React from "react";
import ChatSectionHeader from "./ChatSectionHeader";
import MessageSection from "./MesssageSection";
import ChatSectionFooter from "./ChatSectionFooter";
import { Grid, Stack } from "@mui/material";
const ChatSection = (props) =>{



    return(
    
    <Stack direction="column" height="75%" width="100%"
        
    >
            <ChatSectionHeader 
            people={props.people}
            selectedPerson = {props.selectedPerson}
            />
            <MessageSection people={props.people}
            selectedPerson = {props.selectedPerson}
            />
            <ChatSectionFooter
            SendMessage = {props.SendMessage}
            />
        </Stack>


    )
}
export default ChatSection;