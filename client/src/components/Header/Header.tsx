import { useState, useEffect } from 'react';
import { IUserArray } from '../../interfaces/user.interface';
import { getUserDataService } from '../../service/user.service';
import { useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {
    let [data, setData] = useState<IUserArray>([{
        _id: '',
        name: '',
        image: '',
        userText: '',
        userNumber: 0
    }]);

    const location = useLocation().pathname;

    useEffect(() => {
        async function fetchMyApi() {
            const userData = await getUserDataService(location);

            setData(userData);
        }
        fetchMyApi();
    }, [location])

    return (
        <header className="header">
            <nav className="navigation">
                <img className="userLogo" src={data[0].image} alt="...loading" />
                <div className="dashboard">
                    <a href="/">
                        Overview
                    </a>
                    <a href="/">
                        Score Details
                    </a>
                    <a href="/">
                        Recommendations
                    </a>
                    <a href="/">
                        Resources
                    </a>
                </div>
                <a href="/" className="userSettings">
                    Profile settings
                </a>
            </nav>
        </header>
    )
}

export default Header;

