export default function AsyncComp() {
    const date = Date.now();
    return (
        <div>
            this is AsyncComp
            <p>{date}</p>
        </div>
    );
}
