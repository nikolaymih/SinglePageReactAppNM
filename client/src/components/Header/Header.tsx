import { useState, useEffect } from 'react';
import { IUser, IUserArray } from '../../interfaces/user.interface';
import { getUserDataService } from '../../service/user.service';

import './Header.css';

const Header = () => {
    let [data, setData] = useState<IUserArray>([{
        _id: '',
        name: '',
        image: '',
        userText: '',
        userNumber: 0
    }]);

    useEffect(() => {
        async function fetchMyApi() {
            const userData = await getUserDataService();

            setData(userData);
        }
        fetchMyApi();
    }, [])

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

