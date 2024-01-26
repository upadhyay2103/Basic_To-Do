import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import Error from "./components/Error";

const tditems=[
  
];

function App() {

  let [fullitems,setFullitems]=useState(tditems);

  const handleSubmit=(iname,idate,e)=>{
    e.preventDefault();
    const ntd={
      name:iname,
      date:idate
    };
    // const nntd=[...fullitems,ntd];
    setFullitems((currValue)=>[
      ...currValue,
      ntd
    ]);
    // console.log(e);
  }

  const handleDelete=(naam,dat)=>{
     const filtered=fullitems.filter((item)=>item.name!==naam);
     setFullitems(filtered);
  }

  if(fullitems.length===0)
  {
    return<>
    <center className="todo-cont">
    <Appname></Appname>
    <div className="container text-center">
      <Addtodo handleSubmit={handleSubmit}></Addtodo>
    </div>
    <Error></Error>
    </center>
    </>
  }


  return <>
    <center className="todo-cont">
    <Appname></Appname>
    <div className="container text-center">
      <Addtodo handleSubmit={handleSubmit}></Addtodo>
    </div>
    <Todoitems handleDelete={handleDelete} todoitems={fullitems}></Todoitems>
    </center>
  </>
}

export default App;