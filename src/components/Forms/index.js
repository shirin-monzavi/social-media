export default function Form() {

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (<>
        <form onSubmit={onSubmit}>
            <input type="text" name="post" />
            <button type="button">Add Post</button>
        </form>

    </>);
}