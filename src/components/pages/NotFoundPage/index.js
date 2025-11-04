import { Link } from "react-router-dom";
import PageContainer from "../../PageContainer";

export default function NotFoundPage() {
    return (
        <>
            <PageContainer title='Page Not Found' >
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                </ul>
            </PageContainer>
        </>
    );

}