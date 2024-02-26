import React from "react";
import { Box, Divider, Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import getCurrentTime from "../CurrentTime";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPerson } from "../Slices/peopleSlice";
import { Link } from "react-router-dom";

const Person = (props) => {
  const dispatch = useDispatch()

  let lastMsg = props.person.messages.length;

  return (
    <>
    <Link to={`${props.person.contactNumber}`}>
      <ListItem

        onClick={() =>  dispatch(setSelectedPerson(props.person))}

        sx={{
          overflow: "hidden",
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#394B59', 
          },
        }}
      >
        <ListItemAvatar>
          <Avatar
          >{props.person.name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography
              display={"flex"}

            >{props.person.name}</Typography>
            <Typography
              sx={{ fontSize: "11px" }}
            >{getCurrentTime()}</Typography>
          </Box>
         
          <Typography
            variant="caption"
          >{props.person.messages[lastMsg - 1]}</Typography>
          
        </ListItemText>

      
      </ListItem>
      </Link>
      <Divider
        variant="inset"
        component="li"
        color="white"
      />
    </>

  )
}




export default function SideBarList(props) {
  const people = useSelector((state) => state.people.contact)
  let cloneArray = [...people]

  

  if (props.searchName) {
    cloneArray = cloneArray.filter(user => user.name.toLowerCase().includes(props.searchName));
  }
  function displayList() {

    let arr = [];
    for (let i = 0; i < cloneArray.length; i++) {
      arr.push(<Person person={cloneArray[i]} 
        handlePersonClick={props.handlePersonClick} 
        key={i}
        />)
    }
    return arr
  }


  return (
    <List
      sx={{ overflow: "auto", scrollbarWidth: "thin" }}
    >

      {
        displayList()
      }

    </List>

  )
}