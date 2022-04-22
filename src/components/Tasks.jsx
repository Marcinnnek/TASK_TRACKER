import Task from "./Task";
import CharacterFilter from "./CharacterFilter";
import { useState } from "react"

const Tasks = ({ tasks, onDelete }) => {

  const [nameFilter, setFilterName] = useState('')
  const [heightFilter, setFilterHeight] = useState('')

  return (
    <>
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

      {tasks.filter(tasks => (+tasks.height > +nameFilter && + tasks.mass > +heightFilter)).map((task, index) => (
        <Task
          key={index} task={task}
          onDelete={onDelete}

        />
      ))}

    </>


  );
};

export default Tasks;