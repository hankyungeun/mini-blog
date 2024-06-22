import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
//Pages
import MainPage from './component/page/ListPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import Header from './component/common/Header';
import ListPage from './component/page/ListPage';
import ProfilePage from "./component/page/ProfilePage";


function App(props){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route index element={<MainPage />} /> */}
        <Route path="/" element={<ProfilePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
