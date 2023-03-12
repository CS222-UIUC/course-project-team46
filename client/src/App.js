import './App.css';

import Search from './components/Search'
import AppBar from './components/AppBar'
// import NavigationBar from './components/NavigationBar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AppBar />
                <Search/>
            </header>
        </div>
    );
}

export default App;
