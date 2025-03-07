import { fireEvent, render, screen} from "@testing-library/react-native";
import Register from "../auth/Register";

test('Pressing the reigtser button', () => {
    render(<Register />);
    const register =  screen.getAllByText("Login");
    fireEvent.press(register);
   screen.debug();

})