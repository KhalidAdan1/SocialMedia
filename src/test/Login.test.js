import { fireEvent, render , screen } from '@testing-library/react-native';
import Login from '../auth/Login';

test('Wether the Login button works', ()=>{
  global.alert = jest.fn();
  render(<Login />);
  const login = screen.getByTestId('button');
  fireEvent.press(login);
});

