import React, {ChangeEvent} from 'react';
import Input from "@/app/components/ui/input/Input";
import Select from "@/app/components/ui/select/Select";
import {FilterType} from "@/app/types/types";

const PostFilter = ({filter, setFilter} : {filter: FilterType, setFilter: Function}) => {
    return (
        <div className='flex gap-3'>
            <Input
                value={filter.query}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})}
                placeholder={'Search post'}
            />
            <Select
                value={filter.sort}
                onChange={(selectedSort: string) => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sort by'
                options={[
                    {value: 'title', name: 'Sort by name'},
                    {value: 'body', name: 'Sort by description'}
                ]}/>
        </div>
    );
};

export default PostFilter;