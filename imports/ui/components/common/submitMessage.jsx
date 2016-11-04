import React,{Component} from 'react'

export default SubmitMessage=(props)=>{
    if(props.saveResult){
      var messages="message stored sucessfully"
      var styles={color:"green","font-size": 18,"font-weight": "bold"}
    }
    else{
      var messages="message stored unsucessfull"
      var styles={color:"red","font-size": 18,"font-weight": "bold"}
    }

    return(<div style={styles} id="messages" className="col-md-offset-5">{messages}</div>)

}
