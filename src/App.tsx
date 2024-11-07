import { useEffect, useState } from "react";
import Card from "./components/Card";
import { CustomCSSProperties } from "./types/type";

function App() {
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/task").then((res) =>
      res.json().then((data) => {
        setTask(data);
      })
    );
  }, []);
  const incomplete = tasks?.filter(
    (task: { status: string }) => task.status == "Incomplete"
  );
  const toDo = tasks?.filter(
    (task: { status: string }) => task.status == "To Do"
  );
  const doing = tasks?.filter(
    (task: { status: string }) => task.status == "Doing"
  );
  const completed = tasks?.filter(
    (task: { status: string }) => task.status == "Completed"
  );
  console.log(completed);

  const style: CustomCSSProperties = {
    scrollbarWidth: "thin",
    scrollbarColor: "#3b82f6 #f1f1f1",
    WebkitScrollbarWidth: "8px",
    WebkitScrollbarTrack: "#f1f1f1",
    WebkitScrollbarThumb: "#3b82f6",
    WebkitScrollbarThumbHover: "#2563eb",
  };

  return (
    <div className="grid grid-cols-4 gap-3 m-8">
      <div style={style} className="bg-gray-200 p-1 h-screen overflow-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 ">
            <h1 className="h-8 w-8 bg-red-500 rounded-l-full"></h1>
            <h1 className="font-semibold">Incomplete</h1>
          </div>
          <h1 className="bg-gray-300 px-3 rounded-md">{incomplete?.length}</h1>
        </div>
        {incomplete?.map((ins: { _id: string }) => (
          <div key={ins._id}>
            <Card task={ins}></Card>
          </div>
        ))}
      </div>
      <div style={style} className="bg-gray-200 p-1 h-screen overflow-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 ">
            <h1 className="h-8 w-8 bg-red-500 rounded-l-full"></h1>
            <h1 className="font-semibold">To Do</h1>
          </div>
          <h1 className="bg-gray-300 px-3 rounded-md">{toDo?.length}</h1>
        </div>
        {toDo?.map((ins: { _id: string }) => (
          <div key={ins._id}>
            <Card task={ins}></Card>
          </div>
        ))}
      </div>
      <div style={style} className="bg-gray-200 p-1 h-screen overflow-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 ">
            <h1 className="h-8 w-8 bg-red-500 rounded-l-full"></h1>
            <h1 className="font-semibold">Doing</h1>
          </div>
          <h1 className="bg-gray-300 px-3 rounded-md">{doing?.length}</h1>
        </div>
        {doing?.map((ins: { _id: string }) => (
          <div key={ins._id}>
            <Card task={ins}></Card>
          </div>
        ))}
      </div>
      <div style={style} className="bg-gray-200 p-1 h-screen overflow-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 ">
            <h1 className="h-8 w-8 bg-red-500 rounded-l-full"></h1>
            <h1 className="font-semibold">Completed</h1>
          </div>
          <h1 className="bg-gray-300 px-3 rounded-md">{completed?.length}</h1>
        </div>
        {completed?.map((ins: { _id: string }) => (
          <div key={ins._id}>
            <Card task={ins}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
