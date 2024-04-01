
import Button from '../../components/Button';
import ResultCard from '../../components/ResultCard';
import './styles.css';

export default function ProfilePresenter() {


    return (
        <main>
            <section>
                <form className="gitapi-profile-presenter-container">
                    <h1>Encontre um perfil Github</h1>
                    <input
                        type="text"
                        name="search"
                        placeholder="Digite o nome do perfil..."
                    />
                    <Button text="Encontrar" />
                </form>
                <ResultCard />
            </section>
        </main>
    )
}
