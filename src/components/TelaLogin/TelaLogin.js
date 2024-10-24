import TelaPrincipal from "../TelaPrincipal/TelaPrincipal";
import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {
  // const login = () => {
  //   // validação de login ainda será visto mais pra frente no curso
  //   alert("Login bem sucedido, mas falta fazer a prática 3 e remover esse alerta")
  // }

  // const mostrarTelaCadastro = () => {
  //   alert("Faça a prática 2 e remova esse alerta")
  // }

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"} />
        </StyledLabel>

        <SendButton onClick={() => props.mudarTela (3)}>Entrar</SendButton>

        <RegisterButton onClick={()=>props.mudarTela(2)}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
