import Logo from "../../public/assets/logo.svg";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { LuBadgePercent } from "react-icons/lu";
import { HiOutlineChartPie } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FiBell } from "react-icons/fi";

const Sidebar = ({active, setActive}) => {

  

    return (
        <nav
            className={`pl-[12px] min-h-[100vh] max-w-[104px] w-full bg-[--bg-dark]`}
        >
            <div className="sticky top-0 flex flex-col justify-between max-h-[100vh] h-full pb-6">
                <div>
                    <div className="pt-[24px] pr-[24px] pl-[12px] mb-[26px] ">
                        <div onClick={()=> setActive(0)} className=" p-[11px] rounded-xl bg-[#EB966A] bg-opacity-25 ">
                            <img src={Logo} alt="logo" />
                        </div>
                    </div>
                    <div className="text-center">
                        <ul className="flex flex-col gap-[20px] w-full" >
                            <NavLink to={"/"} onClick={()=> setActive(1)} className={`py-[10px] pl-3 pr-[24px] ${active == 1 ? "bg-[--bg-light]" : null} rounded-l-xl `} >
                                <li className={`${active == 1 ? "bg-[--primary] [box-shadow:0px_8px_24px_0px_rgba(234,_124,_105,_0.32)]" : null} p-4 rounded-lg grid place-content-center  `} >
                                    <GrHomeRounded className={` text-[20px] ${active !== 1 ? "text-[--primary] " : null} `} ></GrHomeRounded>
                                </li>
                            </NavLink>

                            <NavLink to={"/percent"} onClick={()=> setActive(2)} className={`py-[10px] pl-3 pr-[24px] ${active == 2 ? "bg-[--bg-light]" : null} rounded-l-xl `} >
                                <li className={`  p-4 rounded-lg grid place-content-center ${active == 2 ? "bg-[--primary] [box-shadow:0px_8px_24px_0px_rgba(234,_124,_105,_0.32)]" : null} `}>
                                    <LuBadgePercent className={` text-[22px] ${active !== 2 ? "text-[--primary] " : null} `} ></LuBadgePercent>
                                </li>
                            </NavLink>

                            <NavLink to={"/chart"} onClick={()=> setActive(3)} className={`py-[10px] pl-3 pr-[24px] ${active == 3 ? "bg-[--bg-light]" : null} rounded-l-xl `} >
                                <li className={`  p-4 rounded-lg grid place-content-center ${active == 3 ? "bg-[--primary] [box-shadow:0px_8px_24px_0px_rgba(234,_124,_105,_0.32)]" : null} `}>
                                    <HiOutlineChartPie className={` text-[24px] ${active !== 3 ? "text-[--primary] " : null} `} ></HiOutlineChartPie>
                                </li>
                            </NavLink>

                            <NavLink to={"/message"} onClick={()=> setActive(4)} className={`py-[10px] pl-3 pr-[24px] ${active == 4 ? "bg-[--bg-light]" : null} rounded-l-xl `} >
                                <li className={`  p-4 rounded-lg grid place-content-center ${active == 4 ? "bg-[--primary] [box-shadow:0px_8px_24px_0px_rgba(234,_124,_105,_0.32)]" : null} `}>
                                    <HiOutlineEnvelope className={` text-[22px] ${active !== 4 ? "text-[--primary] " : null} `} ></HiOutlineEnvelope>
                                </li>
                            </NavLink>

                            <NavLink to={"/notification"} onClick={()=> setActive(5)} className={`py-[10px] pl-3 pr-[24px] ${active == 5 ? "bg-[--bg-light]" : null} rounded-l-xl `} >
                                <li className={`  p-4 rounded-lg grid place-content-center ${active == 5 ? "bg-[--primary] [box-shadow:0px_8px_24px_0px_rgba(234,_124,_105,_0.32)]" : null} `}>
                                    <FiBell className={` text-[22px] ${active !== 5 ? "text-[--primary] " : null} `} ></FiBell>
                                </li>
                            </NavLink>

                            <NavLink to={"/settings"} onClick={()=> setActive(6)} className={`py-[10px] pl-3 pr-[24px] ${active == 6 ? "bg-[--bg-light]" : null} rounded-l-xl `} >
                                <li className={`  p-4 rounded-lg grid place-content-center ${active == 6 ? "bg-[--primary] [box-shadow:0px_8px_24px_0px_rgba(234,_124,_105,_0.32)]" : null} `}>
                                    <IoSettingsOutline className={` text-[22px] ${active !== 6 ? "text-[--primary] " : null} `} ></IoSettingsOutline>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>

                <div className="flex w-full" >
                    <NavLink to={"/profile"} onClick={()=> setActive(7)} className={`py-[10px] pl-3 pr-[24px] ${active == 7 ? "bg-[--bg-light]" : null} rounded-l-xl w-full `} >
                        <p className={`  p-4 rounded-lg grid place-content-center ${active == 7 ? "bg-[--primary] [box-shadow:0px_8px_24px_0px_rgba(234,_124,_105,_0.32)]" : null} `}>
                            <TbLogout className={` text-[24px] ${active !== 7 ? "text-[--primary] " : null} `} ></TbLogout>
                        </p>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
