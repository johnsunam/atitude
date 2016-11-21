import React from 'react'
import Formsy from 'formsy-react';
import ToolTip from 'react-portal-tooltip'

export default MyInput = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },

  getInitialState(){
    return{
      isTooltipActive: false
    }
  },

  showTooltip(){
    this.setState({isTooltipActive:true});
  },

  hideTooltip(){
    this.setState({isTooltipActive:false});
  },

  render() {
    const className = 'form-group' + (this.props.className || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : null);
    const errorMessage = this.getErrorMessage();
    return (

      <div className={className}>
      <span style={{color:'red'}}> {this.isRequired() ? '*' : null}</span>
        <input type={this.props.type || 'text'}
        id={this.props.id}
         required={this.props.required}
         ref={this.props.name}
         name={this.props.name}
         onChange={this.changeValue}
         value={this.getValue()}
         id={this.props.name}
         className={this.props.className}
         checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
         onMouseEnter={this.showTooltip}
         onMouseLeave={this.hideTooltip}
         />

         {/*This component is to display the helper tool tip on the form fields*/}
         <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent={"#"+this.props.name}>
                    <div>
                        <p>{this.props.help ? this.props.help : "Please fill out this field"}</p>
                    </div>
          </ToolTip>

        <label>{this.props.title}</label>
        <span className="validation-error">{errorMessage}</span>
      </div>

    );
  }
});
