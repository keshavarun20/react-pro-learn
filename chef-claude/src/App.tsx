import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import { Analytics } from "@vercel/analytics/next";
const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Analytics />
    </>
  );
};

export default App;
