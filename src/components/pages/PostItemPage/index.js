import { useSelector } from 'react-redux';
import PageContainer from '../../PageContainer';
import { useParams } from 'react-router-dom';

export default function PostItemPage() {
    const params = useParams();
    const post = useSelector((s => {
        return s.posts.find((p => p.id === params.id));
    }));

    return (
        <PageContainer title={post.title}>
            Id:{params.id}
        </PageContainer>

    );
}