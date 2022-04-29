import { Article, TextInput } from './components';

function App() {
  return (
    <div>
      <TextInput />
      <Article title={'TITLEです'} content={'コンテンツです'} />
    </div>
  );
}

export default App;
