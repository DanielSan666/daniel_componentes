import styled from "styled-components";
import './App.css';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
    <div>
    <h1>Daniel Abraham Sanchez Esquivel</h1>
    <h2>Practica Componentes</h2>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
    <Button as='a' href="https://www.facebook.com/metallica170298">Red Social de Fcaebook</Button>
    
  </div>
  );
}

export default App;
