
import Image from "next/image";
export default function MenuForToday() {
    const menuTypes = [
      { menuType: "Breakfast", menuName: "Poha", imageUrl: "/images/poha.jpg" },
      {
        menuType: "Lunch",
        menuName: "Egg Curry",
        imageUrl: "/images/eggcurry.jpg",
      },
      {
        menuType: "Dinner",
        menuName: "Dal-Rice",
        imageUrl: "/images/darice.jpeg",
      },
    ];
  
    return (
      <>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-red-100">
          {menuTypes.map((menu, index) => (
            <div
              key={index}
              className="m-4 sm:m-6 lg:m-10 p-6 sm:p-8 lg:p-10 bg-white"
            >
              <div className="h-40 sm:h-48 lg:h-56 m-4 sm:m-6 lg:m-10 p-6 sm:p-8 lg:p-10 bg-green-100 relative">
                <Image
                  src={menu.imageUrl}
                  alt={menu.menuName}
                  objectFit="cover"
                  className="object-cover rounded-md"
                  layout="fill"
                />
              </div>  
  
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl dark:text-white">
                  {menu.menuType}
                </h2>
                <h2 className="text-transparent text-xl sm:text-2xl lg:text-2xl bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  {menu.menuName}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }