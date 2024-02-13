import React from "react";
import { Box, Stack,TextField,Paper } from "@mui/material";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import AddIcon from '@mui/icons-material/Add';
const ChatSectionFooter = () =>{



    return(
        <>
        <Stack direction={"row"}
        alignItems={"center"}
        spacing={3}
        paddingLeft={"5px"}
        sx={{height:"10vh",width:"100%",bgcolor:"black"}}
        >
            <SentimentVerySatisfiedIcon/>
            <AddIcon/>
            <Paper 
            sx={{ height:"9vh",width:"80%"}}
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

            <TextField id="standard-basic"   placeholder="Type a message"
            sx={{ height: "50%", width: "100%" }}
            InputProps = {{
                disableUnderline:"true",
            }}
            
            />
            </Paper>



        </Stack>
        </>

    )
}
export default ChatSectionFooter;