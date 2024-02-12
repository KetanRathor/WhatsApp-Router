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

const Main = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <SideBarHeader onPersonClick={handlePersonClick} />
      <Screen />
    </Box>
  );
};
export default Main;
