import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Home from './pages/Home'; // Home 컴포넌트를 추가했습니다.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
