import React, { useState } from 'react';
import axios from "axios";
import axiosFetch from "../config/axios";

function getPost({query}) {
  // Khai báo 1 biến trạng thái mới đặt tên là "count"
  //const [posts, setPosts] = useState([]);
  return (
    <div>
      <p>Bạn đã click {query} lần</p>
      <button>
        Click vào tôi
      </button>
    </div>
  );
}
export default getPost;