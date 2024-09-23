import Appname from "./component/appname";
import Addtodo from "./component/Addtodo";
import Heading from "./component/Heading";
import Todoitems from "./component/todoitems";


function App() {

  const todolist = [
    {
      name: "Buy Milk",
      date: "4/12/2021"
    },
    {
      name: "Go to Gym",
      date: "4/12/2021"
    },
    {
      name: "Read a Book",
      date: "4/12/2021"
    },
    {
      name: "Complete Assignment",
      date: "4/12/2021"
    }



  ];

  return (
    <center className="todo-container ">
      <Heading name="Mukul" />
      <Heading name="Yesh" />
      <Appname />
      <Addtodo />
      <Todoitems todolist={todolist} />



    </center>

  )
}

export default App;
