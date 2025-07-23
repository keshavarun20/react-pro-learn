import Entry from "./components/Entry";
import Header from "./components/Header";
import "./App.css";
import data from "./data";
const App = () => {
  const renderEntry = data.map((item) => <Entry key={item.id} {...item} />);

  return (
    <>
      <Header />
      <main className="container">{renderEntry}</main>
    </>
  );
};

export default App;
