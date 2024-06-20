import Button from "../../Button/ButtonPrimary.jsx"
const Card = (props) => {
  return (
    <div className="w-96 py-3 bg-white rounded-lg overflow-hidden shadow-md w-64 mx-2">
      <img src={props.image} alt={props.title} className="w-full object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold mb-2">{props.title}</h2>
        <Button>
          {props.buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default Card;
