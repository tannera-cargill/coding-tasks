import { FC, useState } from 'react';

/**
 *
 * Part 2:
 * What can we refactor in <Button> to make it reusable?
 *
 * */

type Props = {};

export const Button: FC<Props> = ({}) => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label htmlFor="btn" style={{ padding: 5 }}>
        Count is:
      </label>
      <button id="btn" type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count}
      </button>
    </div>
  );
};
