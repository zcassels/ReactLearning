import { MouseEvent, useState } from "react";

function ListGroup() {
  const listElements: Array<string> = [
    "An Items",
    "A Second item",
    "A third Itmes",
    "A fourth itme",
    "And a fifth one",
  ];

  const handleClick = (i: number) => {
    setSelectedIndex(i);
  };
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List group</h1>
      {listElements.length === 0 && <p>No elements</p>}
      <ul className="list-group">
        {listElements.map((el, i) => (
          <li
            key={el}
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            onClick={(event) => handleClick(i)}
          >
            {el} - {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
