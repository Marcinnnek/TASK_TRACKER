import React from 'react'

const GenderDropdown = ({ label, value, options, onChange }) => {
    return (
        <label >
            {label}
            <div>
                <select value={value} onChange={onChange} className="form-control-dropdown">
                    {options.map((Gender) => (
                        <option value={Gender.value}>{Gender.label}</option>
                    ))}
                </select>
            </div>
        </label>
    );
};
export default GenderDropdown