import './styles.css';

type Props = {
    text: string;
}

export default function Button({ text }: Props) {
    return (
        <button className="gitapi-button-container">
            <h5>{text}</h5>
        </button>
    )
}
