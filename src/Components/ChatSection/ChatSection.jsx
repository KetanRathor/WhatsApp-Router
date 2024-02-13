import React from "react";
import ChatSectionHeader from "./ChatSectionHeader";
import MessageSection from "./MesssageSection";
import ChatSectionFooter from "./ChatSectionFooter";
import { Grid, Stack } from "@mui/material";
const ChatSection = (props) =>{



    return(
    
    <Stack direction="column" height="100%" width="100%">
            <ChatSectionHeader />
            <MessageSection people={props.people} />
            <ChatSectionFooter/>
        </Stack>


    )
}
export default ChatSection;