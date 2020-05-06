"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/**
 * 构建一个页码列表
 * @param {Number} page 当前页
 * @param {Number} total 总页数
 * @param {Number} sideCount 当前页一边有几个兄弟
 * @param {String} prev 上一页显示的文字
 * @param {String} next 下一页显示的文字
 * @param {String} ellipsis 省略的页码显示文字
 */
function _default() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var sideCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var prev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '<';
  var next = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '>';
  var ellipsis = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '...';

  if (+total < 0) {
    console.warn("The argument total should greater than 0, but got ".concat(total, ". we assign 0 to total."));
    total = 0;
  }

  if (+sideCount < 0) {
    console.warn("The argument sideCount should greater than or equal to 1, but got ".concat(sideCount, ". we assign 1 to sideCount."));
    sideCount = 1;
  }

  if (+page < 0) {
    console.warn("The argument page should greater than or equal to 1, but got ".concat(page, ". we assign 1 to page."));
    page = 1;
  }

  var items = [];

  if (total == 0) {
    return items;
  }

  if (page != 1) {
    // 如果不是第一页应该添加一个上一页
    items.push({
      display: prev,
      page: page - 1
    });
  }

  items.push({
    display: 1,
    page: 1
  });

  if (page - sideCount > 3) {
    items.push({
      display: ellipsis
    });
  } else if (page - sideCount == 3) {
    items.push({
      display: 2,
      page: 2
    });
  }

  for (var i = Math.max(page - sideCount, 2); i <= page; i++) {
    items.push({
      display: i,
      page: i
    });
  }

  if (page + sideCount > total) {
    for (var _i = page + 1; _i < total; _i++) {
      items.push({
        display: _i,
        page: _i
      });
    }
  } else {
    for (var _i2 = page + 1; _i2 <= page + sideCount; _i2++) {
      items.push({
        display: _i2,
        page: _i2
      });
    }

    if (page + sideCount + 2 < total) {
      items.push({
        display: ellipsis
      });
    } else if (page + sideCount + 2 == total) {
      items.push({
        display: total - 1,
        page: total - 1
      });
    }
  }

  if (items[items.length - 1] && items[items.length - 1].page != total) {
    items.push({
      display: total,
      page: total
    });
  }

  if (page != total) {
    items.push({
      display: next,
      page: page + 1
    });
  }

  return items;
}
