import React, {useState,useEffect, FC} from 'react'
import { List } from '@components/history/ListItem';
import { persistentStorage } from '@utils/local-storage';
import { AllItems } from '@customTypes/local-storage/LocalStorage';

export const HistoryBody:FC = () => {
    const [data, setData] = useState<AllItems[]>([])
    useEffect(()=>{
        let searchHistory = persistentStorage.getAllItems();
        setData(searchHistory)
    },[])
    return <div>
        <>
            <List searchHistory={data}/>
        </>
    </div>
}

