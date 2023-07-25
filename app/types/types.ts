export type PostType = {
    id: number;
    title: string;
    body: string;
}

export type FilterType = {
    sort: 'title' | 'body' | '';
    query: string;
}

type TypeSelectOptions = {
    value: string;
    name: string;
}

export type TypeSelect = {
    options: TypeSelectOptions[];
    defaultValue: string;
    value: 'title' | 'body' | '';
    onChange: Function;
}