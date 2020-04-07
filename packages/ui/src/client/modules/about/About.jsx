import React, { Fragment } from 'react'
import { photo } from '../../images'
import styles from './about.module.scss'

const About = () => {
    return (
        <Fragment>
            <h1 className={styles.header}>
                Wiley Hilton
            </h1>

            <content className={styles.content}>
                <p>
                    Hey, my name is Wiley Hilton. When I'm not working as a remote web application engineer I tutor web development students and help others make their own websites.
                </p>

                <p>
                    I work on projects for companies based all around the globe and love doing it. I have a diverse set of skills in html, javascript, css, react, node, linux administration and much more. 
                </p>
            </content>

            <img
                alt='Me'
                src={photo}
                className={styles.photo}
            />
        </Fragment>
    )
}

export default About