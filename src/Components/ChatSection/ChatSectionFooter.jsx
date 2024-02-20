import React, { useState } from "react";
import { Box, Stack, TextField, Paper, IconButton } from "@mui/material";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';


import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DescriptionIcon from "@mui/icons-material/Description";
import PhotoIcon from "@mui/icons-material/Photo";
import CameraIcon from "@mui/icons-material/Camera";
import ContactsIcon from "@mui/icons-material/Contacts";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { yellow } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import { setPeople, newMessage } from "../Slices/peopleSlice";
import {setSelectedPerson} from "../Slices/selctedPersonSlice";



const ChatSectionFooter = (props) => {
  const selectedPerson = useSelector((state) => state.selectedPerson)


  const [inputMessage, setInputMessage] = useState("");

  const people = useSelector((state) => state.people)

  const dispatch = useDispatch()





  function onHandleChange(e) {

    let text = e.target.value;
    setInputMessage(text);
    console.log("fffff", text);
  }

  // function SendMessage(text){
  //   // console.log(people);
  //   let clonePeople = JSON.parse(JSON.stringify(people)) 
  //   // console.log("clonePeoplae", clonePeople)
  //   // console.log("selectedPerson.messages",props.selectedPerson.messages);
  // let msgArr=[...props.selectedPerson.messages]
  //   // console.log("msgArr", msgArr)
  //   msgArr.push(text)
  //   let index=clonePeople.findIndex(user=>user.contactNumber===props.selectedPerson.contactNumber)
  //   clonePeople[index].messages = msgArr
  //   console.log("clonePeople", clonePeople)
  //   // setPeople(clonePeople);
  //   dispatch(setPeople(clonePeople))
  //   console.log("people", people)
  //   // setSelectedPerson({...clonePeople[index]})

  // }

  function SendMessage(text){

    // dispatch(newMessage({ contactNumber: props.selectedPerson.contactNumber , message: text }))

    // console.log(people);
    let clonePeople = JSON.parse(JSON.stringify(people)) 
    // console.log("clonePeoplae", clonePeople)
    // console.log("selectedPerson.messages",props.selectedPerson.messages);
    let msgArr=[...props.selectedPerson.messages]
    // console.log("msgArr", msgArr)
    msgArr.push(text)
    let index=clonePeople.findIndex(user=>user.contactNumber===props.selectedPerson.contactNumber)
    clonePeople[index].messages = msgArr
    console.log("clonePeople", clonePeople)
    // clonePeople[index] = {
    //   ...clonePeople[index],
    //   messages: msgArr
    // };
    // setPeople(clonePeople);
    // dispatch(setPeople(clonePeople))
    dispatch(newMessage({ contactNumber: props.selectedPerson.contactNumber , message: text }))
    // setPeople(clonePeople);
    console.log("people", people)
    // setSelectedPerson({...clonePeople[index]})

  }

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      // console.log("inputMessage", inputMessage)
      // SendMessage();


      selectedPerson.messages.push(inputMessage)
      dispatch(newMessage({ contactNumber: selectedPerson.contactNumber, message: inputMessage }))
      dispatch(setSelectedPerson(selectedPerson))
      setInputMessage("");
      // console.log("sentMess",inputMessage);

    }
  };

  return (
    <>
      <Stack
        display={"flex"}
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        // paddingLeft={"5px"}
        sx={{ height: "13vh", width: "100%", bgcolor: "black" }}
      >
        <IconButton>
          <SentimentVerySatisfiedIcon />
        </IconButton>
        <IconButton>
          <AccountMenu
            sx={{
              transform: 'rotate(360deg)'
            }}
          />
        </IconButton>
        <Box
          sx={{
            display: "flex", justifyContent: "center", alignItems: "center", width: "80%", bgcolor: "#222E35"
            // height: "9vh", width: "80%"
          }}
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
            onChange={onHandleChange}
            value={inputMessage}
          />
        </Box>
        {/* <IconButton>
            <MicIcon/>
            </IconButton> */}
        <IconButton
          // onClick={()=>props.SendMessage(inputMessage)}
          onClick={handleSendMessage}
        >
          {inputMessage ? <SendIcon /> : <MicIcon />}

        </IconButton>



      </Stack>
    </>

  )
}
export default ChatSectionFooter;




function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        // sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <AddIcon
          sx={{
            transform: 'rotate(360deg)'
          }}
        />
      </IconButton>


      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(135deg)',
              zIndex: 0,

            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DescriptionIcon
              color="primary"
              fontSize="small" />
          </ListItemIcon>
          Document
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PhotoIcon fontSize="small"
              color="error"
            />
          </ListItemIcon>
          Photos & Videos
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CameraIcon
              color="warning"
              fontSize="small" />
          </ListItemIcon>
          Camera
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContactsIcon
              color="info"
              fontSize="small" />
          </ListItemIcon>
          Contact
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PollIcon
              color="success"
              fontSize="small" />
          </ListItemIcon>
          Poll
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EmojiEmotionsIcon
              color="secondary"
              fontSize="small" />
          </ListItemIcon>
          New sticker
        </MenuItem>
      </Menu>



    </>
  );
}