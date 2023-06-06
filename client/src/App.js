import './App.css';
import logo from './img/gira.jpg';

function App() {
  document.title = 'Jake G Portfolio';

  return (
    <>
      <div className="container">
        <nav>
          <ul className="main-navbar">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
        <h3>Jake Gardner</h3>
        <section>
          <h3>About</h3>
          <p>I am Jake, a software developer passionate about the development lifecycle. I have proper work experience with worksafe.</p>
        </section>
        <div className="card-section">
          <div className="card">
          <img src={logo} alt="Gira"/>
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
