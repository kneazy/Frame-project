import React, { Component } from 'react';
import img from './in__room.jpg'

class InRoom extends Component {
    render() { 
        const inRoomStyle = {
            margin:"auto",
            padding: "47%",
            backgroundImage : 'url(' + img + ')',
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            position: "relative",
            zIndex: 1
        } 
        const imageStyle = { 
            height: this.props.heightFrame * 6.6,
            width: this.props.widthFrame * 6.6,
            border: (this.props.heightFrame + this.props.widthFrame) / 5  + "px solid transparent",
            padding: (this.props.heightFrame + this.props.widthFrame) / 10 + "px",
            borderImage: this.props.frame ? "url(" + this.props.frame + ") 10 round round": false,
            position: "absolute",
            left: "0px",
            bottom: "12%",
            right: "0px",
            top: "0px",
            margin: "auto"
        }

        return (
            <div style = {inRoomStyle}>
                <img  style = {imageStyle} src = {this.props.roomimage} alt="img" />    
            </div>
        );
    }
}

export default InRoom;
