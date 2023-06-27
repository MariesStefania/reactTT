import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from './Page1'
import Page2 from './Page2'

function App() {
 
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="spline" element={<Page2 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
