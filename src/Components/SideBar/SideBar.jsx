import React, { useState } from "react";
import SideBarHead from "./SideBarHead";
import SideBarSeacrh from "./SideBarSearch";
import SideBarList from "./SideBarList";
import { Stack, Box, Paper } from "@mui/material";

const SideBar = (props) => {

  const [searchName, setSearchName] = useState("")
  function handleSearchInputChange(searchText) {
    setSearchName(searchText)
  }

  return (
    <>
      <Box
        display={"flex"}
        // elevation={2}
        sx={{
          border: "1px solid black",
          display: { xs:props.selectedPerson?'none': 'block', sm: 'block' }
          // display:{xs:(props.selectedPerson)?"none":"block",sm:"block"}
        }}

      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width:{xs:'100vw',sm:"30vw"} ,
            backgroundColor: "#111B21",
            overflow: "hidden",

          }}
        >
          <SideBarHead />
          <SideBarSeacrh handleSearchInputChange={handleSearchInputChange} />
          <SideBarList
            // people={props.people}
            searchName={searchName}
            handlePersonClick={props.handlePersonClick}
          />

        </Box>
      </Box>
    </>
  )
}
export default SideBar;