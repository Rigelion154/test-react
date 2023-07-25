import React from 'react';
import PostItem from "@/app/components/post-item/PostItem";
import {PostType} from "@/app/types/types";

const PostsList = ({posts, title, deletePost} : {posts: PostType[], title: string, deletePost: Function}) => {

    if (!posts.length) {
      return  <h2 className='text-center text-2xl'>Posts not found</h2>
    }

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-center text-2xl'>{title}</h2>
            {posts.map((post, index) => <PostItem number={index +1} deletePost={deletePost} post={post} key={index}/>)}
        </div>)
};

export default PostsList;