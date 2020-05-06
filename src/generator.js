
/**
 * 构建一个页码列表
 * @param {Number} page 当前页
 * @param {Number} total 总页数
 * @param {Number} sideCount 当前页一边有几个兄弟
 * @param {String} prev 上一页显示的文字
 * @param {String} next 下一页显示的文字
 * @param {String} ellipsis 省略的页码显示文字
 */
export default function (page = 1, total = 0, sideCount = 1, prev='<', next='>', ellipsis='...') {
  if(+total<0) {
    console.warn(`The argument total should greater than 0, but got ${total}. we assign 0 to total.`);
    total = 0;
  }
  if(+sideCount < 0) {
    console.warn(`The argument sideCount should greater than or equal to 1, but got ${sideCount}. we assign 1 to sideCount.`);
    sideCount = 1;
  }
  if(+page < 0) {
    console.warn(`The argument page should greater than or equal to 1, but got ${page}. we assign 1 to page.`);
    page = 1;
  }
  let items = [];
  if(total == 0) {
    return items;
  }
  if(page != 1) { // 如果不是第一页应该添加一个上一页
    items.push({
      display: prev,
      page: page - 1
    });
  }
  items.push({
    display: 1,
    page: 1
  });
  if(page - sideCount > 3) {
    items.push({display: ellipsis});
  } else if(page - sideCount == 3) {
    items.push({
      display: 2,
      page: 2
    });
  }
  for(let i = Math.max(page-sideCount, 2); i<= page; i++) {
    items.push({
      display: i,
      page: i
    });
  }
  if(page + sideCount > total) {
    for(let i = page + 1; i < total; i++) {
      items.push({
        display: i,
        page: i
      });
    }
  }else {
    for(let i = page + 1; i<= page + sideCount; i++) {
      items.push({
        display: i,
        page: i
      });
    }
    if(page + sideCount + 2 < total) {
      items.push({display: ellipsis});
    }else if(page + sideCount + 2 == total) {
      items.push({display: total - 1, page: total - 1});
    }
  }
  if(items[items.length - 1] && items[items.length - 1].page != total) {
    items.push({display: total, page: total});
  }
  if(page != total) {
    items.push({display: next, page: page + 1});
  }
  return items;
}
