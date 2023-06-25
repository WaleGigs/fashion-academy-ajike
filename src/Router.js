import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Admission from './sections/Admission'
import Page from './Page'

const Router = () => {
    return (
       <Routes>
        <Route path='/' element={<Navigate to={'/home'} /> }  />
       <Route path='/home' element={<Page/>} />
       <Route path='/register' element={<Admission/>} />
       <Route path='*' element={<Page/>}  />
       </Routes>
    )
}

export default Router;
