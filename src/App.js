import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  
const [telaInicial , setTelaInicial] = useState (2);

const mudarTela = (tela) => {
  setTelaInicial (tela)
}

switch (telaInicial) {
case 1:  
return (
    <MainContainer >
      <GlobalStyled />
      <TelaLogin mudarTela = {mudarTela}/>
    </MainContainer>
);

case 2: 
return (
  <MainContainer >
    <GlobalStyled />
    <TelaCadastro mudarTela = {mudarTela}/>
  </MainContainer>
);

case 3: 
return (
  <MainContainer >
    <GlobalStyled />    
    <TelaPrincipal mudarTela = {mudarTela}/>
  </MainContainer>
);
default: 
console.log ('Tela Não Encontrada!')
}
}



 

export default App;