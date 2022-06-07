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
