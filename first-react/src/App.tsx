import "./App.css";
import { Footer } from "./Footer";
import Header from "./Header";
function App() {
  return (
    <main>
      <Header />

      <h1 className="title-header">Fun Facts About React!</h1>
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
