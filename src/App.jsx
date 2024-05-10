import React, { useEffect, useState } from "react";
import list from "./api/data.js";
import Sidebar from "./components/Sidebar";
import Orders from "./components/Orders";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Content from "./components/Content";
import Payment from "./components/Payment";
import Thanks from "./components/Thanks";

const App = () => {
    const [active, setActive] = useState(1);
    const [orders, setOrders] = useState(1);
    const [border, setBorder] = useState(10);

    const handleSelectChange = (event) => {
        const option = event.target.value;
        switch (option) {
            case "DineIn":
                setOrders(1);
                break;
            case "ToGo":
                setOrders(2);
                break;
            case "Delivery":
                setOrders(3);
                break;
            default:
                break;
        }
    };

    //  for  carts
    const [show, setShow] = useState(0);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const handleClick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            if (item.id === product.id) isPresent = true;
        });
        if (isPresent) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 3000);
            return;
        }
        setCart([...cart, {...item, amount: 1}]); 
        console.log(item.amount, "from click");
    };

    const handleChange = (item, d) => {
        const newCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, amount: cartItem.amount + d > 0 ? cartItem.amount + d : 1 };
            } else {

                return cartItem;
            }
        });
        setCart(newCart);
        console.log(item.amount, "from change");
    };
    


    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    };

    // for payment

    const [values, setValues] = useState({
        user: "",
        card: "",
        date: "",
        cvv: "",
        table: "",
    });

    const [errorMessages, setErrorMessages] = useState({
        user: "",
        card: "",
        date: "",
        cvv: "",
        table: "",
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        let isValid = true;
        let errors = {
            user: "",
            card: "",
            date: "",
            cvv: "",
            table: "",
        };

        if (!values.user.trim()) {
            errors.user = "Please enter your name";
            isValid = false;
        }

        if (!/^\d{16}$/.test(values.card)) {
            errors.card = "Please enter a valid card number | 16 digits";
            isValid = false;
        }

        if (!values.date.trim()) {
            errors.date = "Please enter a date";
            isValid = false;
        }

        if (!/^\d{3}$/.test(values.cvv)) {
            errors.cvv = "Please enter only 3 digits";
            isValid = false;
        }

        if (!/^\d{3}$/.test(values.table)) {
            errors.table = "Please enter table No. 3 digits";
            isValid = false;
        }

        setErrorMessages(errors);
        return isValid;
    };

    // payment
    const [payment, setPayment] = useState(1);

    //  search
    const [dataSearch, setDataSearch] = useState(list);
    const [filter, setFilter] = useState("");
    
    const searchText = (event) => {
        setFilter(event.target.value);
    };
    
    useEffect(() => {
        setDataSearch(list.filter((item) => {
            return Object.keys(item).some((key) =>
                item[key]
                    .toString()
                    .toLowerCase()
                    .includes(filter.toString().toLowerCase())
            );
        }));
    }, [filter, list]);
    
// fiter
const menuItems = [...new Set(list.map(val => val.category))]

const filterItems = (category) => {
    const newItems =  list.filter((newval) => newval.category === category)
    setDataSearch(newItems)
}
    

    return (
        <div className="flex justify-between relative">
            {warning && (
                <div className="h-[40px] z-10 w-[380px] fixed bg-[--bg-smth] rounded-l-lg font-semibold p-1 text-[16px] right-0 top-[15%] transition-all ">
                    Item has been added to your cart. Want more ?
                </div>
            )}

            <Sidebar active={active} setActive={setActive} />

            <div className="pl-[10px] pr-[38px] w-full mb-[30px] ">
                <div className=" sticky top-0 bg-[--bg-light]  z-10  ">
                    <Header searchText={searchText} filter={filter} />
                    <Filter
                        border={border}
                        setBorder={setBorder}
                        handleSelectChange={handleSelectChange}
                        menuItems={menuItems}
                        filterItems={filterItems}
                        setDataSearch={setDataSearch}
                    />
                </div>

                <Content
                    handleClick={handleClick}
                    handleChange={handleChange}
                    dataSearch={dataSearch}
                    cart={cart}

                />
            </div>

            <Orders
                orders={orders}
                setOrders={setOrders}
                size={cart.length}
                cart={cart}
                setCart={setCart}
                setShow={setShow}
                handleChange={handleChange}
                handleRemove={handleRemove}
            />

            {show === 1 ? (
                <Payment
                    setShow={setShow}
                    handleSelectChange={handleSelectChange}
                    userName={values.user}
                    userCard={values.card}
                    userDate={values.date}
                    userCvv={values.cvv}
                    userTable={values.table}
                    handleInputChange={handleInputChange}
                    errorMessages={errorMessages}
                    handleSubmit={handleSubmit}
                    payment={payment}
                    setPayment={setPayment}
                />
            ) : null}

            {show === 2 ? (
                <Thanks
                    setCart={setCart}
                    setShow={setShow}
                    setValues={setValues}
                    setOrders={setOrders}
                    setPayment={setPayment}
                    setBorder={setBorder}
                />
            ) : null}
        </div>
    );
};

export default App;
