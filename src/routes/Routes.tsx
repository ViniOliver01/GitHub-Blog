import { Routes, Route } from 'react-router-dom'
import { LayoutContainer } from '../components/header/LayoutContainer';

import { Home } from '../pages/Home/Home';
// import { DefaultLayout } from './../components/DefaultLayout/DefaultLayout';


export function Router(){
  return (
    <Routes>
        <Route path='/' element={<LayoutContainer />}>
            <Route path='/' element={<Home />}/>
        </Route>
    </Routes>
  );
}