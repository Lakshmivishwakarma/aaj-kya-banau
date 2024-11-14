export default function Home() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-2 gap-6 ">
        <div className="h-96 m-5 bg-sky-500/50  shadow-md">Images</div>

        <div className="m-5 p-10 bg-sky-500/50  shadow-md">
          <MenuForToday />
        </div>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav className="bg-gray-200">
      <div className="flex h-16 items-center justify-between px-4">
        <a
          href="#"
          className="block rounded-md px-4 py-2 text-base font-medium text-black hover:bg-gray-500 hover:text-black"
          aria-current="page"
        >
          Home
        </a>
        <div className="flex ml-auto space-x-4">
          <a
            href="#"
            className="block rounded-md px-4 py-2 text-base font-medium hover:bg-gray-500 hover:text-black"
          >
            Add
          </a>
          <a
            href="#"
            className="block rounded-md px-4 py-2 text-base font-medium hover:bg-gray-500 hover:text-black"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}

function MenuForToday() {
  return (
    <div className="m-20 p-20 bg-gray-50 rounded-lg shadow-lg max-w-xl mx-auto ">
    <p className="text-center text-2xl font-bold text-blue-600 mb-6">Today's Menu</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Breakfast</h2>
        <p className="text-lg text-gray-600">Poha</p>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Lunch</h2>
        <p className="text-lg text-gray-600">Chicken curry</p>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md sm:col-span-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Dinner</h2>
        <p className="text-lg text-gray-600">Egg Curry</p>
      </div>
    </div>
  </div>
  );
}
