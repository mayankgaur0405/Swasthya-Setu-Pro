import React from 'react'
import { Button } from "@/components/ui/button";
import HistoryList from './_components/HistoryList'
import DoctorsAgentList from '@/app/_components/DoctorsAgentList';

function DashBoard() {
  return (
    <div>
        <div>
            <h2>My Dashboard</h2>
            <Button>+ Consult With Doctor</Button>
        </div>
        <HistoryList />

        <DoctorsAgentList />
    </div>
  )
}

export default DashBoard