import React from "react";

const SideBarDrawer = () =>{
    const [profileOpen, setProfileOpen] = useState(false);

    const openDrawer = () => {
        setProfileOpen(!profileOpen);
      };
    return(
<>
<Drawer anchor="left" open={profileOpen}
      // onClose={toggleDrawer}
      >
        <Box sx={{ width: "30vw", height: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Stack
            sx={{ display: "flex", alignItems: "flex-end", flexDirection: "row", justifyContent: "flex-start", backgroundColor: "#006654", height: "18%", width: "100%" }}
          >
            <Box
              sx={{ display: "flex", padding: "2px", marginLeft: "20px", marginBottom: "10px" }}
            >
              <Box
                onClick={closeDrawer}
              >
                {/* // sx={{}} */}


                <ArrowBackIcon
                  sx={{ color: "#aebac1", marginBottom: "4px" }}
                />
              </Box>
              <Typography
                sx={{ fontSize: "18px", marginLeft: "20px", color: "white" }}
              >
                Profile
              </Typography>
            </Box>

          </Stack>
          {/* <Stack
            sx={{ display: "flex", height: "82%", width: "100%" }}
          >
            <Box

            >

            </Box>

          </Stack> */}


        </Box>
      </Drawer>
</>


    )
}