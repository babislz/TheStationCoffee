import { Background, Button, Container, InfosContainer, Input, InputContainer, Label, Title } from "./styles";
import LoginP from "../../../public/login-container.svg"
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Login = () => {
    return (
        <Container>
            <Navbar />
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
            <Footer />
        </Container>
    )
}

export default Login;