function Display({ img, title, title2, button ,bg }) {
  return (
    // <div className="w-7xl md:grid-cols-2 m-auto ">
    <div
      className={`container  mx-auto p-5 gap-0 m-0 ${bg} h-full`}
    >
      <div className="flex justify-between items-end h-full">

        <div className=" mx-5 ">
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="text-2xl font-semibold mt-1">{title2}</h2>
          <button className="mt-4 flex items-center gap-2 text-sm font-medium">
            {button}
          </button>
        </div>
        <img src={img} className="block object-contain h-full w-50" />
      </div>
    </div>

  );
}
export default Display;
