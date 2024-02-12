import React from "react";
import { useState } from "react";
import { Box, AppBar, Stack, Toolbar, Divider, Avatar, Input, List, ListItem, ListItemAvatar, ListItemText, Button, Paper, Drawer, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import CommunitiesIcon, { StatusIcon, ChannelsIcon, NewChatIcon, MenuIcon } from "./Icons/IconsAppBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";

const SideBarHeader = () => {

  const [searchName, setSearchName] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  // const people = [
  //     { id: 1, name: "Ashutosh", messages: "Hii How Are You" },
  //     { id: 2, name: "Ketan Rathor",messages: "Hii How Are You"  },
  //     { id: 1, name: "Ashutosh", messages: "Hii How Are You"  },
  //     { id: 2, name: "Ketan Rathor",messages: "Hii How Are You"  },
  //     { id: 1, name: "Ashutosh", messages: "Hii How Are You"  },
  //     { id: 2, name: "Ketan Rathor",messages: "Hii How Are You"  },
  //     { id: 1, name: "Ashutosh", messages: "Hii How Are You"  },
  //     { id: 2, name: "Ketan Rathor",messages: "Hii How Are You"  }
  //     // Add more people as needed
  //   ];

  const [people, setPeople] = useState([
    { id: 1, name: "Ashutosh", messages: "Hii How Are You" },
    { id: 2, name: "Ketan Rathor", messages: "Hii How Are You" },
    { id: 3, name: "Arpit", messages: "Hii How Are You" },
    { id: 4, name: "Sourabh", messages: "Hii How Are You" },
    { id: 5, name: "Mihir", messages: "Hii How Are You" },
    { id: 6, name: "Abhishek", messages: "Hii How Are You" },
    { id: 7, name: "Abhinandan", messages: "Hii How Are You" },
    { id: 8, name: "Pragya", messages: "Hii How Are You" }
    // Add more people as needed
  ]);

  const toggleDrawer = () => {
    setProfileOpen(!profileOpen);
  };

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleSearchInputChange = (e) => {
    setSearchName(e.target.value);



    const clonePeople = JSON.parse(JSON.stringify(people));
    if (e.target.value === "") {
      setPeople(clonePeople);
    }
    else {
      const filteredPeople = clonePeople.filter((person) => person.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
      setPeople(filteredPeople);
    };
  }

  return (
    <Paper

      elevation={3}
      sx={{ border: "1px solid black" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "30vw",
          backgroundColor: "#111B21",
          overflow: "hidden",

        }}
      >
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
              // justifyContent: "space-between",
              paddingLeft: "15px",
            }}
          >
            <Stack
              alignItems="flex-start"
              sx={{ width: "50%", display: "flex", p: 0 }}>
              <IconButton sx={{ p: 0 }} onClick={toggleDrawer}>
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
                width: "50%", // Set the width to 50%
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
                value={searchName}
                onChange={handleSearchInputChange}
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
        <List sx={{
          overflow: "auto", scrollbarWidth: "thin"
        }}
        >
          {people.map((person) => (
            <>
              <ListItem key={person.id} component="div" onClick={() => handlePersonClick(person)}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#394B59',  // Add a background color on hover if desired
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                  >{person.name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={person.name}
                  secondary={person.messages}

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
          ))}
        </List>



        {/* <Box
      sx={{
        display: "flex",
          flexDirection: "column",
          height: "81vh",
          width: "70vh",
          backgroundColor: "blue",
        }}
      ></Box> */}
      </Box>
      <Drawer anchor="left" open={profileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: "30vw" }}
        >
          <Stack
            sx={{bgcolor:"green[500]",height:"20%",width:"100%"}}
          >

          </Stack>


        </Box>
      </Drawer>
    </Paper>
  );
};
export default SideBarHeader;
