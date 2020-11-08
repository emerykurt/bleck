import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from './SidebarOption'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                <h2>B.L.E.C.K.</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    Emery Kurt Lumsden II
                </h3>
                </div>
                <CreateIcon />
                <SidebarOption Icon={} title="Thread" />
            </div> 
        </div>
    )
}
