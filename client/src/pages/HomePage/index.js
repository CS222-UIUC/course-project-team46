import './Homepage.css';

import Search from '../../components/Search'
import AppBar from '../../components/AppBar'
// import NavigationBar from '../../components/NavigationBar';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <AppBar />
                <Search/>
            </header>
        </div>
    );
}

export default HomePage;
