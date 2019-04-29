import React from 'react';
import styles from './index.less';
import Logo from '@/assets/images/logo';

class Welcome extends React.Component {
    render() {
        return (
            <div className={styles.welcome}>
                <img src={Logo} className={styles.logo}/>
                <p>Welcome React Template</p>
            </div>
        );
    }
}

export default Welcome;
