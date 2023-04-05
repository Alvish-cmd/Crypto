import "./Market.css"
import React from "react"
import Sidebar from "../../components/sidebar/Sidebar.tsx"
import Navbar from "../../components/navbar/Navbar.tsx"
import Marketchart from "./Marketchart.tsx"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Marketchart />
      </div>
    </div>
  )
}

export default List