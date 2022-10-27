import { useState } from 'react';
import { Example1 } from './components';

const EXAMPLE_MAP: Record<string, React.ComponentType> = {
  'Example 1': Example1,
};

function App() {
  const [componentName, setComponentName] = useState('Example 1');

  const Component = EXAMPLE_MAP[componentName];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <select onChange={(e) => setComponentName(e.target.value)}>
        {Object.keys(EXAMPLE_MAP).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <Component />
    </div>
  );
}

export default App;
