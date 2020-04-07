import React from 'react'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'

import formatStore from './redux/store'
import { Router } from './modules'
import styles from './app.module.scss';

const store = formatStore()

function App() {
    return (
        <Provider store={store}>
            <div className={styles.app}>
                <div className={styles.background} />
                <Router />
            </div>
        </Provider>
    )
}

export default App
