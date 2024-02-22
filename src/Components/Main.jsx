import { Box } from "@mui/material";
import Screen from "./Screen";
import ChatSection from "./ChatSection/ChatSection";
import SideBar from "./SideBar/SideBar";
import { useSelector } from "react-redux";



const Main = () => {
  // const dispatch = useDispatch()

  
  // const people = useSelector((state) => state.people.contact)

  const selectedPerson = useSelector((state)=>state.people.selectedPerson)
  console.log("selctedContact",selectedPerson)


  return (

    <Box sx={{ display: "flex",overflowY:"hidden", flexDirection: "row",overflowX:'hidden' }}>
      
      
      <SideBar/>

      {selectedPerson.contactNumber ? 

      <ChatSection 
      /> : <Screen
     
      
      />}
      
      
      
    </Box>
  );
};
export default Main;
