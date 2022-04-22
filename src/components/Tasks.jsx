import Task from "./Task";
import App from "../App";
import { useState } from "react"

const Tasks = ({ tasks, onDelete, showAddTaskProp }) => {

  const [massFilter, setFilterName] = useState('')
  const [heightFilter, setFilterHeight] = useState('')

  return (
    <>
      {showAddTaskProp === true ?
        <div className="add-form" >
          <div className="form-control" >
            <label>Mass filter</label>
            <input
              type="number"
              placeholder="Mass Above"
              value={massFilter}
              onChange={event => { setFilterName(event.target.value) }}
            />
          </div>
          <div className="form-control">
            <label>Height filter</label>
            <input
              type="number"
              placeholder="Height Above"
              value={heightFilter}
              onChange={event => { setFilterHeight(event.target.value) }}
            />
          </div>
        </div>
        : ''}
      {tasks.filter(tasks => (+tasks.mass >= +massFilter && +tasks.height >= +heightFilter)).sort((a, b) => parseInt(a.height) + parseInt(b.height)).map((task, index) => (
        <Task
          key={index} task={task}
          onDelete={onDelete}

        />
      ))}

    </>


  );
};

export default Tasks;