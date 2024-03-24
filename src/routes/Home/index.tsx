import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main>
            <section>
                <div>
                    <h1>Desafio Github API</h1>
                    <h4>DevSuperior - Escola de programação</h4>
                    <Link to={"/profile"}>
                        <button>Começar</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
