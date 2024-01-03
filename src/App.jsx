import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('Bagus');
  const [age, setAge] = useState(23);

  const handleClick = () => {
    setName('Bagus Adi Saputra');
    setAge(24);
  };

  const handleClickAgain = (text) => {
    console.log(text);
  };

  return (
    <div className="App">
      <header className="container mt-5">
        <p className="text-weight-bold">
          React as blog with {name} - Umur = {age}{' '}
        </p>
        <button onClick={handleClick}>Click Me</button>

        <button onClick={() => handleClickAgain('Ikeh')}>Click Me Again</button>
      </header>
    </div>
  );
};

export default App;
