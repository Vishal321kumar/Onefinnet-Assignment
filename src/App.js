import "./App.css";
import { Navbar } from "./Navbar";
import { Products } from "./products";
import backgroundImage from "./images/cover2.gif";
import Counter from "react-number-increment";

function App() {
  return (
    


    <div>
      <div
        className="relative bg-cover bg-center min-h-screen text-white overflow-hidden w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Navbar />

        <div className="relative flex flex-col items-center justify-center h-screen space-y-2 text-white px-4">
          <div className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">
            Discount up to 20%
          </div>
          <div className="text-4xl font-semibold text-center mx-auto md:text-5xl lg:text-6xl">
            Buy Fresh and Organic Grocery Food
          </div>
          <div className="text-sm text-center md:text-base lg:text-lg">
            “There is no love sincerer than the love of food.”
          </div>
          <div>
            <button
              type="button"
              className="rounded-3xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Shop Now
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4 pt-6 md:flex-row md:space-x-16 md:space-y-0">
            <div className="flex flex-col items-center">
              <Counter
                start={0}
                end={35000}
                speed={0}
                increment
                style={{ fontSize: '50px', fontWeight: 500 }}
                threshold={1}
                child="+"
                offset={100}
                seperate=","
              />
              <div className="text-center text-lg font-medium">Users</div>
            </div>
            <div className="flex flex-col items-center">
              <Counter
                start={0}
                end={18000}
                speed={0}
                increment
                style={{ fontSize: '50px', fontWeight: 500 }}
                threshold={1}
                child="+"
                offset={100}
                seperate=","
              />
              <div className="text-center text-lg font-medium">Products</div>
            </div>
          </div>
        </div>
      </div>

      <Products />
    </div>
  );
}

export default App;
