import React from 'react'
import PropTypes from 'prop-types'

export default class TabItem extends React.PureComponent {
    render() {
        const { children } = this.props
        return (
            <div className="tab-item">
                {children}
            </div>
        )
    }
}

TabItem.propTypes = {
    children: PropTypes.node,
}

TabItem.defaultProps = {
    children: null,
}
