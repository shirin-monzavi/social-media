import PageContainer from "../../PageContainer";
import Posts from "../../Posts";
import Forms from "../../Forms";

export default function PostList() {
    return (
        <PageContainer title='Post'>
            <Posts showOnlyPromoted={false} />
            <Forms />
        </PageContainer>
    )
}