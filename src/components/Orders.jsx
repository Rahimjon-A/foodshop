import React, { useEffect, useState } from "react";
import { LuTrash } from "react-icons/lu";

const Orders = ({
    orders,
    setOrders,
    cart,
    setCart,
    setShow,
    handleChange,
    handleRemove
}) => {
    const [price, setPrice] = useState(0);
  
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        ans = parseFloat(ans.toFixed(2));
        setPrice(ans);
    };


    useEffect(() => {
        handlePrice();
    });

    

   
    

    return (
        <nav
            className={`px-6 pt-6 rounded-l-2xl min-h-[100vh] max-w-[410px] w-full bg-[--bg-dark]`}
        >
            <div className={`sticky top-6 flex flex-col max-h-[95vh] h-full`}>
                <div>
                    <p className="text-[20px] font-semibold mb-[24px] ">
                        Orders #34562
                    </p>
                    <div className="flex gap-2 items-center transition-all mb-[24px]">
                        <button
                            onClick={() => setOrders(1)}
                            className={`rounded-lg border text-[14px] font-semibold py-[7px] px-[12px]  border-[--border] transition-all ${
                                orders === 1
                                    ? "text-white bg-[--primary] border-[--primary]"
                                    : "text-[--primary] border-[--border] "
                            }`}
                        >
                            Dine In
                        </button>
                        <button
                            onClick={() => setOrders(2)}
                            className={`rounded-lg border text-[14px] font-semibold py-[7px] px-[12px]  border-[--border] transition-all ${
                                orders === 2
                                    ? "text-white bg-[--primary] border-[--primary]"
                                    : "text-[--primary] border-[--border] "
                            }`}
                        >
                            To Go
                        </button>
                        <button
                            onClick={() => setOrders(3)}
                            className={`rounded-lg border text-[14px] font-semibold py-[7px] px-[12px]  border-[--border] transition-all ${
                                orders === 3
                                    ? "text-white bg-[--primary] border-[--primary]"
                                    : "text-[--primary] border-[--border] "
                            }`}
                        >
                            Delivery
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center pb-6 border-b border-[--border] ">
                    <div className="flex items-center">
                        <span className="text-4 font-semibold ">Item</span>
                    </div>
                    <div className="flex items-center gap-[43px]">
                        <span className="text-4 font-semibold ">Qty</span>
                        <span className="text-4 font-semibold ">Price</span>
                    </div>
                </div>

                <div className="border-b border-[--border] mt-[24px] max-h-[70%] mb-6 h-full overflow-scroll">
                    {/* map carts */}

                    {cart.map((item) => {

                            const itemTotal = (item.amount * item.price).toFixed(2);   
                        return (
                            <div key={item.id} className="mb-[20px] ">
                            <div className="flex justify-between items-center mb-[10px] ">
                                <div className="flex items-center max-w-[200px] gap-[6px] ">
                                    <img
                                        className=" w-[45px] h-[42px]  "
                                        src={item.image}
                                        alt="image"
                                    />
                                    <span className="flex flex-col  overflow-hidden">
                                        <span className="">{item.title}</span>
                                        <span className="text-[14px] text-[#ABBBC2] font-medium ">
                                            $ {item.price}
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center">

                                    <span className="bg-[--bg-light] py-3 px-4 rounded-lg mr-[21px] border border-white font-semibold">
                                        {item.amount}
                                    </span>
                                    <span className="font-medium">
                                        $ {itemTotal}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <textarea className=" outline-none bg-[--bg-light] py-[14px] pl-[14px] border ml-[2px] w-[297px] h-[48px] rounded-lg resize-none "></textarea>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="w-[48px] cursor-pointer h-[48px] flex justify-center items-center border-[2px] border-[--bg-smth] rounded-lg "
                                >
                                    <LuTrash className="text-[20px] text-[--bg-smth] "></LuTrash>
                                </button>
                            </div>
                        </div>
                        )
                    })}

                    {/* map carts */}
                </div>

                <div className="w-full">
                    <div className="flex justify-between items-center mb-[18px]">
                        <span className="text-[--grey] text-[16px] ">
                            Discount
                        </span>
                        <span className="text-[18px] font-semibold ">
                            $ {0.00}
                        </span>
                    </div>
                    <div className="flex justify-between icon-link mb-[38px] ">
                        <span className="text-[--grey] text-[16px] ">
                            Sub Total
                        </span>
                        <span className="text-[18px] font-semibold ">
                            $ {price}
                        </span>
                    </div>
                    <button
                        onClick={() => setShow(1)}
                        className="w-full bg-[--primary] text-[16px] font-semibold py-[14px] rounded-lg "
                    >
                        Continue to Payment
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Orders;
