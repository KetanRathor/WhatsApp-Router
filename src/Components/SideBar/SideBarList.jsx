import React from "react";
import { useState } from "react";
import { Box, AppBar, Stack, Toolbar, Divider, Avatar, Input, List, ListItem, ListItemAvatar, ListItemText, Button, Paper, Drawer, IconButton, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
// import CommunitiesIcon, { StatusIcon, ChannelsIcon, NewChatIcon, MenuIcon, DrawerBackIcon } from "./Icons/IconsAppBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MailOutlineIcon from "@mui/icons-material/MailOutline"; 

const Person = (props) =>{
 let lastMsg = props.person.messages.length;
 

  return(
    <>
               <ListItem 
              //  key={person.id} 
              //  component="div" 
                onClick={() => props.handlePersonClick(props.person)}

                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#394B59',  // Add a background color on hover if desired
                    },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                    >{props.person.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={props.person.name}
                    secondary={props.person.messages[lastMsg-1]}
  
                    primaryTypographyProps={{ sx: { color: "white" } }}
                    secondaryTypographyProps={{
                      sx: {
                        color: "#aebac1",
                        // borderBottom:"1px solid rgba(255, 255, 255, 0.5)" 
                      }
                    }}
                  />
                  
                </ListItem>
                <Divider
                variant="inset"
                component="li"
                color="white"
              />
</>
                
  )
}




const SideBarList =(props) =>{
  let cloneArray = [...props.people]
  if(props.searchName)
  {
    cloneArray=cloneArray.filter(user=>user.name.includes(props.searchName));
  }
  function displayList (){

    let arr = [];
    for(let i = 0; i<cloneArray.length; i++){
      arr.push(<Person person={cloneArray[i]} handlePersonClick={props.handlePersonClick}/>)
    }
    return arr
  }


    return(
        <List 
        sx={{overflow: "auto", scrollbarWidth: "thin"}}
        >
        
        {
        displayList()
}
          
          </List>
          
    )
}
export default SideBarList;