import React from "react";
import { AppBar, Avatar, Box, Paper, Stack } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
// import { VideoCallIcon } from "./Icons/IconsAppBar";
import VideocamIcon from '@mui/icons-material/Videocam';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import MessageSection from "./MesssageSection";

// import CommunitiesIcon, { VideoCallIcon } from "./Icons/IconsAppBar";

const ChatSectionHeader = (props) => {


    return (
        <>

            {/* <Paper
                sx={{
                    display: "flex",
                    height: "100vh",
                    width: "100%",
                    backgroundColor: "blue",

                    
                    overflow: "hidden",
                    border: "1px solid black"

                }}
            > */}
                <Stack

                    position="static"
                    sx={{
                        height: "9.5vh",
                        width: "100%",
                        backgroundColor: "#202C33",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        paddingLeft:"10px"
                    }}
                >
                    <Box
                        sx={{ display: "flex",alignItems:"center", height: "100%", width: "5%" }}
                    >

                        <Avatar sx={{ bgcolor: deepOrange[500], fontSize: "medium" }}>
                        {props.selectedPerson.name[0]}
                        </Avatar>
                    </Box>
                    <Box
                        sx={{ display: "flex",alignItems:"center",justifyContent: "flex-start", height: "100%", width: "70%",
                        //  marginLeft: "5px"
                         }}
                    >
                        {props.selectedPerson.name}
                    </Box>
                    <Box
                        sx={{ display: "flex",alignItems:"center",justifyContent:"flex-end", height: "100%", width: "20%", gap:3 }}
                    >
                        <Box
                        sx={{display: 'flex', alignItems: 'center',height:"20px",width:"40px"}}
                        >
                        <VideocamIcon/>
                        <ExpandMoreIcon
                        sx={{fontSize:"20px"}}
                        />
                        </Box>
                    <Box
                    sx={{display: 'flex', alignItems: 'center'}}
                    >
                        <SearchIcon/>

                    </Box>

                    <Box
                    sx={{display: 'flex', alignItems: 'center'}}
                    >
                        <MoreVertIcon/>

                    </Box>

                    </Box>

                </Stack>
                <Box

                >

                </Box>







            {/* </Paper> */}


                 


        </>

    )
}

export default ChatSectionHeader;