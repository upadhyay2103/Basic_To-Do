import styles from './Todoitem.module.css';
import { MdDelete } from "react-icons/md";

function Todoitem({Tododate,Todoname,handleDelete}) {
    
    return (
        <>
            <div className={`row ${styles.man}`}>
                <div className={`col-5 ${styles.cont}`}>
                    {Todoname}
                </div>
                <div className={`col-4 ${styles.cont}`}>
                    {Tododate}
                </div>
                <div className="col-2 ">
                <button className={`${styles.arButton} btn btn-danger`} onClick={handleDelete}><MdDelete /></button>
                </div>
            </div>
        </>
    )
}

export default Todoitem;