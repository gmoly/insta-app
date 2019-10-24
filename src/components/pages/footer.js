import React from 'react';
import { withRouter } from "react-router";

const Footer = ({ location }) => {
    return (
        <footer className="footer" style={ getFixedFooterStyle(location) }>
            <p className="float-right"><a href="#">Back to top</a></p>
            <p>© 2019 Company, GMO production. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
    </footer>
    )
}

var getFixedFooterStyle = (location) => {
    if (location.pathname.startsWith('/trip/')) {
        return { position: "fixed", width: '100%', bottom: '-20px' }
    }
    return {}
}

export default withRouter(Footer);
