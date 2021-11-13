import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";
import MemoListPage from "./pages/memoListPage";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/memoList" element={<MemoListPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
