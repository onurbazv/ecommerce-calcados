import React from 'react'

const SelectInput = ({options, value, handleChange, name}) => {
    return (
        <select
            name={name}
            className="border-stone-600 border p-2 rounded-lg w-fit"
            value={value} 
            onChange={handleChange}>
            {options.map((option, index) => (
                index === 0 ? 
                <option key={index} disabled value="">{option}</option> :
                <option key={index}>{option}</option>
            ))}
        </select>
    )
}

export default SelectInput