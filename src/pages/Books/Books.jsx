import React from "react";
import Book1 from "../../assets/images/Book1.png";

export default function Books() {
  const books = [
    { title: "Fire and BrimStone", price: 199, image: Book1, date: "Feb 2022" },
    {
      title: "A Good Day To Try Again",
      price: 145,
      image: Book1,
      date: "Feb 2022",
    },
    {
      title: "First Chance At Life",
      price: 94.99,
      image: Book1,
      date: "Feb 2022",
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div className="text-center py-8 px-5">
      <div className="py-8">
        <h2 className=" text-4xl font-semibold pb-2">
          Latest Books & Articles
        </h2>
        <p className=" font-semibold">
          We can not solve our problems with the same level of thinking that
          created them
        </p>
      </div>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center text-left py-8">
        {books.slice(0, 7).map((book) => {
          return (
            <div>
              <img src={book.image} alt="book image" />
              <div className="py-4 flex flex-col gap-1">
                <small>{book.date}</small>
                <p className=" font-bold">{book.title}</p>
                <p className="text-gray-500">{formatPrice(book.price)}</p>
                <a
                  href="#"
                  className=" cursor-pointer block font-semibold bg-[#956B73] border-2 border-[#956B73] text-white rounded-lg py-2 w-fit px-6 hover:bg-white hover:text-[#956B73] transition-all ease-in-out"
                >
                  BUY NOW
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-4xl font-semibold py-6">Books By TITI OYEWOLE</h2>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center text-left py-8">
        {books.map((book) => {
          return (
            <div>
              <img src={book.image} alt="book image" />
              <div className="py-4 flex flex-col gap-1">
                <small>{book.date}</small>
                <p className=" font-bold">{book.title}</p>
                <p className="text-gray-500">{formatPrice(book.price)}</p>
                <a
                  href="#"
                  className=" cursor-pointer block font-semibold bg-[#956B73] border-2 border-[#956B73] text-white rounded-lg py-3 w-fit px-6 hover:bg-white hover:text-[#956B73] transition-all ease-in-out"
                >
                  BUY NOW
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
