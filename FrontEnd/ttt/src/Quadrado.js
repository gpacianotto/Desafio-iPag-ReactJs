import React from 'react';


export default class Quadrado extends React.Component {

    render() {
        return (
            <button className="quadrado" 
            onClick={() => this.props.onClick()}
            >
            {this.props.value}
          </button>
        );
      }


}
