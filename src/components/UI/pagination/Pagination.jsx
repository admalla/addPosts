import React from 'react';

export function Pagination({ page, changePage, pageArray }) {
  return (
    <div className="page__wrapper">
      {pageArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page__current' : 'page'}
        >
          {p}
        </span>
      ))}
    </div>
  );
}
