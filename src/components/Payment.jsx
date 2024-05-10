import React, { useState } from "react";
import { TiCreditCard } from "react-icons/ti";
import { TbBrandPaypal } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

const Payment = ({
    setShow,
    handleSelectChange,
    handleInputChange,
    userTable,
    userCvv,
    userDate,
    userCard,
    userName,
    errorMessages,
    handleSubmit,
    payment,
    setPayment
}) => {

    const handleClick = () => {
        if (handleSubmit() ) {
            setShow(2)
        }
    };

    

    return (
        <div className="bg-[--drop] fixed z-40 top-0 left-0 w-full h-full flex justify-end ">
            <div className="bg-[--bg-dark] w-[410px] h-[100vh] rounded-l-2xl px-6 pb-6 flex flex-col justify-between ">
                <div>
                    <div className="mt-[64px] flex flex-col gap-2 pb-6 border-b boder-[#393C49] ">
                        <span className=" leading-[140%] text-[28px] font-semibold  ">
                            Payment
                        </span>
                        <span className=" text-[#ABBBC2]  leading-[140%] text-4 font-medium ">
                            3 payment method available
                        </span>
                    </div>

                    <p className=" leading-[140%] text-[20px] font-semibold mt-6 mb-4">
                        Payment Method
                    </p>

                    <div className="flex justify-between gap-2 mb-4">
                        <div
                        onClick={()=> setPayment(1)}
                            className={`pt-[15px] px-4 pb-[10px] cursor-pointer items-center gap-1 grow flex flex-col justify-center border rounded-xl relative ${payment == 1 ? "border-white text-white" : "border-[#393C49] text-[#ABBBC2] "} `}
                        >
                            <TiCreditCard className="text-[33px] "></TiCreditCard>
                            <p className=" text-[14px] font-medium leading-[130%] ">
                                Credit Card
                            </p>
                        { payment === 1 ?     <span
                                className={` absolute top-[6px] right-[6px] rounded-full bg-[--primary] text-black w-4 h-4 grid place-content-center`}
                            >
                                <FaCheck className="text-[10px] font-light "></FaCheck>
                            </span> : null }
                        </div>

                        <div
                        onClick={()=> setPayment(2)}
                            className={`pt-[15px] px-4 pb-[10px] cursor-pointer items-center gap-1 grow flex flex-col justify-center border rounded-xl relative ${payment == 2 ? "border-white text-white" : "border-[#393C49] text-[#ABBBC2] "} `}
                        >
                            <TbBrandPaypal className="text-[28px] "></TbBrandPaypal>
                            <p className=" text-[14px] font-medium leading-[130%] ">
                                Credit Card
                            </p>
                            { payment === 2 ?     <span
                                className={` absolute top-[6px] right-[6px] rounded-full bg-[--primary] text-black w-4 h-4 grid place-content-center`}
                            >
                                <FaCheck className="text-[10px] font-light "></FaCheck>
                            </span> : null }
                        </div>

                        <div
                        onClick={()=> setPayment(3)}
                            className={`pt-[15px] px-4 pb-[10px] cursor-pointer items-center gap-1 grow flex flex-col justify-center border rounded-xl relative ${payment == 3 ? "border-white text-white" : "border-[#393C49] text-[#ABBBC2] "} `}
                        >
                            <CiWallet className="text-[30px] "></CiWallet>
                            <p className=" text-[14px] font-medium leading-[130%] ">
                                Credit Card
                            </p>
                            { payment === 3 ?     <span
                                className={` absolute top-[6px] right-[6px] rounded-full bg-[--primary] text-black w-4 h-4 grid place-content-center`}
                            >
                                <FaCheck className="text-[10px] font-light "></FaCheck>
                            </span> : null }
                        </div>

                    </div>

                    <form className="border-b mb-4 ">
                        <div className="flex flex-col gap-2 w-full mb-4 relative ">
                        <span className=" text-[12px] text-red-600 absolute right-0 top-1" > {errorMessages.user} </span>
                            <label className=" text-[14px] font-medium leading-[130%] ">
                                Cardholder Name
                            </label>
                            <input
                                className=" text-[14px] rounded-lg p-[14px] outline-none bg-[#393C49] border border-[#393C49] "
                                type="text"
                                placeholder="Name.."
                                name="user"
                                value={userName}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full mb-4 relative ">
                        <span className=" text-[12px] text-red-600 absolute right-0 top-1" > {errorMessages.card} </span>
                            <label className=" text-[14px] font-medium leading-[130%] ">
                                Card Number
                            </label>
                            <input
                                className=" text-[14px] rounded-lg p-[14px] outline-none bg-[#393C49] border border-[#393C49] "
                                type="number"
                                placeholder="0000 0000 0000 0000"
                                name="card"
                                value={userCard}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex items-center gap-[13px] ">
                            <div className="flex flex-col gap-2 w-full mb-4 relative ">
                            <span className=" text-[12px] text-red-600 absolute right-0 top-1" > {errorMessages.date} </span>
                                <label className=" text-[14px] font-medium leading-[130%] ">
                                    Expiration Date
                                </label>
                                <input
                                    className=" text-[14px] rounded-lg p-[14px] outline-none bg-[#393C49] border border-[#393C49] "
                                    type="date"
                                    placeholder="02/2022"
                                    name="date"
                                    value={userDate}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2 w-full mb-4  relative">
                            <span className=" text-[12px] text-red-600 absolute right-0 top-1" > {errorMessages.cvv} </span>
                                <label className=" text-[14px] font-medium leading-[130%] ">
                                    CVV
                                </label>
                                <input
                                    className=" text-[14px] rounded-lg p-[14px] outline-none text-[#E0E6E9] bg-[#393C49] border border-[#393C49] "
                                    type="password"
                                    placeholder="***"
                                    name="cvv"
                                    value={userCvv}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </form>

                    <div className="flex items-center gap-[13px] ">
                        <div className="flex flex-col gap-2 w-full mb-4 ">
                            <p className=" text-[14px] font-medium leading-[130%] ">
                                Order Type
                            </p>
                            <select
                                onChange={handleSelectChange}
                                className="bg-[--bg-dark] border-[2px] border-[#393C49] outline-none font-semibold px-[14px] py-[15px] rounded-lg "
                            >
                                <option
                                    className={`text-[14px] font-medium `}
                                    value="DineIn"
                                >
                                    Dine In
                                </option>
                                <option
                                    className={`text-[14px] font-medium `}
                                    value="ToGo"
                                >
                                    To Go
                                </option>
                                <option
                                    className={`text-[14px] font-medium `}
                                    value="Delivery"
                                >
                                    Delivery
                                </option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 w-full mb-4 relative ">
                            <span className=" text-[12px] text-red-600 absolute right-0 top-1" > {errorMessages.table} </span>
                            <label className=" text-[14px] font-medium leading-[130%] ">
                                Table no.
                            </label>
                            <input
                                className=" text-[14px] rounded-lg p-[14px] outline-none bg-[#393C49] border border-[#393C49] "
                                type="number"
                                name="table"
                                value={userTable}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => setShow(0)}
                        className="border grow w-[50%] text-[14px] font-semibold border-[--primary] text-[--primary]  rounded-lg "
                    >
                        Cencel
                    </button>
                    <button onClick={handleClick} className="border grow w-[50%] text-[14px] font-semibold py-[14px] rounded-lg bg-[--primary] border-[--primary] ">
                        Confirm Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
