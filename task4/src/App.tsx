import logo from './logo.svg';
import './App.css';
import { Button } from './Button';

/**
 *
 * Part 1:
 * Let's run this app by running `yarn dev`.
 * We can improve the styling by
 * 1. centering the <header/>, with the button being under the logo.
 *
 * */

/**
 * 
 * Part 3 (note: Part 2 is in Button.tsx):
 * Let's retrieve data from:
 * https://api.sampleapis.com/futurama/characters
 * 
 * Lets render the first and last names of the characters in a list.
 * 
 */

export function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button />
        </p>
      </header>
    </div>
  );
}
