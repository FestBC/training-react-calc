import css from "./CalcBtns.module.css";

interface CalcBtnsProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    isTextDisplay: boolean,
    isAComma: boolean,
    isACommaAtTheEnd: boolean,
    isOnlyZero: boolean
}

export default function CalcBtns({ onClick, isTextDisplay, isAComma, isACommaAtTheEnd, isOnlyZero }: CalcBtnsProps) {
    return (
        <div className={css.buttons}>
            <button type="button" onClick={onClick} id="left-bracket"
                className={css.button}
                disabled={isACommaAtTheEnd}>
                (
            </button>

            <button type="button" onClick={onClick} id="right-bracket"
                className={css.button}
                disabled={isACommaAtTheEnd}>
                )
            </button>

            <button type="button" onClick={onClick} id="module"
                className={css.button}
                disabled={isACommaAtTheEnd}>
                %
            </button>
            
            <button type="button" onClick={onClick} id="divide"
            className={css.button}
            disabled={isACommaAtTheEnd}>
                /
            </button>
            
            <button type="button" onClick={onClick} id="n7"
            className={css.button}
            disabled={isOnlyZero}>
                7
            </button>
            
            <button type="button" onClick={onClick} id="n8"
            className={css.button}
            disabled={isOnlyZero}>
                8
            </button>
            
            <button type="button" onClick={onClick} id="n9"
            className={css.button}
            disabled={isOnlyZero}>
                9
            </button>
            
            <button type="button" onClick={onClick} id="multiply"
            className={css.button}
            disabled={isACommaAtTheEnd}>
                &times;
            </button>
            
            <button type="button" onClick={onClick} id="n4"
            className={css.button}
            disabled={isOnlyZero}>
                4
            </button>
            
            <button type="button" onClick={onClick} id="n5"
            className={css.button}
            disabled={isOnlyZero}>
                5
            </button>
            
            <button type="button" onClick={onClick} id="n6"
            className={css.button}
            disabled={isOnlyZero}>
                6
            </button>
            
            <button type="button" onClick={onClick} id="minus"
            className={css.button}
            disabled={isACommaAtTheEnd}>
                -
            </button>
            
            <button type="button" onClick={onClick} id="n1"
            className={css.button}
            disabled={isOnlyZero}>
                1
            </button>
            
            <button type="button" onClick={onClick} id="n2"
            className={css.button}
            disabled={isOnlyZero}>
                2
            </button>
            
            <button type="button" onClick={onClick} id="n3"
            className={css.button}
            disabled={isOnlyZero}>
                3
            </button>
            
            <button type="button" onClick={onClick} id="plus"
            className={css.button}
            disabled={isACommaAtTheEnd}>
                +
            </button>
            
            <button type="button" onClick={onClick} id="comma"
            className={css.button}
            disabled={false}>
                ,
            </button>
            
            <button type="button" onClick={onClick} id="n0"
            className={css.button}
            disabled={isOnlyZero}>
                0
            </button>
            
            <button type="button" onClick={onClick} id="delete"
            className={css.button}
            disabled={!isTextDisplay}>
                &#11120;
            </button>

            <button type="button" onClick={onClick} id="equally"
            className={css.button}
            disabled={isACommaAtTheEnd || !isTextDisplay}>
                =
            </button>
        </div>
    );
}