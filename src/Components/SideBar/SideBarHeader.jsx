import React from 'react'
import { useState } from "react";
import { Box, AppBar, Stack, Toolbar, Divider, Avatar, Input, List, ListItem, ListItemAvatar, ListItemText, Button, Paper, Drawer, IconButton, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import CommunitiesIcon, { StatusIcon, ChannelsIcon, NewChatIcon, MenuIcon, DrawerBackIcon } from "./Icons/IconsAppBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SideBarHeader = () => {
  return (
    <Stack
    position="static"
    sx={{
      height: "9.5vh",
      width: "30vw",
      backgroundColor: "#202C33",
      display: "flex",
      justifyContent: "flex-start",
    }}
  >
    <Toolbar
      disableGutters
      sx={{
        display: "flex",
        height: "5vh",
        width: "20vw",
        paddingLeft: "15px",
      }}
    >
      <Stack
        alignItems="flex-start"
        sx={{ width: "50%", display: "flex", p: 0 }}>
        <IconButton sx={{ p: 0 }} onClick={openDrawer}>
          <Avatar sx={{ bgcolor: deepOrange[500], fontSize: "medium" }}>
            K
          </Avatar>
        </IconButton>

      </Stack>
      <Stack direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 1,
          width: "50%",
          paddingRight: "0px"
        }}
      >
        <IconButton>
          <CommunitiesIcon />
        </IconButton>

        <IconButton>
          <StatusIcon />
        </IconButton>

        <IconButton>
          <ChannelsIcon />
        </IconButton>

        <IconButton>
          <NewChatIcon />
        </IconButton>

        <IconButton>
          <MenuIcon />
        </IconButton>



      </Stack>
    </Toolbar>
  </Stack>
  )
}

export default SideBarHeader