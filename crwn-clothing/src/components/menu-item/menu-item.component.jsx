import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    // <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >

    <Link className={`${size} menu-item`} to={`${match.url}${linkUrl}`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </Link>
)

export default withRouter(MenuItem);