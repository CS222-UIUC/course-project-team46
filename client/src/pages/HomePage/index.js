import './Homepage.css';

import Search from '../../components/Search'
import AppBar from '../../components/AppBar'
// import NavigationBar from '../../components/NavigationBar';

function HomePage(props) {
    const { restaurantsData } = props;
    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <AppBar />
                <Search restaurantsData={restaurantsData} />
            </header>
        </div>
    );
}

export default HomePage;
