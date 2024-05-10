import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Example = () => {

    const [active, setActive] = useState(0)

    return (
        <div className="flex" >
            <Sidebar active={active} setActive={setActive} />

            <p className="h-[300vh] text-[50px] font-bold " >
                Rest of Code
            </p>

        </div>
    );
  
}

export default Example