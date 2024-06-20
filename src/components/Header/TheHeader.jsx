import Button from "../Button/ButtonLogin.jsx";
import ButtonPrimary from "../Button/ButtonPrimary.jsx";
import About from "./About.jsx";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="w-full h-[85vh] bg-home bg-cover bg-center rounded-b-[35px]">
      <div className="container mx-auto flex items-center justify-between">
        <div>
        <img src={logo} alt="Logo Turismo" />
        </div>
        <div>
          <Button>
            <a href="#">Login</a>
          </Button>

          <ButtonPrimary>
            <a href="#">Registrar</a>
          </ButtonPrimary>
        </div>
      </div>

      <div>
        <About />
      </div>
    </header>
  );
};

export default Header;
