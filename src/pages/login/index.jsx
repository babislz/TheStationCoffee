import { Background, Button, Container, InfosContainer, Input, InputContainer, Label, Title } from "./styles";

const Login = () => {
    return (
        <Container>
            <Background>
                <InfosContainer>
                    <Title>Seja Bem-vindo!</Title>
                    <InputContainer>
                        <Label htmlFor="email">E-mail:</Label>
                        <Input type="text" id="email" />
                        <Label htmlFor="password">Senha:</Label>
                        <Input type="text" id="password" />
                    </InputContainer>
                    <Button>
                        Enviar
                    </Button>
                </InfosContainer>
            </Background>
        </Container>
    )
}

export default Login;