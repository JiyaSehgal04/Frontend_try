import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import ResultsPage from './pages/ResultsPage';
import AiStyleHomePage from './pages/AiStyleHomePage';
// import EvaluationPage from './pages/EvaluationPage';
// import ResultsViewPage from './pages/ResultsViewPage';
import { EvaluationProvider } from './contexts/EvaluationContext';
import { ResultsProvider } from './contexts/ResultsContext';

function App() {
  return (
    <EvaluationProvider>
      <Router>
        <div className="app theme-dark">
          <Header />
          <main className="app-content">
            <Routes>
            <Route path="/" element={<AiStyleHomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/results/:evaluationId" element={<ResultsPage />} />
              {/* <Route path="/evaluation" element={<EvaluationPage />} />
              <Route path="/results-view" element={<ResultsViewPage />} /> */}
            </Routes>
          </main>
        </div>
      </Router>
    </EvaluationProvider>
  );
}

export default App;