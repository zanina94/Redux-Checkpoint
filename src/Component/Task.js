import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completetask, deletetask } from '../js/action'
import { faTrashCan, faPenToSquare, faCheckToSlot, faRotateBack, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Edit from './Edit'

//fontawesome.library.add(faCheckSquare, faCoffee);

const Task = ({el}) => {
const dispatch = useDispatch()
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id,SetId] = useState()
    return (
        <div style={{width:'60%', margin:'auto'}} class="d-flex row mb-1">
            <div class="col-3">
            <h4 className={el.isDone?"line":"normal"} >{el.task}</h4>
            </div>
            <div class="col-3">
            <button class="btn btn-outline-danger" onClick={()=>dispatch(deletetask(el.id))}> <FontAwesomeIcon icon={faTrashCan} /> <b>DELETE</b></button>
            </div>
            <div class="col-3">
            {el.isDone?<button class="btn btn-outline-dark" onClick={()=>dispatch(completetask(el.id))}><FontAwesomeIcon icon={faRotateBack} /> <b>UNDO</b></button>:
                       <button class="btn btn-outline-dark" onClick={()=>dispatch(completetask(el.id))}><FontAwesomeIcon icon={faCheckToSlot} /> <b>COMPLETED</b></button>}
            </div>
            <div class="col-3">
            <button class="btn btn-outline-warning" onClick={()=>{handleShow();SetId(el.id)}}><FontAwesomeIcon icon={faPenToSquare} /> <b>EDIT</b></button>
            </div>
         
            <Edit show={show} handleClose={handleClose} id={id} />
        </div>
    )
}

export default Task
