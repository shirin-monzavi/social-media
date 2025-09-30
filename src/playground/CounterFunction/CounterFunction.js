export default function CounterFunction(props) {
    const { title, agree } = props;

    return (
        <p>{title} {agree ? 'Yes' : 'NO'}</p>
    )
}