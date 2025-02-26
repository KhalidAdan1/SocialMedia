import { render } from '@testing-library/react-native';
import Login from '../auth/Login';

test('Wether the Email works', ()=>{
    const { getByText } = render(<Login />)
});

const mockNavigate = jest.fn();
const mockOnLoginSuccess = jest.fn();

describe('Login Component', () => {
    beforeEach(() => {
      mockNavigate.mockReset();
      mockOnLoginSuccess.mockReset();
    });
});