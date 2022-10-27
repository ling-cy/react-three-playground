import { useState } from 'react';
import { BasicSphere, Macbook } from './components';

const EXAMPLE_MAP: Record<string, React.ComponentType> = {
  'Basic Sphere': BasicSphere,
  Macbook: Macbook,
};

function App() {
  const [componentName, setComponentName] = useState('Basic Sphere');

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
