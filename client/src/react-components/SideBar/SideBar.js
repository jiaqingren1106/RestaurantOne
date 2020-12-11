import React from 'react';

import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './SideBar.css'

class SideBar extends React.Component {
    render() {
        return (
            <Navigation id = "sideBar" className = 'side'
                onSelect={({itemId}) => {
                    this.props.onPageSelected(itemId)
                }}
                items={[
                    {
                        title: 'Dashboard',
                        itemId: 0
                    },
                    {
                        title: 'User',
                        itemId: 1
                    },
                    {
                        title: 'Restaurant Owner',
                        itemId: 2
                    },
                    {
                        title: 'Posts',
                        itemId: 3
                    },
                    {
                        title: 'Reviews',
                        itemId: 4
                    },
                ]}
            />
        );
    }

}

export default SideBar;
