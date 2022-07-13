import reactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import App from "./components/App.jsx"

import './main.scss'

reactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"))