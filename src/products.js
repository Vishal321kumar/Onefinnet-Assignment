import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import LoaderSimple from "./Loader";

const items = [
  {
    name: "Italian-Style Chicken Meatball ",
    price: "$8.45",
    description:
      "Lasagna - a layered pasta with meat sauce, cheese & vegetables ",
    image:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    name: "Seafood Stuffed Alaskan Salmon",
    price: "$8.45",
    description:
      "Osso Buco - a slow-cooked veal shank served with a flavorful sauce",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    name: "Seafood Stuffed Alaskan Salmon",
    price: "$8.45",
    description:
      "Osso Buco - a slow-cooked veal shank served with a flavorful sauce",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    name: "Seafood Stuffed Alaskan Salmon",
    price: "$8.45",
    description:
      "Osso Buco - a slow-cooked veal shank served with a flavorful sauce",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    name: "Seafood Stuffed Alaskan Salmon",
    price: "$8.45",
    description:
      "Osso Buco - a slow-cooked veal shank served with a flavorful sauce",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
];

export function Products() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [category,setCategory]= useState('Seafood');
  const [dishes, setDishes] = useState([]);
  const [load, setLoad] = useState(true);
  const [errormeal, setErrormeal] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data.meals);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  



  

  useEffect(() => {
    const fetchDishes = async () => {
      setLoad(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDishes(data.meals);
      } catch (errormeal) {
        setErrormeal(errormeal);
      } finally {
        setLoad(false);
      }
    };

    fetchDishes();
  }, [category]);



 

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (errormeal) {
    return <div>Error: {errormeal.message}</div>;
  }


  
  




  return (
    <>
      <div className="flex flex-col items-center space-y-4 max-w-full">
        <div className="text-center">
          <h2 className="text-lg mt-6 font-semibold">Shop By Category</h2>
          <h1 className="mt-1 text-xl font-bold text-gray-700">
            Top Category of Organic Food
          </h1>
        </div>

        { (!loading)?
        <div>
        

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-2 justify-center">
            {categories.map((cat, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCategory(cat.strCategory)}
                className={`rounded-3xl ${
                  category === cat.strCategory
                    ? 'bg-olive hover:bg-olive/100'
                    : 'bg-black'
                } px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
              >
                {cat.strCategory}
              </button>
            ))}
          </div>

        </div> 
        :<LoaderSimple/>   }

        

      </div>

      { (!load)?
      <section className="mx-auto w-full max-w-6xl px-4 py-4">
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden flex border border-gray-200 md:rounded-lg">
              {/* Two columns for the tables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Left side table */}
                <div className="col-span-1">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {dishes
                        .slice(0, Math.ceil(dishes.length / 2))
                        .map((dish) => (
                          <tr key={dish.idMeal}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="h-10 w-10 flex-shrink-0">
                                    <img
                                      className="h-10 w-10 rounded-full object-cover"
                                      src={dish.strMealThumb}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-lg font-medium text-gray-900">
                                      {dish.strMeal}
                                    </div>
                                    <div className="text-xs mt-2 text-gray-700">
                                      {dish.description}"Osso Buco - a
                                      slow-cooked veal shank served with a
                                      flavorful sauce"
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-lg text-gray-900">
                                    {dish.price}$8.45
                                  </div>
                                  <div className="text-sm font-medium mt-2 text-gray-700">
                                    <a href="#" className="text-gray-700">
                                      Shop Now &#8594;
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Right side table */}
                <div className="col-span-1">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {dishes
                        .slice(Math.ceil(dishes.length / 2))
                        .map((dish) => (
                          <tr key={dish.idMeal}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="h-10 w-10 flex-shrink-0">
                                    <img
                                      className="h-10 w-10 rounded-full object-cover"
                                      src={dish.strMealThumb}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-lg font-medium text-gray-900">
                                      {dish.strMeal}
                                    </div>
                                    <div className="text-xs mt-2 text-gray-700">
                                      {dish.description}"Osso Buco - a
                                      slow-cooked veal shank served with a
                                      flavorful sauce"
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-lg text-gray-900">
                                    {dish.price}$8.45
                                  </div>
                                  <div className="text-sm font-medium mt-2 text-gray-700">
                                    <a href="#" className="text-gray-700">
                                      Shop Now &#8594;
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    :<LoaderSimple/>   }
                      
    </>
  );
}
