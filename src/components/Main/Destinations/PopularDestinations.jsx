const PopularDestinations = () => {
  return (
    <div className="flex flex-col items-center justify-center">
    <h2 className="md:w-2/3 lg:w-1/2 mt-12 md:mt-10 lg:mt-16 mb-3 text-center text-3xl lg:text-4xl text-orange-400 font-bold">Destinos mais procurados</h2>
    <ul className="w-4/5 md:w-5/6 lg:w-2/5 font-medium text-lg flex justify-center gap-2 flex-wrap list-none">
        <li>China</li>|
        <li>Moscow</li>|
        <li>Nova York</li>|
        <li>Tokyo</li>|
        <li>Seul</li>|
        <li>Alaska</li>
        <li>Sidney</li>|
        <li>Paris</li>|
        <li>Suiça</li>|
        <li>Santiago</li>|
        <li>Rio de Janeiro</li>
    </ul>
</div>

  )
}

export default PopularDestinations