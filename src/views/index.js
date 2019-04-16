/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
// import Welcome from '@/pages/index';
import '../assets/style';

const Welcome = React.lazy(() => import('@/pages/index'));

ReactDOM.render(
    <React.Suspense fallback={<div>Loading...</div>}>
        <Welcome />
    </React.Suspense>,
    document.getElementById('app')
);
