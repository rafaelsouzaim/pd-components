import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProjectsListPage from './features/projects/pages/ProjectsListPage';
import ProjectEditPage from './features/projects/pages/ProjectEditPage';
import MainNav from './components/MainNav';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<ProjectsListPage />} />
        <Route path="edit/*" element={<ProjectEditPage />} />
        <Route path="edit" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
