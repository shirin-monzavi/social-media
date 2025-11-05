import { useSelector } from 'react-redux';
import PageContainer from '../../PageContainer';
import { Link, useParams } from 'react-router-dom';
import NotFoundPage from '.././NotFoundPage';
import './style.scss';

export default function PostItemPage() {
    const params = useParams();
    const post = useSelector((s => {
        return s.posts.find((p => p.id === params.id));
    }));

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