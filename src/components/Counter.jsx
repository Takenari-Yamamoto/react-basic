import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };

  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };

  useEffect(() => {
    console.log('描画されました');
  }, []);

  useEffect(() => {
    console.log('更新されました', count);
  }, [count]);

  return (
    <div>
      <p>良いカウンター</p>
      <p>現在のカウント：{count}</p>
      <button onClick={countUp}>UP</button>
      <button onClick={countDown}>DOWN</button>
    </div>
  );
};

export default Counter;
