// import React from "react";
// import SideBarHeader from "./SideBarHeader";
// import { Box } from "@mui/material";
// import Screen from "./Screen";

// const Main = () =>{



//     return(
//         <Box
//         sx={{ display: "flex", flexDirection:"row"}}
//     >
//       <SideBarHeader />
//       <Screen />
//     </Box>
//     )
// }
// export default Main;

import React, { useState } from "react";
import SideBarHeader from "./SideBarHeader";
import { Box } from "@mui/material";
import Screen from "./Screen";
import ChatSection from "./ChatSection/ChatSection";
// import ChatSection from "./ChatSection/MesssageSection";


const Main = () => {

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


  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <SideBarHeader
      people ={people}
      setPeople={setPeople}
      onPersonClick={handlePersonClick} />
      
      
      
      {/* <Screen /> */}
      <ChatSection people={people}/>
      {/* <ChatSection/> */}
      
    </Box>
  );
};
export default Main;
