import React, {useState} from 'react';
import Input from "@/app/components/ui/input/Input";
import Button from "@/app/components/ui/button/Button";

const PostForm = ({create}: {create: Function}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        create(post)
        setPost({title: '', body: ''});
    }

    return (
        <form className='flex flex-col gap-2 items-center'>
            <Input className={'w-full'} value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text"
                   placeholder='Post name'/>
            <Input className={'w-full'} value={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text"
                   placeholder='Post description'/>
            <Button onClick={addNewPost}>Create post</Button>
        </form>
    );
};

export default PostForm;