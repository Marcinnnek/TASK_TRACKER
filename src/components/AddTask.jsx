import { useState } from "react"
import EyeColorDropdown from "./EyeColorDropdown"
import GenderDropdown from "./GenderDropdown"
//import Select from 'react-select'

const AddTask = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [mass, setMass] = useState('')
    const [color, setColor] = useState('Brown')
    const [gender, setGender] = useState('Male')

    const EyeColor = [
        { label: 'Brown', value: 'Brown' },
        { label: 'Amber', value: 'Amber' },
        { label: 'Hazel', value: 'Hazel' },
        { label: 'Blue', value: 'Blue' },
        { label: 'Green', value: 'Green' },
        { label: 'Gray', value: 'Gray' },
    ];

    const Gender = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ];

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please add a character name')
            return
        }
        onAdd({ name, height, mass, color, gender })
        setName('')
        setHeight('')
        setMass('')
        setColor('Brown')
        setGender('Male')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Add Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Height</label>
                <input
                    type="text"
                    placeholder="Add Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Mass</label>
                <input
                    type="text"
                    placeholder="Add Mass"
                    value={mass}
                    onChange={(e) => setMass(e.target.value)} />
            </div>
            <div>
                <EyeColorDropdown
                    label="Eye color"
                    options={EyeColor}
                    value={color}
                    onChange={(e) => setColor(e.target.value)} />
            </div>
            <div>
                <GenderDropdown
                    label="Gender"
                    options={Gender}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)} />
            </div>
            <input type="submit" value='Save Character' className="btn btn-lock" />
        </form>
    )
}

export default AddTask