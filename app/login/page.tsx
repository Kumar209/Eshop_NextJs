import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginFrom from "./LoginForm";

const Login = async () => {
    const currentUser = await getCurrentUser();

    return ( 
        <Container>
            <FormWrap>
                <LoginFrom currentUser = {currentUser} />
            </FormWrap>
        </Container>
     );
}
 
export default Login;