import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {CounterProvider} from "./context/CounterContext";
import App from './App'
import './styles/main.scss'
import store from "./Store/store.jsx";
import {Provider} from "react-redux";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CounterProvider>
            <Provider store={store}>
            <App />
            </Provider>
        </CounterProvider>
    </StrictMode>
);