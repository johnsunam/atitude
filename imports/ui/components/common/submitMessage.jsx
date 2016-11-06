//message shown in sucess or unsucess of data storing

import React,{Component} from 'react'

export default SubmitMessage=(props)=>{
    if(props.saveResult){
      var messages="Data saved sucessfully"
      var styles={color:"green","font-size": 18,"font-weight": "bold"}
    }
    else{
      var messages="Action failed. Please try after sometime"
      var styles={color:"red","font-size": 18,"font-weight": "bold"}
    }

    return(<div style={styles} id="messages" className="col-md-offset-5">{messages}</div>)

}
