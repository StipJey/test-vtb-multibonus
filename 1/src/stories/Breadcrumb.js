import React from "react";
import PropTypes from "prop-types";

export const Breadcrumb = ({title, url, isActive}) => {
    if (!url) {
        return (
            <span className={`breadcrumbs__breadcrumb ${isActive ? 'breadcrumbs__breadcrumb--active' : ''}`}>
                {title}
            </span>
        );
    }

    return (
        <a
            href={url}
            className={`breadcrumbs__breadcrumb ${isActive ? 'breadcrumbs__breadcrumb--active' : ''}`}
        >
            {title}
        </a>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    isActive: PropTypes.bool,
}
