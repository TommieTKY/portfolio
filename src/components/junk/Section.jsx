export default function Section({ title, children }) {
    return (
        <>
            <div class="container-fluid">
                <h2>{title}</h2>
                <div>{children}</div>
            </div>
        </>
    )
}