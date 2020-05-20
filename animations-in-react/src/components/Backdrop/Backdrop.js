import React from 'react';

import './Backdrop.css';

function backdrop(props) {
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed']
    return <div className={cssClasses.join(' ')}> </div>;
};

export default backdrop;