import { useSelector } from 'react-redux';
import PageContainer from '../../PageContainer';
import { useParams } from 'react-router-dom';
import NotFoundPage from '.././NotFoundPage';

export default function PostItemPage() {
    const params = useParams();
    const post = useSelector((s => {
        return s.posts.find((p => p.id === params.id));
    }));

    if (!post) {
        return (<NotFoundPage />)
    }
    return (
        <PageContainer title={post.title}>
            Id:{params.id}
        </PageContainer>

    );
}