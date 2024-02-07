import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Read from './component/Read';
import Update from './component/Update';
import Create from './component/create';

function App() {
  return (
    <div className="App">
               <h1>CURD Operation</h1>
               <BrowserRouter>
               <Routes>
                <Route exact path="/create" element={<Create/>}/>
                <Route exact path="/Read" element={<Read/>}/>
                <Route exact path="/Update" element={<Update/>}/>
               
               </Routes>
               </BrowserRouter>
             

    </div>
  );
}

export default App;
