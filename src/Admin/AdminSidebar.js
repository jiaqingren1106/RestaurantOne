import React from 'react';

import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './AdminSidebar.css'

class AdminSidebar extends React.Component {
    render() {
        return (
            <Navigation className = 'nav'
                items={[
                    {
                        title: 'Dashboard',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        // elemBefore: () => <Icon name="inbox" />,
                    },
                    {
                        title: 'User',
                    },
                    {
                        title: 'Restaurant Owner',
                    },
                    {
                        title: 'Posts',
                    },
                    {
                        title: 'Reviews',
                    },
                ]}
            />
        );
    }

}

export default AdminSidebar;
