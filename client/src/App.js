import './App.css';
import logo from './img/gira.jpg';
import project2 from './img/projectR.jpg';
import project3 from './img/logo192.png';
import me from './img/jake-grad_cropped.jpg';

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
        <img className="main-pic" src={me}/>
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
          <div className="card">
            <img src={project2}/>
            <h3>Project 2</h3>
            <p>Desription of project 2</p>
            <a href="#">Learn more</a>
          </div>
          <div className="card">
            <img src={project3}/>
            <h3>Project 3</h3>
            <p>Desription of project 3</p>
            <a href="#">Learn more</a>
          </div>
        </div>
        <section>
          contact information
          <ul>
            <li>Location</li>
            <li>Phone Number</li>
            <li>Email</li>
            <li>LinkedIn</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
