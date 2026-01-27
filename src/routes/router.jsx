import React from 'react';
import { createBrowserRouter } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout';
import Settings from '../pages/Settings/Settings';
import DashboardOverview from '../pages/DashboardOverview/DashboardOverview';
import Appointments from '../pages/Appointments/Appointments';
import CallLogs from '../pages/CallLogs/CallLogs';

const router = createBrowserRouter([
    {
        path: '/',
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: DashboardOverview
            },
            {
                path: '/call-logs',
                Component: CallLogs
            },
            {
                path: '/appointments',
                Component: Appointments
            },
            {
                path: '/settings',
                Component: Settings
            },
            {
                path: '/settings',
                Component: Settings
            },
        ]
    }
])

export default router;