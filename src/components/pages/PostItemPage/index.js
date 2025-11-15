import { useSelector } from 'react-redux';
import PageContainer from '../../PageContainer';
import { Link, useParams } from 'react-router-dom';
import NotFoundPage from '.././NotFoundPage';
import * as database from '../../../database';
import './style.scss';
import { useEffect, useState } from 'react';
import Loading from '../../Loading';

export default function PostItemPage() {
    const params = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        (async () => {
            const loadedPost = await database.loadById(params.id);
            setPost(loadedPost);
            setIsLoading(false);
        })();
    }, []);

    if (isLoading) {
        return <Loading />
    }

    if (!post) {
        return (<NotFoundPage />)
    }
    
    return (
        <PageContainer title={post.title} className="post-item-page">
            <div className='picture'>
                <img src={post.picture} alt={post.title} />
            </div>

            <div className='description' >{post.description}</div>
            <Link to='/posts' className='back-link'>Back</Link>
        </PageContainer>
    );
}