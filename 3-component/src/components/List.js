import React from "react";
import { formatRelativeDate } from "../helpers";

export default function List({
  data = [],
  onClick,
  isIndex = false,
  isDate = false,
  onRemove,
}) {
  const handleClickRemoveHistory = (event, keyword) => {
    event.stopPropagation();
    onRemove(keyword);
  };
  return (
    <>
      <ul className="list">
        {data.map((item, index) => {
          return (
            <li key={item.id} onClick={() => onClick(item.keyword)}>
              {isIndex && <span className="number">{item.id}</span>}
              {item.keyword}
              {isDate && (
                <span className="date">{formatRelativeDate(item.date)}</span>
              )}
              {!!onRemove && (
                <button
                  className="btn-remove"
                  onClick={(event) => {
                    handleClickRemoveHistory(event, item.keyword);
                  }}
                ></button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
