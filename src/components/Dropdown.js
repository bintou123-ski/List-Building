import React from "react";


const Dropdown = ({options, selected,  onChangeSelected})=>{
    const RenderedOptions = options.map((option)=>{
        return (
            <div 
            key={option.value}
            className="item" 
            onClick={()=>onChangeSelected(option)}
            >{options.label}</div>
            
        )
    })
    return (
        <div className="ui form">
                <div className="field">
                <label className="label">SELECT A COLOR</label>
                <div className="ui selection dropdown visible active"> 
                    <i className="dropdown icon"></i>
                    <div  className="text">{selected.label}</div>
                    <div className="menu visible transition">{RenderedOptions}</div>
                    </div>
                </div>
            </div>
    )
}
export default Dropdown;