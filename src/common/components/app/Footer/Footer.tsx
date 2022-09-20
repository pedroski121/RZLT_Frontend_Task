import React,{FC} from 'react';

export const Footer:FC = () => {
    return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 bg-dark" data-testid="footer">
         <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-light"> &copy; Pedro</span>
        </div>
    </footer>
)
}