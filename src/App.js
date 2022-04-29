import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [id, setId] = useState('Takenari-Yamamoto');
  const ids = ['aws', 'google', 'facebook', 'Takenari-Yamamoto'];
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.github.com/users/${id}`);
      const json = await res.json();
      console.log(json);
      setName(json.name);
    })();
  }, [id]);

  return (
    <div>
      <p>GitHub </p>
      <p>NAME: {name}</p>
      <button onClick={getRandomId}>ID を変更</button>
    </div>
  );
}

export default App;
