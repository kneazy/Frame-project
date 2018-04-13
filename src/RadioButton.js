import React, { Component } from 'react';

class RadioButton extends Component {
    render() {
        const imgStyle = {
            color: 'white',
            width: '40px',
            height: '40px',
            border: '2px solid red',
            backgroundImage: this.props.colorFrame ? 'url(' + this.props.colorFrame + ')' : false
        }
        return (     
            <label>  
                {this.props.nameid === "frame" ? (<div style={imgStyle}></div>) : null}
                <input type="radio" value={this.props.name} name={this.props.nameid}  onChange={this.props.onChange} />
                {this.props.price + "$"}          
            </label>
        );
    }
}

export default RadioButton;