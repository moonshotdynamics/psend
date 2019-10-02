import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header= () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/How it Works">
            <a style={linkStyle}>How it Works</a>
        </Link>
        <Link href="/LogIn">
            <a style={linkStyle}>Log In</a>
        </Link>

        <Link href="/register">
            <a style={linkStyle}>Sign Up</a>
        </Link>
    </div>
);

export default Header;
