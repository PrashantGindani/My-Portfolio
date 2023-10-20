import logo from './logo.svg';
import ContactMe from './components/ContactMe'
import Intro from './components/Intro'
import Header from './components/Header';
import Hey from './components/Hey';
import About from './components/About';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
      <Header/>
      <div>
        <Intro/>
      <br/>
      <Hey/>
      <br/>
      <br/>
      <About/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Skills/>
      <br/>
      <br/>
      <br/>
      <br/>
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
