import React from "react";

const Thanks = ({setShow, setCart, setValues, setOrders, setPayment, setBorder}) => {

    const resetAll = () => {
        setShow(0);
        setCart([]);
        setOrders(1);
        setPayment(1);
        setBorder(10);
        setValues({
            user: "",
            card: "",
            date: "",
            cvv: "",
            table: "",
        })
    }

    return (
        <div className="bg-[--drop] fixed z-40 top-0 left-0 w-full h-full flex justify-end ">
            <div className="bg-[--bg-dark] w-[410px] h-[100vh] rounded-l-2xl px-6 pb-6 flex flex-col items-center justify-center ">
                <h1 className="text-[32px] font-semibold mb-4  " > Thank you for your order </h1>
                <form>
                <button type="submit" onClick={resetAll} className="border-[2px] rounded-lg border-[--primary] py-2 px-4 text-[18px] text-[--primary] hover:opacity-75 " >Go Back Main Page</button>
                </form>
            </div>
        </div>
    );
};

export default Thanks;
