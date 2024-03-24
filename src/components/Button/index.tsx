import './styles.css';

type Props = {
    text: string;
}

export default function Button({ text }: Props) {
    return (
        <div className="gitapi-button-container">
            <h5>{text}</h5>
        </div>
    )
}
