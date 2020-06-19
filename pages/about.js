import Link from 'next/Link';

function About() {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <h1>This is a simple project with React and Next Js</h1>
        </ul>
    )
}

export default About