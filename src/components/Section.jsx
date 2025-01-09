export function Section (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.children}</div>
        </div>
    )
}
