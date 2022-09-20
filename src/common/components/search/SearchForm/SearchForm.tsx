import React, {FC} from "react";
import { SearchFormProps } from "@customTypes/search";

export const SearchForm:FC<SearchFormProps> = ({handleSubmit, onCurrentNameChange, currentName, error}) => {
    return (
        <>
        <div>
        <form onSubmit={handleSubmit} className="m-3">
                <div className="form-group">
                    <input type="text" className="form-control shadow-none border-dark" placeholder="Search" onChange={onCurrentNameChange} value={currentName}/>
                    <small id="search" className="form-text text-danger">{error ? 'User not found' : ''}</small>
                </div>
            <button type="submit" className="btn btn-dark mt-1">Submit</button>
            </form>
        </div>
        </>
    )
}

