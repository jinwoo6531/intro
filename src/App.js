import React,{useState} from 'react';
import Menubar from './hoc/Menu/Menubar';
import Page from './hoc/Page/Page';

function App() {
  const [PageNum, setPage] = useState(0);

  const showPage = (num) => {    
    setPage(num)
  }

  return (
    
    <div>
      <Menubar showPage={showPage}/>
      <Page page={PageNum}/>
    </div>
    
  );
}

export default App;
