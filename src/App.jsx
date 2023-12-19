import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";



const App = () => {
  return (
    
     <Routes>
      <Route path="/portafolio-2023/" element={<HomePage/>} />
     </Routes>
    
  )
}

export default App

