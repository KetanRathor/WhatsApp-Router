import React from "react";
import { useState } from "react";
import { Box, AppBar, Stack, Toolbar, Divider, Avatar, Input, List, ListItem, ListItemAvatar, ListItemText, Button, Paper, Drawer, IconButton, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
// import CommunitiesIcon, { StatusIcon, ChannelsIcon, NewChatIcon, MenuIcon, DrawerBackIcon } from "./Icons/IconsAppBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SideBarSeacrh = (props) =>{

return(

<Box
          display={"flex"}
          sx={{ display: "flex", width: "100%", height: "9%", borderBottom: "1px solid black", alignItems: "center", justifyContent: "center" }}
        >
          <Box
            display={"flex"}
            sx={{
              alignItems: "center",
              marginLeft: "8px",
              // marginTop: "8px",
              height: "68%",
              width: "85%",
              backgroundColor: "#202C33",
              borderRadius: "8px",
            }}
          >
            <SearchOutlinedIcon
              sx={{
                fontSize: "18px",
                color: "#aebac1",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "12px",
              }}
            />
            <Box sx={{ color: "#aebac1", fontSize: "14px", paddingLeft: "35px" }}>
              <Input
                placeholder="Search or start new chat"
                fullWidth
                disableUnderline
                // value={searchName}
                onChange={(e)=>props.handleSearchInputChange(e.target.value)}
                sx={{
                  color: "#aebac1",
                  fontSize: "13px",

                  height: "100%", // Adjust the height of the input
                  "&:hover, &:focus": {
                    outline: "none",
                  },
                }}
              />
            </Box>
          </Box>
          <FilterListIcon
            sx={{
              color: "#aebac1",
              fontSize: "22px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "12px",
              // marginTop: "10px",
              marginRight: "12px",
            }}
          />
        </Box>

)
        }
        export default SideBarSeacrh;