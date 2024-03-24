import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
    return (
        <div className="gitapi-headerbar">
            <Link to="/">
                <h1>Github API</h1>
            </Link>
        </div>
    )
}
