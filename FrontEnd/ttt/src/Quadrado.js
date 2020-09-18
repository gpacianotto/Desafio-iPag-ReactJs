import React from 'react';


export default class Quadrado extends React.Component {

    
    
    render() {
        
        if(this.props.value2 == 0)
        {
            return (
                <div><button className="quadrado0" onClick={() => this.props.onClick()}><p className="letras3">{this.props.value}</p></button></div>
            );
        }
        else if(this.props.value2 == 1)
        {
            return (
                <div><button className="quadrado1" onClick={() => this.props.onClick()}><p className="letras3">{this.props.value}</p></button></div>
            );
        }
        else if(this.props.value2 == 2){
            return(
                <div><button className="quadrado2" onClick={() => this.props.onClick()}><p className="letras3">{this.props.value}</p></button></div>
            );
        }
        else if(this.props.value2 == 3){
            return(
                <div><button className="quadrado3" onClick={() => this.props.onClick()}><p className="letras3">{this.props.value}</p></button></div>
            );
        }
        else if(this.props.value2 == 4){
            return(
                <div><button className="quadrado4" onClick={() => this.props.onClick()}><p className="letras3">{this.props.value}</p></button></div>
            );
        }
        else if(this.props.value2 == 5){
            return(
                <div><button className="quadrado5" onClick={() => this.props.onClick()}><p className="letras3">{this.props.value}</p></button></div>
            );
        }
        else if(this.props.value2 == 6){
            return(
                <div><button className="quadrado6" onClick={() => this.props.onClick()}><p className="letras3">{this.props.value}</p></button></div>
            );
        }
        else if(this.props.value2 == 7){
            return(
                <div><button className="quadrado7" onClick={() => this.props.onClick()}><p className="letras3">{this.props.value}</p></button></div>
            );
        }
        else if(this.props.value2 == 8){
            return(
                <div><button className="quadrado8" onClick={() => this.props.onClick()}><p className="letras3">{this.props.value}</p></button></div>
            );
        }
        else {
            return (
                <div><button className="quadrado0" onClick={() => this.props.onClick()}><p className="letras3"></p></button></div>
            );
        }
        
            
      }


}
