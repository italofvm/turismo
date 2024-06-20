import Depositions from "./Depositions/Depositions";
import Destinations from "./Destinations/Destinations";
import Popular from "./Popular/Popular";

const Main = () => {
  return (
    <main className="container mx-auto">
      <section>
        <Destinations />
      </section>

      <section>
        <Depositions />
      </section>
     
      <section>
        <Popular />
      </section>
    </main>
  );
};

export default Main;
