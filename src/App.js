import "./App.css";
import { Navbar } from "./Navbar";
import { Products } from "./products";
import backgroundImage from "./images/cover2.gif";
import Counter from "react-number-increment";

function App() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center min-h-screen text-white overflow-hidden max-w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Navbar />
        <div className="relative flex flex-col items-center justify-center h-screen space-y-2 text-white">
          <div className="text-2xl font-bold ">Discount up to 20%</div>
          <div className="text-4xl font-semibold mx-auto">
            Buy Fresh and Organic Grocery Food
          </div>
          <div className="text-sm">“There is no love sincerer than the love of food.” </div>
          <div>
            <button
              type="button"
              className="rounded-3xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Shop Now
            </button>
          </div>
          <div className="flex space-x-16 pt-6 ">
          <div>
            <Counter
              start={0} // starting
              end={35000} // ends
              speed={0} // 100ms
              increment // in case if you want to decrement
              style={{ fontSize: "50px", fontWeight: 500 }} // add custom style
              threshold={1} // viewport 1=100%,
              child="+" // add childs ie + , - , *
              offset={100} // increments by 5
              seperate="," // seperates number in comma
            />
            Users
            
            </div>
            <div>
            <Counter
              start={0} // starting
              end={18000} // ends
              speed={0} // 100ms
              increment // in case if you want to decrement
              style={{ fontSize: "50px", fontWeight: 500 }} // add custom style
              threshold={1} // viewport 1=100%,
              child="+" // add childs ie + , - , *
              offset={100} // increments by 5
              seperate="," // seperates number in comma
            />
            Products
            </div>
          </div>
        </div>
      </div>

      <Products></Products>
    </div>
  );
}

export default App;
