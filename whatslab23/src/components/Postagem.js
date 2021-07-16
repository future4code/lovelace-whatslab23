import React from "react";
import styled from 'styled-components'

const ContainerGeral = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: flex-end;
  border: 2px solid gray;
  width: 40%;
  height: 1200px;
  margin: 15px;
  
`
const FormularioBotao = styled.div`
  
  display: flex;
  margin-bottom: 10px;
  margin-right: 100px;
  
`
const Msg = styled.div`
  
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 10px;
  margin-right: 230px;
  align-items: left;
  justify-content: flex-start;
`
const InputMsg = styled.div`
  
  display: flex;
  margin-left: 10px;
  `

class Postagem extends React.Component {
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
      <ContainerGeral>
        
        <Msg>{listaDeComponentes}</Msg>
        <FormularioBotao>
        
          <input
            
            value={this.state.valorInputPessoa}
            
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <InputMsg>
          <input
            
            value={this.state.valorInputEmail}
            
            onChange={this.onChangeInputEmail}
            placeholder={"Mensagem"}
          />
          </InputMsg>
          
          <button onClick={this.adicionaPessoa}>Enviar</button>
        </FormularioBotao>
        
      </ContainerGeral>
    );
  }
}

export default Postagem;
