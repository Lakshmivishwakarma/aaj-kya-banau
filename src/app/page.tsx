export default function Home() {
  return (
    <>
      <Navbar />

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>Breakfast</h1>
          <div>Poha</div>
          <h1>Lunch</h1>
          <div>Chicken curry</div>
          <h1>Dinner</h1>
          <div>Egg Curry</div>
        </main>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav className="bg-gray-200">
        <div className="relative flex h-16 items-center justify-evenly">
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-black"
          aria-current="page"
        >
          Home
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-black"
        >
          Add
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-black"
        >
          Calendar
        </a>
      </div>
    </nav>
  );
}
