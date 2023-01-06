import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);

// 8443d03a0ecd905c6120abf16379f6a7
// https://api.themoviedb.org/3/movie/550?api_key=8443d03a0ecd905c6120abf16379f6a7
