import React from "react";

export default function SearchResult({ searchResult = [] }) {
  if (searchResult.length === 0)
    return <div className="empty-box">검색결과가 없습니다.</div>;

  return (
    <ul className="result">
      {searchResult.map((item) => {
        return (
          <li key={item.id}>
            <img src={item.imageUrl} alt="사진" />
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
