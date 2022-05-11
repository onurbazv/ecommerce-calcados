import React from 'react'

const DefaultInput = ({name, handleChange, value, labelText, type, required, ...props}) => {
    return (
        <div className="relative mt-2">
            <label className="absolute -translate-y-full text-sm text-stone-500">
                {value !== "" && labelText}
            </label>
            <input
                required={required}
                className="w-full p-2 border rounded-md border-stone-600"
                type={type}
                placeholder={labelText}
                name={name}
                value={value}
                onChange={handleChange} 
                {...props} />
        </div>
    )
}

export default DefaultInput