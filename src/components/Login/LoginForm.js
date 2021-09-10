import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { postData } from '../../utils/http';
import { AuthContext } from '../../store/AuthProvider';
import { useHistory } from 'react-router-dom';

const Card = styled.div`
  max-width: 400px;
  margin: auto;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #000;
  form {
    max-width: 300px;
    margin: 3rem auto;
  }
  input {
    display: block;
    font-size: 1rem;
    padding: 4px;
    width: 100%;
    margin-bottom: 10px;
  }
  h2 {
    margin: 1rem auto;
  }
  button {
    background-color: #333;
    border: 1px solid #333;
    text-transform: uppercase;
    color: inherit;
    padding: 0.4rem 1rem;
    font-size: 1rem;
    color: white;
  }
  button:disabled {
    background-color: #545454;
    cursor: not-allowed;
  }
  a {
    display: block;
    text-align: right;
    margin-bottom: 1rem;
  }
  h6 {
    background-color: #ededed;
    text-align: center;
    padding: 1rem 0;
    font-size: 1rem;
  }
`;
const Hr = styled.div`
  height: 1px;
  background-color: gray;
`;

export default function LoginForm() {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  // console.log('authCtx', authCtx);
  const [email, setEmail] = useInput('paid@member.com');
  const [password, setPassword] = useInput('123456');

  const [formError, setFormError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return setFormError('Fill in fields');
    }
    // console.log(email, password);
    const postToStrapiAuthReslut = await postData({ email, password }, '/auth/local');
    // console.log(postToStrapiAuthReslut);
    // irasyti token i context
    const userData = {
      email: postToStrapiAuthReslut.user.email,
      username: postToStrapiAuthReslut.user.username,
    };
    authCtx.login(postToStrapiAuthReslut.jwt, userData);
    // redirect
    await history.replace('/blog');
  }

  useEffect(() => {
    // componentWillUnmount
    return () => {
      console.log('clean up');
      setFormError(null);
    };
  }, []);

  return (
    <Card>
      <h2>Hello, welcome back</h2>
      <Hr />
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={setEmail} type="text" placeholder="Username or email" />
        <input value={password} onChange={setPassword} type="password" placeholder="Password" />
        <a href="/">Forgot Password</a>

        <button type="submit">Login</button>
      </form>
      <Hr />
      <h6>Don't have an account? Sign up</h6>
    </Card>
  );
}
