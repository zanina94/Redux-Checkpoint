import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../js/action";
import { faTrashCan, faPenToSquare, faCheckToSlot, faRotateBack, faPlus, faList, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddTask = ({toggle,filter}) => {
  const [item, setItem] = useState("");
  const titleTask = (e) => {
    setItem(e.target.value);
  };
  const dispatch = useDispatch();
  const add=()=>{
    if(item!=="")
    {dispatch(addtask({ task: item, id: Math.random(), isDone: false }));
  setItem("")}
  else
  {alert("please enter a valid task") } }
  return (
    <div>
      <h1>Please Add a Task </h1>
      <div style={{width:'60%', margin:'auto'}} class=" d-flex row mt-4 mb-3">
        <div class="col-2"></div>
      <div class="col-4">
      <input type="text" class="form-control" placeholder="Add a Task" onChange={titleTask} value={item} />
      </div>
      <div class="col-5">
      <button class='btn btn-success float-left' onClick={add}>
      <FontAwesomeIcon icon={faPlus} /> <b class="fw-bold">ADD TASK{" "}</b>
      </button>
      {filter?<button class='ml-2 btn btn-info float-left' onClick={toggle}> <FontAwesomeIcon icon={faListCheck} /> <b>DONE</b></button>:
       <button class='ml-2 btn btn-info float-left' onClick={toggle}> <FontAwesomeIcon icon={faList} /> <b>ALL TASKS</b></button>}

      </div>
      </div>
    </div>
  );
};

export default AddTask;
