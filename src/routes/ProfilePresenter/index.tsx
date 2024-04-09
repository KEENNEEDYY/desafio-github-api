
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ResultCard from '../../components/ResultCard';
import './styles.css';
import axios from 'axios';

type FormData = {
    search: string;
}

type ResultData = {
    avatar_url: string;
    html_url: string;
    followers: string;
    location: string;
    name: string;
}

export default function ProfilePresenter() {

    const [formData, setFormData] = useState<FormData>({ search: '' });
    const [resultData, setResultData] = useState<ResultData>();
    const [error, setError] = useState();

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${formData.search}`)
            .then(response => {
                setResultData(response.data);
                setError(undefined);
            })
            .catch((error) => {
                setError(error);
                setResultData(undefined);
                console.log(error);
            });
    }

    return (
        <main>
            <section>
                <form className="gitapi-profile-presenter-container" onSubmit={handleFormSubmit}>
                    <h1>Encontre um perfil Github</h1>
                    <input
                        value={formData.search}
                        type="text"
                        name="search"
                        placeholder="Digite o nome do perfil..."
                        onChange={handleInputChange}
                    />
                    <Button text="Encontrar" />
                </form>
                {resultData ?
                    <ResultCard
                        name={resultData.name}
                        avatar_url={resultData.avatar_url}
                        followers={resultData.followers}
                        location={resultData.location}
                        perfil_url={resultData.html_url}
                    />
                    : error &&
                    <h1>Erro ao buscar usuário</h1>
                }
            </section>
        </main>
    )
}
