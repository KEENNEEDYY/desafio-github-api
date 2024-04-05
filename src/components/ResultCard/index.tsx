
import './styles.css';

type Props = {
    avatar_url: string;
    perfil_url: string;
    followers: string;
    location: string;
    name: string;
}

export default function ResultCard(
    /* {
        avatar_url,perfil_url,followers,location,name
    } : Props */
) {
    return (
        <div className="gitapi-profile-content">
            <img src="https://avatars.githubusercontent.com/u/13897257?v=4" alt="perfil-image" />
            <div className="gitapi-profile-data">
                <h4>Informações</h4>
                <div className="gitapi-profile-data-item gitapi-url">
                    <h5>Perfil: </h5><p><a href="https://api.github.com/users/acenelio">https://api.github.com/users/acenelio</a></p>
                </div>
                <div className="gitapi-profile-data-item">
                    <h5>Seguidores: </h5><h6>4379</h6>
                </div>
                <div className="gitapi-profile-data-item">
                    <h5>Localidade: </h5><h6>Uberlândia</h6>
                </div>
                <div className="gitapi-profile-data-item">
                    <h5>Nome: </h5><h6>Nelio Alves</h6>
                </div>
            </div>
        </div>
    )
}
