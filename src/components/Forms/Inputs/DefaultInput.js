import React from 'react'

const DefaultInput = ({name, handleChange, value, labelText, type, required, wrapperStyles, ...props}) => {
    return (
        <div className={`relative mt-2 ${wrapperStyles ? wrapperStyles : ""}`}>
            <label className="absolute -translate-y-full text-sm text-stone-500">
                {value !== "" && labelText}
            </label>
            <input
                required={required}
                className={`w-full p-2 border rounded-md border-stone-600 ${props.extraStyles ? props.extraStyles : ""}`}
                type={type ? type : "text"}
                placeholder={labelText}
                name={name}
                value={value}
                onChange={handleChange}
                {...props} />
        </div>
    )
}

export default DefaultInput