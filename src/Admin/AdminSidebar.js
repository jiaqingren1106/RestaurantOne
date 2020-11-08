import React from 'react';

import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './AdminSidebar.css'

class AdminSidebar extends React.Component {
    render() {
        return (
            <Navigation id = "navBar" className = 'nav'
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

export default AdminSidebar;
