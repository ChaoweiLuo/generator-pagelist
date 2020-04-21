import React from 'react';
import g from 'generator-pagelist';
import './Pagination.css';

export default ({page, total, sideCount, prev, next, ellipsis, change}) => {
  console.log(page, total)
  let pages = g(page, total, sideCount, prev, next,ellipsis);
  console.log(pages)
  return (
    <div className="page">
      {
        pages.map(p => {
          let classList = ['page-item'];
          if(p.page == page) {
            classList.push('active');
          } else if(p.display === ellipsis) {
            classList.push('page-item-ellipsis');
          }
          return (<div onClick={() => p.page && change(p.page)} className={classList.join(' ')}> {p.display} </div>);
        })
      }
    </div>
  )
}