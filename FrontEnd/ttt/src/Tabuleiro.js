import React from 'react';


export default class Tabuleiro extends React.Component {

    

    render(){
        return(

            <div className="tabuleiro">
                <div className="quadrado">1</div>
                <div className="quadrado">2</div>
                <div className="quadrado">3</div>
                <div className="quadrado">4</div>
                <div className="quadrado">5</div>
                <div className="quadrado">6</div>
                <div className="quadrado">7</div>
                <div className="quadrado">8</div>
                <div className="quadrado">9</div>
            </div>

        );

        

    }
}