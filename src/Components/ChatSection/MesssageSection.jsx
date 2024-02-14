import { Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import bg from "../images/BackgroundImage.png"
import { green } from "@mui/material/colors";

const Message =(props) =>{

    return(
        <Paper
        sx={{display:"flex",justifyContent:"flex-end",height:"4.5vh",width:"15vw",margin:"10px"}}
        >
            <Stack
            direction={"row"}
            spacing={2}
            sx={{height:"4.5vh",width:"20vw",bgcolor:"darkgreen",padding:"5px",borderRadius:"10px"}}
            >
               <Typography>
                {props.msg}
                </Typography>
                <Typography sx={{
                    // marginTop:"1000px"
                fontSize:"10px"}}>
                {props.time}
                </Typography> 
            </Stack>
        </Paper>
    )
}


const MessageSection = (props) => {
        const style ={
            paperContainer:{
                backgroundImage:`url(${bg})`,
                bagroundRepeat:"repeat",

            }
        }

        function chat (){
            let messArray = props.selectedPerson.messages;
            let time = props.selectedPerson.time
            let chatArr = [];
            for(let i = 0; i<messArray.length; i++){
              chatArr.push(<Message msg={messArray[i]} time={time}
                // handlePersonClick={props.handlePersonClick}
                />)
            }
            return chatArr
          }
       

    return(
        <Stack

        style={style.paperContainer} width="100%"
        height = "100%"
        
        sx={{
            display: "flex",
            height: "77vh",
            width: "100%",
            // backgroundColor: "blue",

            
            overflow: "hidden",
            border: "1px solid black"

        }}

    >
        
        {
            chat()
        }
            
        </Stack>

    )
} 
export default MessageSection;