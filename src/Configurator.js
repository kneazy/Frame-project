import React, { Component } from 'react';
import RadioButton from "./RadioButton"
import InRoom from "./InRoom"

class Configurator extends Component {
    constructor(props){
        super(props);
        this.state = {
            sizeName: "small",
            frameName: "no",
            viewInRoom: false          
        };
    this.handleOptionSize = this.handleOptionSize.bind(this);
    this.handleOptionFrame = this.handleOptionFrame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.submit = this.submit.bind(this);
    }

    handleOptionSize(e) {
        this.setState({sizeName: e.target.value});
    }
    handleOptionFrame(e) {
        this.setState({frameName: e.target.value});    
    }
    handleClick() {
        this.setState({viewInRoom: !this.state.viewInRoom});
    }
    submit() {
        alert("Size: " + this.state.sizeName + " Frame: " + this.state.frameName);
    }
    getRenderItems(array, nameId, onChange){
        return(
            array.map(function(item){
                return <RadioButton
                            name = {item.name}
                            price = {item.price} 
                            nameid = {nameId} 
                            onChange = {onChange} 
                            width = {item.width} 
                            height = {item.height}
                            nameColor= {item.color}
                            colorFrame={item.image} 
                        />;                
            })

        );
    }
    render() {
        
        let selectedSize = {
            price: 0
        };
        this.props.sizes.forEach(function(item, i, size) {
            if(size[i].name === this.state.sizeName){
                selectedSize = item;
            }          
        } ,this);
        let selectedFrame = {
            price: 0
        };
        this.props.frames.forEach(function(item, i, frame) {
            if(frame[i].name === this.state.frameName){
                selectedFrame = item;
            }          
        } ,this);
        
        
        const sumPrice = selectedSize.price + selectedFrame.price;
        const valueSizes = this.getRenderItems(this.props.sizes, "size", this.handleOptionSize);
        const valueFrames = this.getRenderItems(this.props.frames, "frame", this.handleOptionFrame);
        const borderStyle = {
            height:"400px",
            border: "30px solid #fff",
            padding: "10px",
            borderImage: selectedFrame.image ? "url(" + selectedFrame.image + ") 10 round round": "30px solid #fff"
        }  
        return (
            
            <div className = "content">
                <div className = "image-bootton__grup">
                    {this.state.viewInRoom ? 
                        <InRoom widthFrame = {selectedSize.width}
                                heightFrame = {selectedSize.height} 
                                roomimage={this.props.image} 
                                frame ={selectedFrame.image}
                        />:<img style = {borderStyle} src = {this.props.image} alt="img"/>}
                    <div className = "button__position">
                        <button value={this.state.viewInRoom} onClick={this.handleClick} > {this.state.viewInRoom ? "view print":"view in room"}</button>    
                    </div>
                </div>             
                <div className = "menu__selecter">
                    <form onSubmit={this.submit}>
                        <h1>Size frames: {selectedSize.width ? selectedSize.width +" X "+ selectedSize.height : false}</h1>
                        <div className="size">{valueSizes}</div>
                            <h1>Color frames: {selectedFrame.name}</h1>
                        <div className="size">{valueFrames}</div>
                        <h1>Total:{sumPrice}$</h1>
                        <button type="submit"> Add To Bag </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Configurator;
