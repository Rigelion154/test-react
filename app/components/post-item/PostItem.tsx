import React from 'react';
import Button from "@/app/components/ui/button/Button";
import {PostType} from "@/app/types/types";

const PostItem = ({post, deletePost, number} : {post: PostType, number: number, deletePost: Function}) => {
    return (
        <div className='post flex items-center justify-between border-2 border-primary p-3'>
            <div className='post__content w-10/12'>
                <h2 className = "font-bold text-xl">{post.id}. {post.title}</h2>
                <p>{post.body}</p>
            </div>
            <div className='post__button'>
                <Button onClick={() => deletePost(post)} className='button post_button'>Delete post</Button>
            </div>
        </div>
    );
};

export default PostItem;