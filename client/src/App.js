import './App.css';

import Search from './Components/Search'
import AppBar from './Components/AppBar'
// import NavigationBar from './Components/NavigationBar';

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
