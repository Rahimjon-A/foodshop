import React from "react";
import { IoSearch } from "react-icons/io5";

const Header = ({filter, searchText }) => {
    return (
        <div className="flex justify-between pt-[33px] mb-6 ">
            <div>
                <h1 className="text-[28px] font-semibold mb-1 ">
                    Jaegar Resto
                </h1>
                <p className="text-[#E0E6E9] text-[16px] ">
                    Tuesday, 2 Feb 2021
                </p>
            </div>
            <div>
                <label className="flex gap-2 p-4 items-center rounded-lg border-[2px] border-[--border] bg-[#2d303e] ">
                    <IoSearch className="text-[20px] text-white font-bold "></IoSearch>
                    <input
                        className="text-[--grey] bg-[#2d303e] outline-none"
                        placeholder="Search for food, coffe, etc.."
                        type="text"
                        value={filter}
                        onChange={searchText}
                    />
                </label>
            </div>
        </div>
    );
};

export default Header;
