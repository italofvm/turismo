const ButtonPrimary = ({ children }) => {
  return (
  <button type="button" className="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 hover:scale-105 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2">{children}</button>
)
}

export default ButtonPrimary;