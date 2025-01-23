import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPrice, ShortTitel } from '../feachers/shortTitele';
import { getItemsData } from "../../components/redux/itemSlice";
import Title from "../feachers/Titel"
import { addToCart } from '../redux/cartSlice';
const Items = () => {
    const dispatch = useDispatch();

    const { items, status, isError } = useSelector((state) => state.items);
    console.log(items, status, isError);
    useEffect(() => {
      dispatch(getItemsData("https://fakestoreapi.com/products"));
    }, [dispatch]);
  return (
  <div className='w-full bg-white p-4'>
    <Title name={"Products"} tag="h3" />
   <div className="items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-4">
            {items && items.length > 0 ? (
              items.map((list) => (
                <div
                  key={list.id}
                  className="w-full p-2 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4"  title={list.title}>
                    <img
                      src={list.image}
                      alt={list.title}
                      className="w-[150px] h-[150px] object-contain"
                    />
                  </div>
                  <p className="text-[14px] font-semibold text-center text-gray-800 cursor-pointer hover:text-green-700">
                  {ShortTitel(list.title)}
                  </p>
                  <p className="text-center text-[13px] font-bold text-gray-600 mt-2 mb-3">
                    {setPrice(list.price)}
                  </p>
                  <button onClick={(e)=>dispatch(addToCart(list))} className='px-4 py-1 bg-green-500 text-white rounded-sm'>Add</button>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-xl text-gray-500">
                No items available
              </p>
            )}
          </div>
  </div>
  )
}

export default Items