//header for layout

import React,{Component} from 'react'

export default Header=()=>{
  return(<div className="hed_top">
  <div className="mid_container">
    <div className="logo">Aptitude</div>
    <div className="hed_top_right">
      <label>Logged in as Srinivas</label>
      <a href="#" onClick={()=>{
        Meteor.logout()
      }}><img src="../images/logout.png"/>Log Out</a></div>
  </div>
</div>)
}
