import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginFrom from "./LoginForm";

const Login = () => {
    return ( 
        <Container>
            <FormWrap>
                <LoginFrom />
            </FormWrap>
        </Container>
     );
}
 
export default Login;