import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task 
        key={index} task={task}
        onDelete={onDelete}
        onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;


// const tasks = [
//   {
//     id: 2,
//     text: "Doctors Appointment",
//     day: "Feb 5th at 2:30pm",
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: "Doctors Appointment",
//     day: "Feb 5th at 2:30pm",
//     reminder: true,
//   },
// ];
