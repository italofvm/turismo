import TheForm from "./Form/TheForm.jsx";
const About = () => {
  return (
    <div className="container mx-auto my-5 md:my-20 p-3">
      <h1 className="w-2/3 lg:w-1/2 text-3xl md:text-4xl lg:text-6xl text-white mb-2">
        Oferecemos os melhores pacotes de viagem para suas férias!
      </h1>
      <p className="hidden md:flex w-1/2 md:w-3/4 my-8 text-1xl text-white">
        A Agência de Viagens oferece serviços personalizados para quem busca
        destinos incríveis. Com nossos pacotes de viagem, você terá uma
        experiência única e inesquecível. Realize seus sonhos de viajar conosco!
      </p>
      <TheForm />
    </div>
  );
};

export default About;
