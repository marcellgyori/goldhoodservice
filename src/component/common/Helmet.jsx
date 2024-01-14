import React, { Component } from "react";
import { Helmet } from 'react-helmet'

class PageHelmet extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle}</title>
                    <meta name="description" content="GoldHood Service - Professional Hood Cleaning in Florida" />
                    <meta name="keywords" content="hood cleaning, Florida, Deltona, Orlando, Cocoa Beach, gold hood service, exhaust systeam cleaning, house washing, concrete cleaning" />
                    <meta name="author" content="GoldHood Service" />
                </Helmet>

            </React.Fragment>
        )
    }
}


export default PageHelmet;
