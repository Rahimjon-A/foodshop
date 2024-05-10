import React from "react";
import Carts from "./Carts";

const Content = ({
    handleClick,
    handleChange,
    dataSearch,
    cart
}) => {
    return (
        <div className="grid grid-cols-3 gap-[28px] gap-y-[78px] mt-[58px] ">
            {dataSearch.map((item) => (
                <div key={item.id}>
                    <Carts
                        {...item}
                        item={item}
                        handleChange={handleChange}
                        handleClick={handleClick}
                        cart={cart}
                    />
                </div>
            ))}
        </div>
    );
};

export default Content;
