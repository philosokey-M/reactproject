import logo from './logo.svg';
import './App.css';

/*
Header, Nav, Article 내부 컴포넌트 생성
*/

const Header = ({title}) => {
  return (
    <header><h1>{title}</h1></header>
  )
}
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </nav>
  )
}

const Article = () => {
  return (

    <article>
      <h2>Welcome</h2>
      <p>Hello React</p>
    </article>
  )
}


function App() {
  return (
    <div>
      <Header title='WEB'></Header>
      <Header title="server"></Header>
      <Header title="dev"></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
