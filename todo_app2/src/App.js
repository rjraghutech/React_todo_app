import './App.css';
import Todo from "./Components/Todo";

function App() {
  let todo =[
    {
      title: "Eat",
      desc: "Have breakfast, lunch and dinner.."
    }
  ]
  return (
    <>
      <Todo onDelete={onDelete}/>
    </>
  );
};

export default App;
