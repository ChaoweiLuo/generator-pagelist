# 简介
这是一个生成分页页码的函数

# 使用
```javascript
import generator from 'generator-pagelist';
let pages = generator(1, 10, 2);
// pages =     [
//      { display: 1, page: 1 },
//      { display: 2, page: 2 },
//      { display: 3, page: 3 },
//      { display: '...' },
//      { display: 10, page: 10 },
//      { display: '>', page: 2 }
//    ]
```
你可以使用pages去构建自己的UI。