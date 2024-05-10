import React from "react";
import list from "../api/data.js";

const Filter = ({ border, setBorder, handleSelectChange, menuItems, filterItems, setDataSearch }) => {
    
   

    return (
        <div className="pb-[10px]">

            
            <ul className="flex items-start h-[38px] gap-[32px]  bg-[--bg-light] border-b-[2px] border-[--border] ">
                <li onClick={() => setDataSearch(list)} className=" ">
                    <span
                        onClick={() => setBorder(10)}
                        className={`text-[16px] font-semibold pb-[13px] transition-all cursor-pointer ${
                            border === 10
                                ? "border-b-[5px] border-[--primary] text-[--primary]"
                                : null
                        } `}
                    >
                        Hot Dishes
                    </span>
                </li>

              {
                menuItems.map((val, index) => (
                    <li onClick={() => filterItems(val)} className=" ">
                    <span
                        onClick={() => setBorder(index)}
                        className={`text-[16px] font-semibold pb-[13px] transition-all cursor-pointer ${
                            border === index
                                ? "border-b-[5px] border-[--primary] text-[--primary]"
                                : null
                        }  `}
                    >
                        {val}
                    </span>
                </li>
                ))
              }

            </ul>

            <div className={`flex justify-between items-center mt-[24px] `} >
                <h3 className="text-[20px] font-semibold  " >Choose Dishes</h3>
                <select onChange={handleSelectChange} className="bg-[--bg-dark] outline-none font-semibold px-[14px] py-[15px] rounded-lg " >
                    <option className={`text-[16px] font-medium `}  value="DineIn">Dine In</option>
                    <option className={`text-[16px] font-medium `}  value="ToGo">To Go</option>
                    <option className={`text-[16px] font-medium `}  value="Delivery">Delivery</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
