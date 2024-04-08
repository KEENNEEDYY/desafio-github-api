
import './styles.css';

type Props = {
    avatar_url: string;
    perfil_url: string;
    followers: string;
    location: string;
    name: string;
}

export default function ResultCard(
    {
        avatar_url, perfil_url, followers, location, name
    }: Props
) {
    return (
        <div className="gitapi-profile-content">
            <img src={avatar_url} alt="perfil-image" />
            <div className="gitapi-profile-data">
                <h4>Informações</h4>
                <div className="gitapi-profile-data-item gitapi-url">
                    <h5>Perfil: </h5><a href={perfil_url} target='_blank'><p>{perfil_url}</p></a>
                </div>
                <div className="gitapi-profile-data-item">
                    <h5>Seguidores: </h5><h6>{followers}</h6>
                </div>
                <div className="gitapi-profile-data-item">
                    <h5>Localidade: </h5><h6>{location}</h6>
                </div>
                <div className="gitapi-profile-data-item">
                    <h5>Nome: </h5><h6>{name}</h6>
                </div>
            </div>
        </div>
    )
}
