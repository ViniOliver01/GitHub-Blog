import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/home';
// import { DefaultLayout } from './../components/DefaultLayout/DefaultLayout';

export function Router(){
  return (
    <Routes>
        <Route path='/'>
            <Route path='/' element={<Home />}/>
        </Route>
    </Routes>
  );
}