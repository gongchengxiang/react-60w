import React from 'react';
import PropTypes from 'prop-types';
import TabItem from './TabItem';

import './tab.scss';

export default class Tab extends React.PureComponent {
    render() {
        const {
            children,
            active,
            onTabChange,
        } = this.props;
        if (children) {
            const child = Array.isArray(children) ? children : [children];
            const tabItems = child.filter(e => e.type === TabItem);
            if (tabItems.length) {
                const nav = tabItems.map(e => (
                    <li key={e.props.name} onClick={() => onTabChange(e)}>{e.props.name}</li>
                ));
                const currentChild = tabItems.filter(e => e.props.name === active);
                return (
                    <div className="tab-wrap">
                        <ul className="tab-nav">{nav}</ul>
                        <div className="tab-content">{currentChild}</div>
                    </div>
                );
            }
        }
        return null;
    }
}

Tab.propTypes = {
    children: PropTypes.node,
    active: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
};

Tab.defaultProps = {
    children: null,
};
