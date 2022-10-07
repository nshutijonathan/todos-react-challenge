import React, { useState } from "react";
const ToDos = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, value]);
    setValue("");
  };
  const handleDelete = (item) => {
    let newList = list.filter((ite) => ite !== item);
    setList(newList);
  };
  return (
    <div>
      <input type="text " placeholder="add to do" onChange={changeHandler} />
      <button type="button" onClick={submitHandler}>
        Add
      </button>

      <ul>
        {list.length > 0 ? (
          list.map((value) => {
            return (
              <>
                <li key={value}>
                  {value}{" "}
                  <button onClick={() => handleDelete(value)}>delete</button>
                </li>
              </>
            );
          })
        ) : (
          <p>No item</p>
        )}
      </ul>
    </div>
  );
};

export default ToDos;
