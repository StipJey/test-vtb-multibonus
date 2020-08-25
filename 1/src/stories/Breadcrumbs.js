import React from 'react';
import PropTypes from 'prop-types';
import './breadcrumbs.css';

import {throttle} from "./utils";
import {Breadcrumb} from "./Breadcrumb";
import {Separator} from "./Separator";

const PADDING_RIGHT = 200;

export class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerWidth: null,
            content: props.items,
            full: true,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.shrink();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    shrink = () => {
        let childWidth = 0;
        this.root.childNodes.forEach(n => {
            childWidth += n.offsetWidth;
        })

        if (this.root.offsetWidth < childWidth + PADDING_RIGHT
            && (this.state.content.length > 3 || (this.state.content.length > 2 && this.state.full))
        ) {
            const newContent = [...this.state.content];
            if (this.state.full) {
                newContent.splice(1,1, { title: '...' });
                this.setState({
                    content: newContent,
                    full: false,
                })
            } else {
                newContent.splice(2,1, );
                this.setState({
                    content: newContent,
                })
            }
        }
    }

    grow = () => {
        let childWidth = 0;
        this.root.childNodes.forEach(n => {
            childWidth += n.offsetWidth;
        })

        if (this.root.offsetWidth > childWidth + PADDING_RIGHT) {
            const newContent = [...this.props.items];
            const deleteCount = this.props.items.length - this.state.content.length;
            if (deleteCount) {
                newContent.splice(1, deleteCount,{ title: '...' });
                this.setState({
                    content: newContent,
                })
            } else {
                this.setState({
                    content: this.props.items,
                    full: true,
                })
            }
        }
        this.shrink();
    }

    handleResize = throttle((e) => {
        const dir = e.target.innerWidth - this.state.innerWidth || 0;
        this.setState({
            innerWidth: e.target.innerWidth,
        })

        if (dir > 0) {
            this.grow();
        }

        if (dir < 0) {
            this.shrink()
        }
    }, 100);

    render() {
        const {content} = this.state;

        if (content.length < 2) return null;

        return (
            <div className="breadcrumbs" ref={n => this.root = n}>
                {content.map((item, index) =>
                    <React.Fragment key={index}>
                        <Breadcrumb
                            {...item}
                            isActive={index === content.length - 1}
                        />
                        {index !== content.length - 1 && <Separator />}
                    </React.Fragment>
                )}
            </div>
        )
    }
}

Breadcrumbs.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string,
    }))
}
