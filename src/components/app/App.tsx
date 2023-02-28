import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import LogInPage from 'pages/LogInPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
    </Routes>
  );
}
