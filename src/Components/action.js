import { newMessage } from "./Slices/peopleSlice";
import getCurrentTime from "./CurrentTime";

function actionFunction(messageObj){
    return (dispatch,getstate)=>{
        let msg = messageObj.message
        
        dispatch(newMessage(msg))
        // let time = moment().format("LT")
        
    }
}

export default actionFunction