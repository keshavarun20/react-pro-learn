import Entry from "./components/Entry";
import Header from "./components/Header";
import "./App.css";
import data from "./data";
const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        {data.map((item) => (
        <Entry key={item.id} {...item} />
      ))}
      </main>
    </>
  );
};

export default App;
