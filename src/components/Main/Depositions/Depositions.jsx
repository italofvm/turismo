import Card from "./Card";
import Title from "./Title";

const Depositions = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-cente">
        <Title />
      </div>

      <div className="hidden md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3 ">
        <div>
          <Card
            name="Carlos Miguel"
            destino="Tóquio"
            description="Descubra a mistura perfeita de tradição e tecnologia!"
          />
        </div>
        <div>
          <Card
            name="Lucas Oliveira"
            destino="Maldiva"
            description="Melhor lugar para comprar suas passagens!"
          />
        </div>
        <div>
          <Card
            name="Mariana Silva"
            destino="Paris"
            description="Viva momentos inesquecíveis na cidade do amor!"
          />
        </div>
        <div>
          <Card
            name="Guilherme Costa"
            destino="Sydney"
            description="Aventure-se nas paisagens deslumbrantes da Austrália!!"
          />
        </div>
        <div>
          <Card
            name="Ana Pereira"
            destino="Roma"
            description="Explore a rica história e cultura da capital italiana!"
          />
        </div>
        <div>
          <Card
            name="Rafael Souza"
            destino="Nova York"
            description="A cidade que nunca dorme espera por você!"
          />
        </div>
      </div>

      <div className="md:hidden sm:grid">
        <div>
          <Card
            name="Carlos Miguel"
            destino="Tóquio"
            description="Descubra a mistura perfeita de tradição e tecnologia!"
          />
        </div>
        <div>
          <Card
            name="Mariana Silva"
            destino="Paris"
            description="Viva momentos inesquecíveis na cidade do amor!"
          />
        </div>
      </div>
    </div>
  );
};

export default Depositions;
