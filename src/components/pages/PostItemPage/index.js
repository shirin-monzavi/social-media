import { useSelector } from 'react-redux';
import PageContainer from '../../PageContainer';
import { Link, useParams } from 'react-router-dom';
import NotFoundPage from '.././NotFoundPage';
import * as database  from '../../../database';
import './style.scss';

export default function PostItemPage() {
    const params = useParams();
    const post = database.loadById(params.id);

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