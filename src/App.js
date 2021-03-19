import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
//import Search from "./components/Search";


const options =  [
    {
        label:"the color red",
        value:"red"
    },
    {
        label:"the color Green",
        value:"green"
    },
    {
        label:"the color purple",
        value:"purpple"
    },
];
const App = ()=>{
 const [selected , setSelected] = useState(options[0]);

    return ( 
        <div>
        <Dropdown 
        options={options}
    selected={selected}
    onChangeSelected={setSelected}
        />
    </div>
    )
}

 export default App;