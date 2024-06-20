import Card from "./Card";
import Title from "./Title";
import Florida from "../../../assets/RectangleFour.png";
import França from "../../../assets/RectangleFive.png";
import BetoCarrero from "../../../assets/RectangleSix.png";

const Popular = () => {
  return (
    <div className="">
      <Title />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <Card
          title="Disney Orlando - Florida"
          image={Florida}
          buttonLabel="Ver Pacotes"
        />
        <Card
          title="Beto Carrero"
          image={França}
          buttonLabel="Ver Pacotes"
        />
        <Card
          title="Disney Paris - França"
          image={BetoCarrero}
          buttonLabel="Ver Pacotes"
        />
      </div>
    </div>
  );
};

export default Popular;
