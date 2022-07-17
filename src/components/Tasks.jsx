import Task from './Task';


const Tasks = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">Task</label>
        <input type="text" name="" id="" placeholder='AddTask'/>
        <br />
        <label htmlFor="">Day & Time</label>
        <input type="text" name="" id="" placeholder='Add Day & Time'/>
        <br />
        <button>Save Task</button>
      </form>
      <Task />
    </div>
  )
}

export default Tasks