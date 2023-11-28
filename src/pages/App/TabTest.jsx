import React from 'react'
import Tab from '../../components/Tab'
import TabItem from '../../components/TabItem'

export default class TabTest extends React.Component {
    state = {
        activeTab: 'tab1',
    }

    onTabChange = (tabItem) => {
        this.setState({
            activeTab: tabItem.props.name,
        })
    }

    render() {
        const { activeTab } = this.state
        return (
            <Tab active={activeTab} onTabChange={this.onTabChange}>
                <TabItem name="tab1">
                    <div>tab1 content1</div>
                    <div>tab1 content2</div>
                </TabItem>
                <TabItem name="tab2">
                    <div>tab2 content</div>
                </TabItem>
                <TabItem name="tab3">
                    <div>tab3 content</div>
                </TabItem>
                <TabItem name="tab4">
                    <div>tab4 content</div>
                </TabItem>
            </Tab>
        )
    }
}
