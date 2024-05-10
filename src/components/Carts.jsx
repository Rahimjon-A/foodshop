import React, { useEffect, useState } from "react";

const Carts = ({ item, amount, price, title, qty, image, handleClick, handleChange, cart }) => {
    const [isFirstClick, setIsFirstClick] = useState(true);
    const [availableQty, setAvailableQty] = useState(qty);

    useEffect(() => {
        setIsFirstClick(true);
    }, [cart.length]);

    useEffect(() => {
        setAvailableQty(qty - amount);
    }, [amount]);

    const handleOnClick = () => {
        if (isFirstClick) {
            handleClick(item);
            setIsFirstClick(false);
        } else {
            handleChange(item, +1);
        }
    };

    return (
        <div onClick={handleOnClick} className="h-[296px] hover:scale-[0.98] transition-all cursor-pointer bg-[--bg-dark] flex flex-col justify-end pt-[90px] px-6 pb-6 rounded-2xl text-center relative  ">
            <img
                className="w-[165px] h-[155px] inline-block absolute top-[-50px] mx-auto inset-0"
                src={image}
                alt="image"
            />

            <p className="mt-[14px] px-7 text-[18px] font-medium mb-4 ">
                {title}
            </p>

            <p className="text-[18px] mb-2">$ {price} </p>

            <span className="text-[#ABBBC2] text-[18px] mb-2 ">
                {availableQty} <span className="ml-2"> Bowls available </span>
            </span>
        </div>
    );
};

export default Carts;
