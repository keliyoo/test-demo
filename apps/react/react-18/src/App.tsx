import './App.css';
import { Route, Routes } from 'react-router-dom';
import Differ17 from './pages/differ17';

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/diff17' element={<Differ17 />} />
            </Routes>
        </div>
    );
}

export default App;
