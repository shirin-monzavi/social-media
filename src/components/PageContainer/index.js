export default function PageContainer({ title,children }) {
    return (
        <main className="page">
            <h1>
                {title}
            </h1>
            <div className="container">
                <div>{children}</div>
            </div>
        </main>

    )
}