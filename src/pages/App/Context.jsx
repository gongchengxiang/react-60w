import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const { Provider, Consumer } = createContext()

function A(props) {
    const { changeCommonValue } = props
    return (
        <div>
            A-common:
            <Consumer>
                {value => <span>{value.testNum}</span>}
            </Consumer>
            <button
                type="button"
                onClick={() => changeCommonValue(Math.random())}
            >
                changeByChild
            </button>
        </div>
    )
}
A.propTypes = {
    changeCommonValue: PropTypes.func.isRequired,
}

function B() {
    return (
        <div>
            B-common:
            <Consumer>
                {value => <span>{value.testNum}</span>}
            </Consumer>
        </div>
    )
}

export default class ContextTest extends React.Component {
    state = {
        testNum: 1,
    }

    changeCommonValue = (value) => {
        this.setState({
            testNum: value,
        })
    }

    render() {
        const { testNum } = this.state
        return (
            <div>
                ContextTest
                <button
                    type="button"
                    onClick={() => this.changeCommonValue(Math.random())}
                >
                    changeByParent
                </button>
                <Provider value={{ testNum }}>
                    <A changeCommonValue={this.changeCommonValue} />
                    <B changeCommonValue={this.changeCommonValue} />
                </Provider>
            </div>
        )
    }
}
