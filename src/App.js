import './App.css';
import Container from './components/Container';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container />
        <br />
      </BrowserRouter>
    </>
  );
}

export default App;
