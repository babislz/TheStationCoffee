import { useState } from "react";
import axios from "axios";
import { Background, Button, Container, InfosContainer, Input, InputContainer, Label, Title } from "./styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.URL}/api/user/login`, { username: email, password }); //testeee
            const { token } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("role", response.data.role);

            console.log("Login successful:", response.data);

            if (response.data.role == "admin") {
                navigate("/admin");
                return
            } else if (response.data.role == "staff") {
                navigate("/tables");
                return
            }

            navigate("/");


        } catch (err) {
            setError(err.response ? err.response.data.message : "An error occurred");
            console.error("Login error:", err);
        }
    };

    return (
        <Container>
            <Background>
                <InfosContainer>
                    <Title>Seja Bem-vindo!</Title>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <InputContainer>
                        <Label htmlFor="email">E-mail:</Label>
                        <Input 
                            type="text" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <Label htmlFor="password">Senha:</Label>
                        <Input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </InputContainer>
                    <Button onClick={handleLogin}>
                        Enviar
                    </Button>
                </InfosContainer>
            </Background>
        </Container>
    );
};

export default Login;
