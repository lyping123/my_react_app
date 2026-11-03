function Footer() {
    return (
        <>
            <footer>
                <p>© 2024 My React App. All rights reserved.</p>
            </footer>
        </>
    );
}

function Head(props) {
    const title = props.title;
    return (
        <>
            <div>
                <h1>{title || 'Default Title'}</h1>
            </div>
        </>
    );
}

export { Head, Footer };