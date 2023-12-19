import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";



export const App = () => {


  return (
    <>
      <Routes>
        <Route path="/portafolio-2023/" element={<HomePage />} />
      </Routes>
    </>
  )
}



