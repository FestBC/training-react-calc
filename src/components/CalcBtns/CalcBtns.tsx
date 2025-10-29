import css from "./CalcBtns.module.css";

interface CalcBtnsProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    isTextDisplay: boolean,
    isAComma: boolean,
    isACommaAtTheEnd: boolean,
    isOnlyZero: boolean
}

export default function CalcBtns({ onClick, isTextDisplay, /*isAComma,*/ isACommaAtTheEnd, isOnlyZero }: CalcBtnsProps) {
    interface BtnProps {
        id: string,
        content: string,
        isDisabled: boolean
    }

    const btns: BtnProps[] = [
        {
            id: "left-bracket",
            content: "(",
            isDisabled: isACommaAtTheEnd
        },
        {
            id: "right-bracket",
            content: ")",
            isDisabled: isACommaAtTheEnd
        },
        {
            id: "module",
            content: "%",
            isDisabled: isACommaAtTheEnd
        },
        {
            id: "divide",
            content: "/",
            isDisabled: isACommaAtTheEnd
        },
        {
            id: "n7",
            content: "7",
            isDisabled: isOnlyZero
        },
        {
            id: "n8",
            content: "8",
            isDisabled: isOnlyZero
        },
        {
            id: "n9",
            content: "9",
            isDisabled: isOnlyZero
        },
        {
            id: "multiply",
            content: "×",
            isDisabled: isACommaAtTheEnd
        },
        {
            id: "n4",
            content: "4",
            isDisabled: isOnlyZero
        },
        {
            id: "n5",
            content: "5",
            isDisabled: isOnlyZero
        },
        {
            id: "n6",
            content: "6",
            isDisabled: isOnlyZero
        },
        {
            id: "minus",
            content: "-",
            isDisabled: isACommaAtTheEnd
        },
        {
            id: "n1",
            content: "1",
            isDisabled: isOnlyZero
        },
        {
            id: "n2",
            content: "2",
            isDisabled: isOnlyZero
        },
        {
            id: "n3",
            content: "3",
            isDisabled: isOnlyZero
        },
        {
            id: "plus",
            content: "+",
            isDisabled: isACommaAtTheEnd
        },
        {
            id: "comma",
            content: ",",
            isDisabled: false
        },
        {
            id: "n0",
            content: "0",
            isDisabled: isOnlyZero
        },
        {
            id: "delete",
            content: "⭰",
            isDisabled: !isTextDisplay
        },
        {
            id: "equally",
            content: "=",
            isDisabled: isACommaAtTheEnd || !isTextDisplay
        }
    ];

    return (
        <div className={css.buttons}>
            {btns.map(({ id, content, isDisabled }) =>
                <button
                    key={id}
                    className={css.button}
                    type="button"
                    onClick={onClick}
                    id={id}
                    disabled={isDisabled}>
                    {content}
                </button>)}
        </div>
    );
}