import React, {FC} from 'react';
import {NavBar} from '@components/app/NavBar';
import {SearchBody} from '@modules/search';

const Search:FC = () => {
    return <div>
        <>
        <NavBar currentPage="search"/>
        <SearchBody/>
        </>
    </div>
}

export default Search