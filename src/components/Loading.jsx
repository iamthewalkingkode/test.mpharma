import React from 'react';


const Loading = () => {

    return (
        <React.Fragment>
            <div style={{ height: '100vh', width: '100vw' }} className="flex-middle flex-center">
                <div className="animated flash slow infinite" style={{ textAlign: 'center' }}>
                    <img src="icon.png" alt="mPharma logo" className="animateds flash slow infinite" style={{ height: 60 }} />
                    <div>&nbsp;</div>
                    <div>getting ready...</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Loading;