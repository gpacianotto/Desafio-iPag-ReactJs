import React from 'react';
import ReactDOM from 'react-dom';
import Quadrado from './Quadrado';
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
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
            onClick={() => this.handleClick(i)} />;
        
      }
    
    qualODeveJogar(){
        let aux = [];
        let i = 0;
        let num;
        for(i = 0; i<9; i++)
        {
            aux[i] = this.state.squares[i];
        }

        if(aux[0] === 'O' && aux[2] === 'O' && aux[1] !== 'X')//a favor
        {
            num = 1;
        }
        else if(aux[0] === 'O' && aux[6] === 'O' && aux[3] !== 'X')
        {
            num = 3;
        }
        else if(aux[2] === 'O' && aux[8] === 'O' && aux[5] !== 'X')
        {
            num = 5;
        }
        else if(aux[6] === 'O' && aux[8] === 'O' && aux[7] !== 'X')
        {
            num = 7;
        }
        else if(aux[2] === 'O' && aux[6] === 'O' && aux[4] !== 'X')
        {
            num = 4;
        }
        else if(aux[0] === 'O' && aux[8] === 'O' && aux[4] !== 'X')
        {
            num = 4;
        }
        else if(aux[1] === 'O' && aux[7] === 'O' && aux[4] !== 'X')
        {
            num = 4;
        }
        else if(aux[3] === 'O' && aux[5] === 'O' && aux[4] !== 'X')
        {
            num = 4;
        }
        else if(aux[4] === 'O' && aux[7] === 'O' && aux[1] !== 'X')
        {
            num = 1;
        }
        else if(aux[1] === 'O' && aux[4] === 'O' && aux[7] !== 'X')
        {
            num = 7;
        }
        else if(aux[0] === 'O' && aux[1] === 'O' && aux[2] !== 'X')
        {
            num = 2;
        }
        else if(aux[3] === 'O' && aux[4] === 'O' && aux[5] !== 'X')
        {
            num = 5;
        }
        else if(aux[4] === 'O' && aux[5] === 'O' && aux[3] !== 'X')
        {
            num = 3;
        }
        else if(aux[1] === 'O' && aux[2] === 'O' && aux[0] !== 'X')
        {
            num = 0;
        }
        else if(aux[6] === 'O' && aux[7] === 'O' && aux[8] !== 'X')
        {
            num = 8;
        }
        else if(aux[7] === 'O' && aux[8] === 'O' && aux[6] !== 'X')//NOVO DAQUI PRA BAIXO
        {
            num = 6;
        }
        else if(aux[0] === 'O' && aux[3] === 'O' && aux[6] !== 'X')
        {
            num = 6;
        }
        else if(aux[3] === 'O' && aux[6] === 'O' && aux[0] !== 'X')
        {
            num = 0;
        }
        else if(aux[4] === 'O' && aux[1] === 'O' && aux[7] !== 'X')
        {
            num = 7;
        }
        else if(aux[4] === 'O' && aux[7] === 'O' && aux[1] !== 'X')
        {
            num = 1;
        }
        else if(aux[2] === 'O' && aux[5] === 'O' && aux[8] !== 'X')
        {
            num = 8;
        }
        else if(aux[5] === 'O' && aux[8] === 'O' && aux[2] !== 'X')
        {
            num = 2;
        }
        else if(aux[0] === 'O' && aux[4] === 'O' && aux[8] !== 'X')
        {
            num = 8;
        }
        else if(aux[4] === 'O' && aux[8] === 'O' && aux[0] !== 'X')
        {
            num = 0;
        }
        else if(aux[0] === 'X' && aux[2] === 'X' && aux[1] !== 'O')//contra
        {
            num = 1;
        }
        else if(aux[0] === 'X' && aux[6] === 'X' && aux[3] !== 'O')
        {
            num = 3;
        }
        else if(aux[2] === 'X' && aux[8] === 'X' && aux[5] !== 'O')
        {
            num = 5;
        }
        else if(aux[6] === 'X' && aux[8] === 'X' && aux[7] !== 'O')
        {
            num = 7;
        }
        else if(aux[2] === 'X' && aux[6] === 'X' && aux[4] !== 'O')
        {
            num = 4;
        }
        else if(aux[0] === 'X' && aux[8] === 'X' && aux[4] !== 'O')
        {
            num = 4;
        }
        else if(aux[1] === 'X' && aux[7] === 'X' && aux[4] !== 'O')
        {
            num = 4;
        }
        else if(aux[3] === 'X' && aux[5] === 'X' && aux[4] !== 'O')
        {
            num = 4;
        }
        
        else if(aux[1] === 'X' && aux[4] === 'X' && aux[7] !== 'O')
        {
            num = 7;
        }
        else if(aux[0] === 'X' && aux[1] === 'X' && aux[2] !== 'O')
        {
            num = 2;
        }
        else if(aux[3] === 'X' && aux[4] === 'X' && aux[5] !== 'O')
        {
            num = 5;
        }
        else if(aux[4] === 'X' && aux[5] === 'X' && aux[3] !== 'O')
        {
            num = 3;
        }
        else if(aux[1] === 'X' && aux[2] === 'X' && aux[0] !== 'O')
        {
            num = 0;
        }
        else if(aux[6] === 'X' && aux[7] === 'X' && aux[8] !== 'O')
        {
            num = 8;
        }
        else if(aux[7] === 'X' && aux[8] === 'X' && aux[6] !== 'O')//NOVO DAQUI PRA BAIXO
        {
            num = 6;
        }
        else if(aux[0] === 'X' && aux[3] === 'X' && aux[6] !== 'O')
        {
            num = 6;
        }
        else if(aux[3] === 'X' && aux[6] === 'X' && aux[0] !== 'O')
        {
            num = 0;
        }
        else if(aux[4] === 'X' && aux[1] === 'X' && aux[7] !== 'O')
        {
            num = 7;
        }
        else if(aux[4] === 'X' && aux[7] === 'X' && aux[1] !== 'O')
        {
            num = 1;
        }
        else if(aux[2] === 'X' && aux[5] === 'X' && aux[8] !== 'O')
        {
            num = 8;
        }
        else if(aux[5] === 'X' && aux[8] === 'X' && aux[2] !== 'O')
        {
            num = 2;
        }
        else if(aux[0] === 'X' && aux[4] === 'X' && aux[8] !== 'O')
        {
            num = 8;
        }
        else if(aux[4] === 'X' && aux[8] === 'X' && aux[0] !== 'O')
        {
            num = 0;
        }
        else{
            do{
                num = getRndInteger(0,8);
            }while(aux[num] != null)
            
        }
        
        
        return num;

        
    }
    
    
    constructor(props) {
            super(props);
            this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    reiniciarOJogo(){

        this.state.squares = Array(9).fill(null);
        
        
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


        if(this.state.xIsNext == false)
        {
            let jogada = this.qualODeveJogar();
            this.handleClick(jogada);
        }

        return(
            <div>
                <div className="quadroNegroLateral">
                    <div className="status"><p className="letras2">{status}</p></div>
                    <button className="botaoReiniciar" onClick={() => window.location.reload(false)}><p className="letras2">Reiniciar o Jogo</p></button>
                    <p className="letras4">Este jogo foi feito com o propósito de ser difícil de vencer. Boa Sorte.</p>
                    <p className="letras4">Criador: Guilherme de Aguiar Pacianotto</p>
                    <p className="letras4">GitHub do criador <a href="https://github.com/gpacianotto" target="_blank" className="letras4" >Aqui</a> </p>
                    <p className="letras4">LinkedIn do criador <a className="letras4" href="https://www.linkedin.com/in/guilherme-de-aguiar-pacianotto-aa357819b/" target="_blank">Aqui</a> </p>
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