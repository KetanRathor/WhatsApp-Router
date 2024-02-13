import React from "react"

const SideBarSeacrh = () =>{

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

)
        }
        export default SideBarSeacrh;