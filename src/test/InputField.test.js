import { render } from '@testing-library/react-native';
import InputField from '../ components/InputField';

test('what the label returns', ()=> {
    const { getByText } = render(<InputField value='test@test.com' />);
  

})