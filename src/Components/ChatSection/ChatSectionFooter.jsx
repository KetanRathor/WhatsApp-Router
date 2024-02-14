import React, { useState } from "react";
import { Box, Stack, TextField, Paper, IconButton } from "@mui/material";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';




const ChatSectionFooter = (props) => {
  // const [isHover,setIsHover] =useState(false)
  const [inputMessage, setInputMessage] = useState("");

  function onHandleChange(e){
    
    let text= e.target.value;
    setInputMessage(text);
    console.log("fffff",text);
  }

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      props.SendMessage(inputMessage);
      setInputMessage("");
      console.log("sentMess",inputMessage);
      
    }
  };

  return (
    <>
      <Stack direction={"row"}
        alignItems={"center"}
        spacing={2}
        paddingLeft={"5px"}
        sx={{ height: "13vh", width: "100%", bgcolor: "black" }}
      >
        <IconButton>
          <SentimentVerySatisfiedIcon />
          </IconButton>
          <IconButton>
          <AddIcon />
        </IconButton>
        <Paper
          sx={{ height: "9vh", width: "80%" }}
        // sx={{ color: "#aebac1", fontSize: "14px" }}
        >
          {/* <TextField
                placeholder="Search or start new chat"
                // fullWidth
                // disableUnderline
                variant="Stadard"
                
                sx={{
                  color: "#aebac1",
                  fontSize: "13px",

                  height: "20%",
                  width:"80%" ,
                  "&:hover, &:focus": {
                    outline: "none",
                  },
                }}
              /> */}

          <TextField id="standard-basic" placeholder="Type a message"
            sx={{ height: "50%", width: "100%" }}
            InputProps={{
              disableUnderline: "true",

            }}
            onChange = {onHandleChange}
            value={inputMessage}
          />
        </Paper>
        {/* <IconButton>
            <MicIcon/>
            </IconButton> */}
        <IconButton
        // onClick={()=>props.SendMessage(inputMessage)}
        onClick={handleSendMessage}
        >
          {inputMessage ? <SendIcon/> :<MicIcon/>}
          
        </IconButton>



      </Stack>
    </>

  )
}
export default ChatSectionFooter;

