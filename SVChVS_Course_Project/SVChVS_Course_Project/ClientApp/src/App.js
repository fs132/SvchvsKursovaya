import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';;

import './custom.css'
import { GamesPage } from './components/Games/GamesPage';
import { GamesByLowerPriceView } from './components/Games/GamesByLowerPriceView';
import { GamesByNameView } from './components/Games/GamesByNameView';
import { GamesByDescriptionView } from './components/Games/GamesByDescriptionView';
import { GamesByHigherMarkView } from './components/Games/GamesByHigherMarkView';
import { NewsForm } from './components/images/NewsForm';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Router>
                    <Routes>
                        <Route path='/Games' element={<GamesPage />} />
                        <Route path='/GamesByPrice' element={<GamesByLowerPriceView />} />
                        <Route path='/GamesByName' element={<GamesByNameView />} />
                        <Route path='/GamesByMark' element={<GamesByHigherMarkView />} />
                        <Route path='/GamesByDescription' element={<GamesByDescriptionView />} />
                        <Route path='/' element={<NewsForm />} />
                    </Routes>
                </Router>
            </Layout>
        );
    }
}