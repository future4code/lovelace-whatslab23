import React from "react";
import styled from 'styled-components'

import Postagem from "./components/Postagem";

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
  
`
class App extends React.Component {
  

  render() {
    
    return (
      <PostFooter>
        
        <Postagem />
      
      </PostFooter>
    );
  }
}

export default App;
