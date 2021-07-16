import React from "react";

class Exemplo8 extends React.Component {
  state = {
    
    pessoas: [
      {
        nome: "",
        email: ""
        
      },
      {
        nome: "",
        email: ""
        
      }
    ],
    

    valorInputPessoa: "",
    valorInputEmail: "",
    
  };

  adicionaPessoa = () => {
    
    const novaPessoa = {
      
      nome: this.state.valorInputPessoa,
      
      email: this.state.valorInputEmail,

    
    };

    
    const novoArrayPessoas = [...this.state.pessoas, novaPessoa];

    
    this.setState({
      pessoas: novoArrayPessoas,
      valorInputPessoa: "",
      valorInputEmail: ""
      
    });
  };

  onChangeInputPessoa = (event) => {
    
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputEmail = (event) => {
    
    this.setState({ valorInputEmail: event.target.value });
  };

  render() {
    
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          {pessoa.nome}: {pessoa.email}
        </p>
      );
    });

    return (
      <div>
        <h1>WhatsLab</h1>
        <div>
          <input
            
            value={this.state.valorInputPessoa}
            
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <input
            
            value={this.state.valorInputEmail}
            
            onChange={this.onChangeInputEmail}
            placeholder={"Email"}
          />
          
          <button onClick={this.adicionaPessoa}>Enviar</button>
        </div>
        <div>{listaDeComponentes}</div>
      </div>
    );
  }
}

export default Exemplo8;
