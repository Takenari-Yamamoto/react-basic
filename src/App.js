import { Article, TextInput, Counter } from './components';

function App() {
  return (
    <div>
      <TextInput />
      <Article title={'TITLEです'} content={'コンテンツです'} />
      <Counter />
    </div>
  );
}

export default App;
