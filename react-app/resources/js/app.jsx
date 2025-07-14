import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client'
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import Test from './pages/Test'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><Test /></React.StrictMode>)

