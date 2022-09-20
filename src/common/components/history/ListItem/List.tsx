import React, {FC} from 'react'
import Link from 'next/link'
import { SearchHistoryProp } from '@customTypes/history/SearchHistoryProp'
import { AllItems } from '@customTypes/local-storage/LocalStorage'

export const List:FC<SearchHistoryProp>= ({searchHistory}) => {
    if (typeof window !== 'undefined' && searchHistory.length ) {
        return <div className='m-3'>
            <>
                <div className="list-group">
                    {
                        searchHistory.map((search:AllItems) => {
                            const userName = search.data ? JSON.parse(search.data).userName : ''
                            const date_time = search.data ? JSON.parse(search.data).time : ''
                            return (
                                <Link href={{pathname:'/search', query:{userName}}} key={search.index}>
                                <button key={search.index} type="button" className="list-group-item list-group-item-action d-flex justify-content-between">
                                   <span> {userName}</span> <span>{date_time}</span>
                                </button></Link>
                            )
                        })
                    }
                </div>
            </>
        </div>
    }

    return <p>No recent search</p>
}

