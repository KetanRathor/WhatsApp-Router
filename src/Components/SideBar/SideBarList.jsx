import React from "react";

const SideBarList =() =>{



    return(
        <List sx={{
            overflow: "auto", scrollbarWidth: "thin"
          }}
          >
            {props.people.map((person) => (
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
    )
}
export default SideBarList;