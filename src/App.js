import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState,useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState("light");
  //รูปแบบ 1
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
},[tasks])

  function deleteTask(id) {
    // setTasks(tasks.filter((task) => task.id !== id));
    const result = tasks.filter((data) => data.id !== id);
    setTasks(result);
    console.log(result);
  }
  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    console.log(editTask);
    setTitle(editTask.title);
  }
  function addTask(e) {
    e.preventDefault();
    if (!title) {
      alert("Please enter a task");
    } else if (editId) {
      const updateTask = tasks.map((item) => {
        if (item.id === editId) {
          return { ...item, title: title };
        }
        return item;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 100),
        title: title,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }
  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          addTask={addTask}
          editId={editId}
        />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
