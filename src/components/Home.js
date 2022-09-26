import '../styles/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='intro'>
                <img className='home-img' alt='' />
                <div className='inside-home-img'>
                    <h1>Welcome to Point of Sale</h1>
                    <p>
                        Point of Sale is a web application that allows you to manage your business.
                        It is a simple way to manage your business.
                    </p>
                </div>
            </div>
            <div className='home-cards'>
                <div className='card card-right'>
                    <div className='card-text'>
                        <h3>Manage your business</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                    <img src='images/1.jpg' alt='' />
                </div>
                <div className='card card-left'>
                    <div className='card-text'>
                        <h3>Manage your business</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                    <img src='images/1.jpg' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Home;