export default function Navbar() {
    return (
      <nav className="bg-gradient-to-r from-sky-400 to-emerald-600 shadow-md">
        <div className="flex h-16 items-center justify-between px-6">
          <a
            href="/"
            className="block rounded-md px-4 py-2 text-lg font-semibold text-white hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
            aria-current="page"
          >
            Home
          </a>
          <div className="flex ml-auto space-x-6">
            <a
              href="/addMenu"
              className="block rounded-md px-4 py-2 text-lg font-medium text-white hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
            >
              Add
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-lg font-medium text-white hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    );
  }