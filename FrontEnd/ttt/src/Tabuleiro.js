import React from 'react';
import Quadrado from './Quadrado';

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default class Tabuleiro extends React.Component {

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        //Atenção: IF inline abaixo cuidado ler e se confundir
        squares[i] = this.state.xIsNext ? 'X' : 'O'; // se o estado de xIsNext for true recebe X senão recebe O

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
      }

    renderizarQuadrado(i) {

        return <Quadrado value={this.state.squares[i]} value2 = {i}
        onClick={() => this.handleClick(i)}
        
        />;
      }

    
    constructor(props) {
            super(props);
            this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

      

    render(){

        const winner = calculateWinner(this.state.squares);
        let status;

        if (winner) {
            status = 'Vencedor: ' + winner;
        } 
        else {
            status = 'Próximo a Jogar: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return(
            <div>
                <div className="quadroNegroLateral">
                    <div className="status"><p className="letras2">{status}</p></div>
                </div>
                
                <div className="tabuleiro">
                    
                    
                    <div className="board-row">
                        {this.renderizarQuadrado(0)}
                        {this.renderizarQuadrado(1)}
                        {this.renderizarQuadrado(2)}
                    </div>

                    <div className="board-row">
                        {this.renderizarQuadrado(3)}
                        {this.renderizarQuadrado(4)}
                        {this.renderizarQuadrado(5)}
                    </div>

                    <div className="board-row">
                        {this.renderizarQuadrado(6)}
                        {this.renderizarQuadrado(7)}
                        {this.renderizarQuadrado(8)}
                    </div>
                    

                </div>

            </div>
            

        );

        

    }
}