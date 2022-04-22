import React from 'react'

const EyeColorDropdown = ({ label, value, options, onChange }) => {
    return (
        <label >
            {label}
            <div>
                <select value={value} onChange={onChange} className="form-control-dropdown">
                    {options.map((EyeColor) => (
                        <option value={EyeColor.value}>{EyeColor.label}</option>
                    ))}
                </select>
            </div>
        </label>
    );
};

export default EyeColorDropdown