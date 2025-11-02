import css from "./CalcBtns.module.css";

interface CalcBtnsProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    isTextDisplay: boolean,
    isANumberJustZero: boolean,
    isSomeSpecialSymbolAtTheEnd: boolean,
    isAmountOfBracketsTheSame: boolean,
    isMinusDisabled: boolean,
    isCommaDisabled: boolean
}

export default function CalcBtns({ onClick, isTextDisplay, isANumberJustZero, isSomeSpecialSymbolAtTheEnd, isAmountOfBracketsTheSame, isMinusDisabled, isCommaDisabled }: CalcBtnsProps) {
    interface BtnProps {
        id: string,
        content: string,
        isDisabled: boolean
    }

    const btns: BtnProps[] = [
        {
            id: "left-bracket",
            content: "(",
            isDisabled: false
        },
        {
            id: "right-bracket",
            content: ")",
            isDisabled: !isTextDisplay || isSomeSpecialSymbolAtTheEnd || isAmountOfBracketsTheSame
        },
        {
            id: "module",
            content: "%",
            isDisabled: !isTextDisplay || isSomeSpecialSymbolAtTheEnd
        },
        {
            id: "divide",
            content: "/",
            isDisabled: !isTextDisplay || isSomeSpecialSymbolAtTheEnd
        },
        {
            id: "n7",
            content: "7",
            isDisabled: isANumberJustZero
        },
        {
            id: "n8",
            content: "8",
            isDisabled: isANumberJustZero
        },
        {
            id: "n9",
            content: "9",
            isDisabled: isANumberJustZero
        },
        {
            id: "multiply",
            content: "×",
            isDisabled: !isTextDisplay || isSomeSpecialSymbolAtTheEnd
        },
        {
            id: "n4",
            content: "4",
            isDisabled: isANumberJustZero
        },
        {
            id: "n5",
            content: "5",
            isDisabled: isANumberJustZero
        },
        {
            id: "n6",
            content: "6",
            isDisabled: isANumberJustZero
        },
        {
            id: "minus",
            content: "-",
            isDisabled: isMinusDisabled
        },
        {
            id: "n1",
            content: "1",
            isDisabled: isANumberJustZero
        },
        {
            id: "n2",
            content: "2",
            isDisabled: isANumberJustZero
        },
        {
            id: "n3",
            content: "3",
            isDisabled: isANumberJustZero
        },
        {
            id: "plus",
            content: "+",
            isDisabled: !isTextDisplay || isSomeSpecialSymbolAtTheEnd
        },
        {
            id: "comma",
            content: ",",
            isDisabled: !isTextDisplay || isCommaDisabled
        },
        {
            id: "n0",
            content: "0",
            isDisabled: isANumberJustZero
        },
        {
            id: "delete",
            content: "⭰",
            isDisabled: !isTextDisplay
        },
        {
            id: "equally",
            content: "=",
            isDisabled: !isTextDisplay || isSomeSpecialSymbolAtTheEnd || !isAmountOfBracketsTheSame
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