import { useState } from 'react';
import {
  Card,
  Form,
  Button,
  Divider,
  Container,
  Message,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import { getUser, getUserErrorMessage } from '../../redux/selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector((store) => getUser(store));
  const userErrorMessage = useSelector((store) => getUserErrorMessage(store));

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Please enter a valid email!');
    } else if (!password) {
      setErrorMessage('Please enter a valid Password!');
    } else {
      dispatch(login(email, password));
    }
  };

  return user === null ? (
    <Container
      style={{
        display: 'flex',
        flexDrection: 'column',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Card>
        <Card.Content>
          <Card.Header>Login</Card.Header>
        </Card.Content>
        <Card.Content>
          <Form onSubmit={handleLoginFormSubmit}>
            <Form.Input
              fluid
              label="email"
              placeholder="enter you email"
              type="email"
              onChange={(e, { value }) => setEmail(value)}
            />
            <Form.Input
              fluid
              label="password"
              type="password"
              placeholder="enter you password"
              onChange={(e, { value }) => setPassword(value)}
            />
            <Button fluid primary type="submit">
              <Button.Content visible>Login</Button.Content>
            </Button>
            <Divider hidden />
            {userErrorMessage || errorMessage ? (
              <Message negative content={errorMessage || userErrorMessage} />
            ) : null}
          </Form>
        </Card.Content>
      </Card>
    </Container>
  ) : (
    <Redirect to={'/'} />
  );
};

export default LoginPage;
