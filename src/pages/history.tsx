import React,{FC} from 'react'
import {NavBar} from '@components/app/NavBar';
import { HistoryBody } from '@modules/history';
const History:FC = () => {
    return <div>
        <>
            <NavBar currentPage='history'/>
            <HistoryBody/>
            
        </>
    </div>
}

export default History