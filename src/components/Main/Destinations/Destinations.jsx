import PopularDestinations from "./PopularDestinations";
import Postcard from "./Postcard";
import Title from "./Title";

const Destinations = () => {
  return (
    <div className="flex">
      {/* Title */}
      <div className="flex-1">
        <Title/>
      {/* Destinos */}
      <PopularDestinations />
      </div>

      

      {/* cartão Postal */}
      <Postcard />
    </div>
  );
};

export default Destinations;
