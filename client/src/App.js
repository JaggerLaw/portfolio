import './App.css';
import project1 from './img/gira.jpg';
import project2 from './img/projectR.jpg';
import project3 from './img/logo192.png';
import me from './img/jake-grad_cropped.jpg';
import linkedIn from './img/linkedIn.png'

function App() {
  document.title = 'Jake G Portfolio';

  return (
    <>
      <div className="container">
        <nav>
          <ul className="main-navbar">
            <li>
              <a href="#index.js">Home</a>
            </li>
            <li>
              <a href="#index.js">About</a>
            </li>
            <li>
              <a href="#index.js">Projects</a>
            </li>
            <li>
              <a href="#index.js">Contacts</a>
            </li>
          </ul>
        </nav>
        <img className="main-pic" src={me} alt="main pic"/>
        <h3 className="dev-name">Jake Gardner</h3>
        <section>
          <h3>About</h3>
          <p>I am Jake, a software developer passionate about the development lifecycle. I have proper work experience with worksafe.</p>
        </section>
        <div>
          <h3 className="sub-title">Skills</h3>
          <p>C++</p>
        </div>
        <div className="card-section">
          <div className="card">
          <img src={project1} alt="Gira"/>
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
            <a href="#LearnMore">Learn More</a>
          </div>
          <div className="card">
            <img src={project2} alt="project2"/>
            <h3>Project 2</h3>
            <p>Desription of project 2</p>
            <a href="#LearnMore">Learn more</a>
          </div>
          <div className="card">
            <img src={project3} alt="project3"/>
            <h3>Project 3</h3>
            <p>Desription of project 3</p>
            <a href="#LearnMore">Learn more</a>
          </div>
        </div>
        <footer>
          <div className="sub-title">
            Contact Information
          </div>
        <section>
          contact information
          <ul className="secondary-nav">
            <li>Howick, Botany</li>
            <li>021 222 6444</li>
            <li>jake.aaron.g@gmail.com</li>
            <li>
              <a id="linkedID" href="https://www.linkedin.com/in/jake-gardner-57437a224/" target="_blank" rel="noreferrer">
                <img id="linkedInImg" src={linkedIn} alt="LinkedIn"  /></a>
            </li>
          </ul>
        </section>
        </footer>
      </div>
    </>
  );
}

export default App;
