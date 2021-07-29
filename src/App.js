import "./App.css";
import "./components/css/resetter.css";
import Logo from "./components/js/Logo";
import DropDownBtn from "./components/js/DropDownBtn";

function App() {
  return (
    <div className="daddy-div">
      <header className="logo">
        <Logo />
        <DropDownBtn />
      </header>
      <main></main>
      <footer className="footsie"></footer>
    </div>
  );
}

export default App;
