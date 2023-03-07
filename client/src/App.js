import './App.css';

import SearchBar from './Components/SearchBar'
import AppBar from './Components/AppBar'
// import NavigationBar from './Components/NavigationBar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AppBar />
                <SearchBar/>
            </header>
        </div>
    );
}

export default App;
