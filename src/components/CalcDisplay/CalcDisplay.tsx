import css from "./CalcDisplay.module.css";

interface CalcDisplayProps {
    text: string
}

export default function CalcDisplay({ text }: CalcDisplayProps) {
    return <p className={css.text}>{text}</p>;
}