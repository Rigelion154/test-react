import React from 'react';
import Button from "@/app/components/ui/button/Button";

const Pagination = ({pagesArray, goPage, currentPage}: { pagesArray: number[], goPage: Function, currentPage:number}) => {

    return (
        <div className='flex gap-2 mx-auto'>
            {pagesArray.map((page) => <Button
                className={page === currentPage ? 'bg-primary text-white' : ''}
                onClick={() => goPage(page)} key={page}>{page}</Button>)}
        </div>
    );
};

export default Pagination;

//