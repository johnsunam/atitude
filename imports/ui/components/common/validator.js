import React from 'react'
import Formsy from 'formsy-react';
export default MyInput = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },
  render() {
    const className = 'form-group' + (this.props.className || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : null);
    const errorMessage = this.getErrorMessage();
    return (
      <div className={className}>
        <input type={this.props.type || 'text'}
         required="required"
         ref={this.props.name}
         name={this.props.name}
         onChange={this.changeValue}
         value={this.getValue()}
         checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
         />
        <label>{this.props.title}</label>
      </div>
    );
  }
});
