import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const result = login(identifier, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <h2>Welcome Back 👋</h2>

        {error && <Error>{error}</Error>}

        <input
          type="text"
          placeholder="Username or Email"
          required
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p>
          New user? <Link to="/register">Create account</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7fb;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  width: 340px;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 14px;

  h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.7rem;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    font-size: 0.95rem;

    &:focus {
      outline: none;
      border-color: #0ea5a4;
    }
  }

  button {
    background: linear-gradient(135deg, #0ea5a4, #38bdf8);
    color: white;
    border: none;
    padding: 0.7rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  }

  p {
    text-align: center;
    font-size: 0.9rem;
  }

  a {
    color: #0ea5a4;
    font-weight: 600;
  }
`;

const Error = styled.p`
  color: #ef4444;
  font-size: 0.9rem;
  text-align: center;
`;
 

export default LoginPage;
