import React, { Component } from 'react';
import Configurator from "./Configurator";
import './App.css';


class App extends Component {
  render(){
    const sizes = [
      {
        "name": "small",
        "width": 17,
        "height": 11.5,
        "price": 249.00
      },
      {
        "name": "midlle",
        "width": 36,
        "height": 24,
        "price": 999.00
      },
      {
        "name" : "large",
        "width": 54,
        "height": 36,
        "price": 2499.00
      }
    ];

    const frames = [
      {
        "name": "no",
        "image": "false",
        "price": 0.00
      },
      {
        "name": "black",
        "image": "https://i.imgur.com/68DYh1q.png",
        "price": 261.00
      },
      {
        "name": "white",
        "image": "https://i.imgur.com/mSgiq2s.png",
        "price": 260.00
      },
      {
        "name": "natural",
        "image": "https://i.imgur.com/J1o8486.png",
        "price": 295.00
      }
    ];

    const image = "https://media.treehugger.com/assets/images/2018/02/three-horses.jpg.860x0_q70_crop-scale.jpg";
    
    
  return <Configurator image={image} sizes={sizes} frames={frames} />;
  }
}

export default App;


