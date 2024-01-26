import { useRef, useState } from "react";
import styles from "./Addtodo.module.css";
import { IoIosAddCircle } from "react-icons/io";

function Addtodo({handleSubmit})
{
  const tdname=useRef();
  const tddate=useRef();

  return <form className="row"  onSubmit={(e)=>{handleSubmit(tdname.current.value,tddate.current.value,e);
    tddate.current.value="";
    tdname.current.value="";
    }}>
   <div className="col-5">
     <input type="text" ref={tdname} placeholder="Enter Todo here" className={`${styles.plain}`}/>
   </div>
   <div className="col-4">
   <input type="date" ref={tddate} className={`${styles.plain}`} />
   </div>
   <div className="col-2"><button className={`${styles.arButton} btn btn-success`}><IoIosAddCircle /></button></div>
 </form>
}

export default Addtodo;