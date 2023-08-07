import React, {useEffect, useState} from 'react';

const FirstHttp = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null)

    const fetchPostsHandler = async () => {
        try {
            const response = await fetch('https://dummyjson.com/posts')
            if (!response.ok) {
                throw new Error('Что-то пошло не так ...')
            }
            const data = await response.json();
            console.log(data.posts)

            const loadedPost = [];
            data.posts.forEach(item => loadedPost.push(item.title))

            setPosts(loadedPost);
        } catch (e) {
            setError(e.message)
        }
    }

    useEffect(() => {
        fetchPostsHandler()
    }, [])

    return (
        <div>
            <ul>
                {posts.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
};

export default FirstHttp;