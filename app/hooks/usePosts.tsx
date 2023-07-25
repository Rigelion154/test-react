import {useMemo} from "react";
import {PostType} from "@/app/types/types";

export const useSortedPosts = (posts: PostType[], sort: 'title' | 'body' | '') => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts: PostType[], sort: 'title' | 'body' | '', query: string) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndFilteredPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts])

    return sortedAndFilteredPosts;
}