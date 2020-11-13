import { useState } from 'react';
import {
  Card,
  Form,
  Button,
  Divider,
  Container,
  Icon,
  Message,
} from 'semantic-ui-react';
import { login } from '../../api/users';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const res = await login(email, password);

    const data = res[0];
    if (data && data.email === email && data.password === password) {
      // redirect to the menu
      console.log('you are logged in');
      history.push('/');
    } else {
      //display error message
      console.log('can not login');
      setErrorMessage('Wrong Email or Password!');
    }
  };

  return (
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
              type="text"
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
            <Message error content={errorMessage} />
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default LoginPage;
