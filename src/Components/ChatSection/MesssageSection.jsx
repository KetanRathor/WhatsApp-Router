import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import bg from "../images/BackgroundImage.png"
import { green } from "@mui/material/colors";
import getCurrentTime from "../CurrentTime";

import { useSelector, useDispatch } from "react-redux";
// import { setSelectedPerson } from "../Slices/selctedPersonSlice";



const Message =(props) =>{

    return(
        <Box
        
        sx={{
            // maxWidth:"100%",
        display:"flex",justifyContent:"flex-end",height:"4.5vh",
        // width:"15vw",
        margin:"10px"}}
        >
            <Stack
            // maxWidth={"10%"}
            display={"flex"}
            direction={"row"}
            spacing={2}
            sx={{height:"4.5vh",
            // width:"20vw",
            bgcolor:"darkgreen",
            padding:"5px",borderRadius:"10px"}}
            >
               <Box
               overflow={"hidden"}
               >
                {props.msg}
                </Box>
                <Typography sx={{
                    //  marginTop: "2vh",
                fontSize:"10px"}}>
                {props.time}
                </Typography> 
            </Stack>
        </Box>
    )
}


export default function MessageSection  (props) {
    // const people = useSelector((state => state.people))

    // const selectedPerson = useSelector((state) => state.selectedPerson)

    // const dispatch = useDispatch()

        // let messArray = []

        // useEffect(() => {
        //   messArray = props.selectedPerson.messages
        // }, [props.selectedPerson])

        // useEffect(() => {
        //     props.setSelectedPerson(props.selectedPerson)
          
        // }, [people])
        
        

        const style ={
            paperContainer:{
                backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${bg})`,
                bagroundRepeat:"repeat",
                backgroundSize: "cover",
                // height:"100%",

            }
        }

        function chat (){
            

            // let messArray = props.selectedPerson.messages;
            // // let time = props.selectedPerson.time
            // let chatArr = [];
            // for(let i = 0; i<messArray.length; i++){
            //   chatArr.push(<Message msg={messArray[i]} time={getCurrentTime()}
            //     // handlePersonClick={props.handlePersonClick}
            //     />)
            // }
            // return chatArr

            // let time = props.selectedPerson.time
            let chatArr = [];
            for(let i = 0; i<props.selectedPerson.messages.length; i++){
              chatArr.push(<Message msg={props.selectedPerson.messages[i]} time={getCurrentTime()}
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
