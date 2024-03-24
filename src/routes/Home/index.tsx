import { Link } from "react-router-dom";

import './styles.css';
import Button from "../../components/Button";

export default function Home() {
    return (
        <main>
            <section>
                <div className="gitapi-home-container">
                    <div className="gitap-home-title">
                        <h1>Desafio Github API</h1>
                        <h4>DevSuperior - Escola de programação</h4>
                    </div>
                    <div className="gitap-home-button-container">
                        <Link to={"/profile"}>
                            <Button text="Começar" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
