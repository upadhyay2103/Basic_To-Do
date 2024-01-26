import Todoitem from "./Todoitem";

function Todoitems({todoitems,handleDelete})
{
    return <>
    <div className="container text-center">
      {todoitems.map(item=><Todoitem key={item.name} Todoname={item.name} Tododate={item.date} handleDelete={()=>handleDelete(item.name,item.date)}></Todoitem>)}
    </div>
    </>
}

export default Todoitems;