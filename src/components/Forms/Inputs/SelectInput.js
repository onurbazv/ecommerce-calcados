import React from 'react'

const SelectInput = ({options, value, handleChange, name, required, extraStyles}) => {
    return (
        <select
            required={required}
            name={name}
            className={`border-stone-600 border p-2 rounded-lg mt-3 w-full ${extraStyles ? extraStyles : ""}`}
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