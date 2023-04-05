import "./list.css"
import React from "react"
import Sidebar from "../../components/sidebar/Sidebar.tsx"
import Navbar from "../../components/navbar/Navbar.tsx"
import Datatable from "../../components/datatable/Datatable.tsx"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List