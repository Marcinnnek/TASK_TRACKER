import { useState } from "react"

const CharacterFilter = () => {
    const [nameFilter, setFilterName] = useState('')
    const [heightFilter, setFilterHeight] = useState('')

    // const onFilter = (event) => {
    //     onFilter({ nameFilter, heightFilter })
    //     setFilterName('')
    //     setFilterHeight('')
    // }

    return (
        <div className="add-form" >
            <div className="form-control" >
                <label>Height filter</label>
                <input
                    type="number"
                    placeholder="Height Above"
                    value={nameFilter}
                    onChange={event => { setFilterName(event.target.value) }}
                />
            </div>
            <div className="form-control">
                <label>Mass filter</label>
                <input
                    type="number"
                    placeholder="Mass Above"
                    value={heightFilter}
                    onChange={event => { setFilterHeight(event.target.value) }}
                />
            </div>
        </div>
    )
}

export default CharacterFilter