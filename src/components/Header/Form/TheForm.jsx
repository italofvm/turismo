import { useState } from "react";
import ButtonPrimary from "../../Button/ButtonPrimary";

const TheForm = () => {
  const [localizacao, setLocalizacao] = useState("EUA");
  const [passageiros, setPassageiros] = useState("3 Passageiros");
  const [checkin, setCheckin] = useState("2024-12-22");
  const [checkout, setCheckout] = useState("2024-12-22");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ localizacao, passageiros, checkin, checkout });
  };

  return (
    <div className="container sm:mt-3">
      <div className="nav h-16 md:w-72 md:h-12 lg:w-96 lg:h-16 bg-white rounded-t-md px-2 border-b-2 border-b-orange-500 flex gap-3 items-center">
        <h1 className="text-3xl md:text-2xl lg:text-3xl text-orange-500 font-bold">Destino</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="lg:text-lg bg-white rounded-b-md md:rounded-tr-lg px-3 py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
      >
        <div className="form-group flex flex-col items-left justify-center gap 3">
          <label htmlFor="localizacao" className="text-gray-600 px-1">
            Localização
          </label>
          <select
            id="localizacao"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            className="font-bold"
          >
            <option>Russia</option>
            <option>Brasil</option>
            <option>Estados Unidos</option>
          </select>
        </div>

        <div className="form-group flex flex-col gap 3">
          <label htmlFor="passageiros" className="text-gray-600 px-1">
            Nº de passageiros
          </label>
          <select
            id="passageiros"
            value={passageiros}
            onChange={(e) => setPassageiros(e.target.value)}
            className="font-bold"
          >
            <option>1 passageiro</option>
            <option>2 passageiros</option>
            <option>3 passageiros</option>
            <option>4 passageiros</option>
          </select>
        </div>

        <div className="form-group flex flex-col gap 3">
          <label htmlFor="checkin" className="text-gray-600">
            Check-in
          </label>
          <input
            type="date"
            id="checkin"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="font-bold"
          />
        </div>

        <div className="form-group flex flex-col gap 3">
          <label htmlFor="checkout" className="text-gray-600">
            Check-Out
          </label>
          <input
            type="date"
            id="checkout"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="font-bold"
          />
        </div>
          <ButtonPrimary type="submit">Procurar pacotes</ButtonPrimary>
      </form>
    </div>
  );
};

export default TheForm;
