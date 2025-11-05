import PageContainer from "../../PageContainer";
import Posts from "../../Posts";
import Forms from "../../Forms";
import { Link } from "react-router-dom";
import './style.scss'

export default function PostList() {
    return (
        <PageContainer title='Post'>
            <Posts showOnlyPromoted={false} />
            <div className="add-post">
                <Link to='/postform' >Add Post</Link>
            </div>
        </PageContainer>
    )
}