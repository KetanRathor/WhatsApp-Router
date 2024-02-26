import React from "react";
import ChatSectionHeader from "./ChatSectionHeader";
import MessageSection from "./MesssageSection";
import ChatSectionFooter from "./ChatSectionFooter";
import { Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChatSection = (props) =>{
    const selectedPerson = useSelector((state)=>state.selectedPerson)
    // console.log("first",selectedPerson)
    let {Mno} = useParams()
    console.log(Mno)

    return(
    
    <Stack direction="column" height="75%" width="100%"
    sx={{display: { xs:selectedPerson?'block': 'none', sm: 'block' }}}
    // sx={{display: { xs:selectedPerson?'block': 'none', sm: 'block' }}}
    >
            <ChatSectionHeader Mno={Mno} />
            <MessageSection />
            <ChatSectionFooter
            SendMessage = {props.SendMessage}
            />
        </Stack>


    )
}
export default ChatSection;