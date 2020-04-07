import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About } from '../about'
import styles from './router.module.scss'

const SiteRouter = () => {
    return (
        <div className={styles.content}>
            <Router>
                <Switch>
                    <Route component={About} />
                </Switch>
            </Router>
        </div>
    )
}

export default SiteRouter