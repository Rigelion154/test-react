"use client"
import Container from "@/app/components/container/Container";
import React, {useEffect, useState} from "react";
import PostsList from "@/app/components/post-item/PostsList";
import PostForm from "@/app/components/post-item/PostForm";
import PostFilter from "@/app/components/post-item/PostFilter";
import Modal from "@/app/components/ui/modal/Modal";
import Button from "@/app/components/ui/button/Button";
import {usePosts} from "@/app/hooks/usePosts";
import {FilterType, PostType} from "@/app/types/types";
import PostService from "@/app/api/PostService";
import Loader from "@/app/components/ui/loader/Loader";
import {useFetch} from "@/app/hooks/useFetch";
import {getPagesCount} from "@/app/utils/getPagesCount";
import {usePagination} from "@/app/hooks/usePagination";
import Pagination from "@/app/components/pagination/Pagination";

export default function Home() {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [filter, setFilter]: [filter: FilterType, setFilter: Function] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const {res: fetchPostsData, status: isPostsLoading, err: postError}  = useFetch(async () => {
        const response = await PostService.getAll(limit, page);
        const totalCount = Number(response.headers['x-total-count']);
        setPosts(response.data);
        setTotalPages(getPagesCount(totalCount, limit));
    })

    const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);
    const pagesArray = usePagination(totalPages);

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const deletePost = (post: PostType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    const goToPage = (pageNumber: number) => {
        setPage(pageNumber);
    }

    useEffect(() => {
        fetchPostsData();
    }, [page]);

    return (
        <main>
            <Container>
                <div className='flex flex-col gap-5 py-7'>
                    <h1 className='text-center text-4xl'>Main Page</h1>
                    <div>
                        <Button onClick={() => setModal(true)}>
                            Create new post
                        </Button>
                    </div>
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                    {postError &&
                        <h2 className='text-center text-2xl text-error'>Ooops...{postError}!</h2>}
                    {isPostsLoading
                        ? <Loader/>
                        : <PostsList deletePost={deletePost} posts={sortedAndFilteredPosts} title={'Posts list'}/>
                    }
                    <Pagination
                        currentPage={page}
                        goPage={goToPage}
                        pagesArray={pagesArray}
                    />
                    <Modal visible={modal} setVisible={setModal}>
                        <PostForm create={createPost}/>
                    </Modal>
                </div>
            </Container>
        </main>
    )
}
