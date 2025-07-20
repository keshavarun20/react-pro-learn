import "./App.css";
import { Footer } from "./Footer";
function App() {
  return (
    <main>
      <header>
        <marquee>Welcome To The React Learning</marquee>
      </header>
      <div className="header">
        <img
          className="react-logo"
          src="https://www.pngall.com/wp-content/uploads/15/React-Logo-PNG.png"
          alt="react-logo"
        />
        <h1 className="title-header">Fun Facts About React!</h1>
      </div>
      <ul>
        <li>Was released in 2013</li>
        <li>Was originally created by Jorden Walke</li>
        <li>Has Well Over 200k starts on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <Footer />
    </main>
  );
}

export default App;
