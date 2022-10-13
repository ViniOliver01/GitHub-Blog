import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LayoutContainer } from '../components/header/LayoutContainer';

import { Home } from '../pages/Home/Home';
import { Post } from '../pages/Post/Post';


export function Router(){
  return (
    <Routes>
      <Route path='/' element={<LayoutContainer />}>
          <Route path='/' element={<Home />}/>
          <Route path='/post/:id' element={<Post />}/>
      </Route>
    </Routes>
  );
}