import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blogs/Blog";
import Blogs from "./pages/Blogs/Blogs";
import CreateBlog from "./pages/Blogs/CreateBlog";
import AllBlog from "./pages/Blogs/AllBlog";
import EditBlog from "./pages/Blogs/EditBlog";
import SearchBlog from "./pages/Blogs/SearchBlog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />}>
            <Route index element={<AllBlog />} />
            <Route path="create" element={<CreateBlog />} />
            <Route path=":id" element={<Blog />} />
            <Route path=":id/edit" element={<EditBlog />} />
            <Route path="search/:title" element={<SearchBlog />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
