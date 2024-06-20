import perfilDefault from "../../../assets/avatar.png";
const Card = (props) => {
  return (
    <div className="w-full h-44 bg-gray-200 my-2 px-3 py-5 rounded-lg">
      <div className="flex items-center justify-center">
        <div className="max-w-16 mr-6">
          <img
            src={perfilDefault}
            alt="Perfil Default"
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">{props.name}</h3>
          <p className="text-gray-600 pb-5">Destino: {props.destino}</p>
          <p className="text-gray-600">{props.description}</p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Card;
