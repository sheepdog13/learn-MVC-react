import React from "react";

export default function List({ data, onClick, renderItem }) {
  return (
    <>
      <ul className="list">
        {data.map((item, index) => {
          return (
            <li key={item.id} onClick={() => onClick(item.keyword)}>
              {renderItem(item, index)}
            </li>
          );
        })}
      </ul>
    </>
  );
}
