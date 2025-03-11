import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Formulaire from './Formulaire';
import AdminPage from './AdminPage';
import './App.css';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Formulaire</Link>
                <Link to="/admin">Admin</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Formulaire />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </Router>
    );
}

export default App;