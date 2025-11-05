import PageContainer from '../../PageContainer';
import { useParams } from 'react-router-dom';

export default function PostItemPage() {
    const params = useParams();
    console.log(params);
    return (
        <PageContainer title='Post'>
            Id:{params.id}
        </PageContainer>

    );
}