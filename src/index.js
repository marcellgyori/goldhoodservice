import React, { Component, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const Error404 = lazy(() => import("./elements/error404"));
const PortfolioLanding = lazy(() => import('./home/PortfolioLanding'));

class Root extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Betöltés...</div>}>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={PortfolioLanding} />
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={Error404} />
                        <Route component={Error404} />
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();