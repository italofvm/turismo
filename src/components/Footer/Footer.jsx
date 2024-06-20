import Visa from "../../assets/visa.png";
import Master from "../../assets/master.png";
import Face from "../../assets/facebook.png";
import Insta from "../../assets/instagram.png";
import Tiktok from "../../assets/tiktok.png";

const Footer = () => {
  return (
    <div className="bottom-0 h-96 md:h-52 lg:h-32 mt-14 bg-orange-600 text-[#f4f4f4]">
      <div className="container mx-auto p-10 lg:p-0 flex flex-col justify-center md:flex-row md:items-center md:justify-between">

        <div className="mb-3">
          <h3 className="text-2xl">Formas de pagamento</h3>
          <div className="flex gap-2 py-2">
            <img src={Visa} alt="Cartão Visa" />
            <img src={Master} alt="Cartão Master" />
          </div>
        </div>

        <div className="mb-3">
          <h3 className="text-2xl">Redes sociais</h3>
          <div className="flex gap-2 py-2">
            <img src={Face} alt="" />
            <img src={Insta} alt="" />
            <img src={Tiktok} alt="" />
          </div>
        </div>

        <div className="mb-3 mt-2">
          <h3 className="text-2xl mb-2">Televendas</h3>
          <p>(11) 3333-2565</p>
          <p>Segunda a Sábado : 9 às 21h</p>
          <p>Domingo: 10 às 16h</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
