import React, { useState, useEffect } from 'react';
import Page from './Pagination';

function App() {
  let [page, setPage] = useState(1);
  return (
    <div className="App">
      <Page page={page} change={setPage} total={100} />
    </div>
  );
}

export default App;
