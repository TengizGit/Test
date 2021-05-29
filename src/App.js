import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ThemeContext from './contexts/theme';
import themes from './constants/theme';
import './styles/App.css';
import Article from './components/Article/Article';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Task5 from './pages/DraggebleSortedTask/Task';
import Request from './pages/RequestApi/RequestApi';
import './i18n';

const App = () => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        const getTheme = (current, allThemes) => {
            const {dark, light} = allThemes;
            return current === dark ? light : dark;
        };

        setTheme((prev) => getTheme(prev, themes));
    };

    return (
        <div className="wrapper">
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <Router>
                    <Switch>
                        <Route>
                            <Header/>
                            <Article/>
                            <Task5/>
                            <Request/>
                            <Footer/>
                        </Route>
                    </Switch>
                </Router>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
