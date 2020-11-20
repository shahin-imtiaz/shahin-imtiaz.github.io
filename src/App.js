import me from './images/img.png';
import mail from './images/mail.svg';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';
import resume from './images/file-text.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="intro">
          <div className="intro-child">
            <h1>Hi, I'm Shahin<span>.</span></h1>
            <p>
            Open for work, looking for a SWE internship for Summer 2021.

            I have years of development experience, most recently <a href="https://www.venasolutions.com/" target="_blank" className="link">@Vena</a> and <a href="https://www.sickkids.ca/" target="_blank" className="link">@SickKids</a> as a software developer intern and ML research intern respectively.
            </p>
            <div>
              <a href="mailto:sshahinimtiaz@gmail.com" className="social" target="_blank"><img src={mail}/></a>
              <a href="/ssresume.pdf" className="social" target="_blank"><img src={resume}/></a>
              <a href="https://www.linkedin.com/in/shahin-imtiaz/" className="social" target="_blank"><img src={linkedin}/></a>
              <a href="https://github.com/shahin-imtiaz" className="social" target="_blank"><img src={github}/></a>
            </div>
          </div>
          <div className="intro-child">
            <img className="me" src={me}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
