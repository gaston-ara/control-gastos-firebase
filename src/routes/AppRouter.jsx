import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from '../pages/Home';
import EditAmount from '../pages/EditAmount';

const AppRouter = () => {

  return (
    <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/edit-amount" element={<EditAmount/>}></Route>
                </Routes>
            </Router>
        </>
  )
}

export default AppRouter