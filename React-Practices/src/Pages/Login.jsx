import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const navigate = useNavigate();

    function handleLogin() {
        onLogin();
        navigate("/dashboard");
    }

    return (
        <>
            <h1>Please Login</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login;