import './App.css';

import SearchBar from './Components/SearchBar'
import NavigationBar from './Components/NavigationBar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationBar />
                <SearchBar/>
            </header>
        </div>
    );
}

export default App;
