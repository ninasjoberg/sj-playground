import React from 'react';
import './Breadcrumbs.css';

const Breadcrumbs = (props) => {
    return (
        <div>
            <ol className="breadcrumbs">
                <li className="breadcrumb-item">1.</li>
                <li className="breadcrumb-item breadcrumb-item--active">2. Välj plats</li>
                <li className="breadcrumb-item">3.</li>
                <li className="breadcrumb-item">4.</li>
            </ol>
        </div>
    );
};

export default Breadcrumbs;