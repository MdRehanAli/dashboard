import React from 'react';
import { createBrowserRouter } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout';

const router = createBrowserRouter([
    {
        path: '/',
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component:
            },
            {
                path: '',
                Component: 
            },
        ]
    }
])

export default router;