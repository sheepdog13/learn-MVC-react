import React from "react";

export default function SearchForm({ value, onChange, onSubmit, onReset }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };
  const handleReset = () => {
    onReset();
  };
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          autoFocus
          value={value}
          onChange={handleChange}
        />
        {value.length > 0 && (
          <button type="reset" className="btn-reset"></button>
        )}
      </form>
    </div>
  );
}
