import React from "react";
import { FaEllipsisV } from "react-icons/fa";
function StockManagement() {
  return (
    <>
      <section className="flex justify-center items-center mt-4 mb-4">
        <div className="p-8 bg-white rounded-lg shadow-md w-[98%] h-full">
          <div className="relative w-full flex justify-between mb-4">
            <div className="space-x-2">
              <input
                type="text"
                placeholder="Search product or item"
                className="border border-gray-300 rounded-md px-2 py-1 w-100"
              />
              <button className="py-2 px-2 text-center bg-blue-400 rounded-md text-white hover:bg-blue-500 transition duration-200 cursor-pointer">
                Search
              </button>
            </div>
            <FaEllipsisV
              onClick={() => {
                console.log("Hellos");
              }}
              className="cursor-pointer"
              size={20}
            />
            <div className="absolute flex flex-col items-start bg-white rounded-md shadow-md top-0 right-6 p-4">
              <button>Add New Stock</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
          <table className="w-full text-left">
            <tr className="text-xl font-bold text-[#CF4B00] border-b mb-4">
              <th>ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Supplier</th>
              <th>Reorder Level</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Dog Food</td>
              <td>50</td>
              <td>$20.00</td>
              <td>Pet Supplies Co.</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Cat Toy</td>
              <td>100</td>
              <td>$5.00</td>
              <td>Feline Fun Inc.</td>
              <td>20</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
}

export default StockManagement;
