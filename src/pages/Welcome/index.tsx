/// <reference path="index.d.tsx" />
import * as React from 'react';
import * as styles from './index.less';
import * as Logo from '../../assets/images/logo.png';

class Welcome extends React.PureComponent<Props, State> {
    public state = {
        message: 'React TypeScript Template'
    }
    render() {
        return (
            <div className={styles.welcome}>
                <img src={Logo} className={styles.logo}/>
                <p>Welcome {this.props.name} {this.state.message}</p>
            </div>
        );
    }
}

export default Welcome;
