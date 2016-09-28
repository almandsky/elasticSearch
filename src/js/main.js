import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import TestStore from "./TestStore"
import TestList from "./TestList"

const app = document.getElementById("app")

ReactDOM.render(<TestList store={TestStore} />, app);