import { useState } from "react";

import css from "./App.module.css";

import CalcDisplay from "../CalcDisplay/CalcDisplay";
import CalcBtns from "../CalcBtns/CalcBtns";

export default function App() {
  const [displayText, setDisplayText] = useState<string>("Replace eval.");

  const handleSolve = (equation: string): string => {
    const parsedEquation: string = equation
      .replace(/×/g, "*")
      .replace(/,/g, ".")
      .replace(/\)\(/g, ")*(")
      .replace(/(?<=\d)\(/g, "*(")
      .replace(/\)(?=\d)/g, ")*");
    
    const solved: number = eval(parsedEquation);

    const parsedSolved: string = solved
      .toString()
      .replace(/\./g, ",");
    
    return parsedSolved;
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    switch ((event.target as HTMLButtonElement).id) {
      //#region Numbers.

      //#region 0's entered.
      case "n0":
        // 0 cannot be entered when a next number is just 0 without a comma.
        if (/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText))
          break;

        setDisplayText(displayText + "0");
        break;
      //#endregion
      
      //#region 1's entered.
      case "n1":
        // 1 cannot be entered when a next number is just 0 without a comma.
        if (/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText))
          break;

        setDisplayText(displayText + "1");
        break;
      //#endregion

      //#region 2's entered.
      case "n2":
        // 2 cannot be entered when a next number is just 0 without a comma.
        if (/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText))
          break;

        setDisplayText(displayText + "2");
        break;
      //#endregion

      //#region 3's entered.
      case "n3":
        // 3 cannot be entered when a next number is just 0 without a comma.
        if (/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText))
          break;

        setDisplayText(displayText + "3");
        break;
      //#endregion

      //#region 4's entered.
      case "n4":
        // 4 cannot be entered when a next number is just 0 without a comma.
        if (/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText))
          break;

        setDisplayText(displayText + "4");
        break;
      //#endregion

      //#region 5's entered.
      case "n5":
        // 5 cannot be entered when a next number is just 0 without a comma.
        if (/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText))
          break;

        setDisplayText(displayText + "5");
        break;
      //#endregion

      //#region 6's entered.
      case "n6":
        // 6 cannot be entered when a next number is just 0 without a comma.
        if (/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText))
          break;

        setDisplayText(displayText + "6");
        break;
      //#endregion

      //#region 7's entered.
      case "n7":
        // 7 cannot be entered when a next number is just 0 without a comma.
        if (/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText))
          break;

        setDisplayText(displayText + "7");
        break;
      //#endregion

      //#region 8's entered.
      case "n8":
        // 8 cannot be entered when a next number is just 0 without a comma.
        if (/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText))
          break;

        setDisplayText(displayText + "8");
        break;
      //#endregion

      //#region 9's entered.
      case "n9":
        // 9 cannot be entered when a next number is just 0 without a comma.
        if (/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText))
          break;

        setDisplayText(displayText + "9");
        break;
      //#endregion

      //#endregion

      //#region Symbols.

      //#region ('s entered.
      case "left-bracket":
        setDisplayText(displayText + "(");
        break;
      //#endregion

      //#region )'s entered.
      case "right-bracket":
        // Right bracket cannot be entered when displayText is empty, after "(%/×-+," or when amount of ( and ) are the same.
        if (/^$|[(%/×\-+,]$/.test(displayText) ||
          displayText.split("(").length - displayText.split(")").length === 0)
          break;
        
        setDisplayText(displayText + ")");
        break;
      //#endregion
      
      //#region %'s entered.
      case "module":
        // Module symbol cannot be entered when displayText is empty or after "(%/×-+,".
        if (/^$|[(%/×\-+,]$/.test(displayText))
          break;
        
        setDisplayText(displayText + "%");
        break;
      //#endregion

      //#region /'s entered.
      case "divide":
        // Divide symbol cannot be entered when displayText is empty or after "(%/×-+,".
        if (/^$|[(%/×\-+,]$/.test(displayText))
          break;
        
        setDisplayText(displayText + "/");
        break;
      //#endregion

      //#region ×'s entered.
      case "multiply":
        // Multiply symbol cannot be entered when displayText is empty or after "(%/×-+,".
        if (/^$|[(%/×\-+,]$/.test(displayText))
          break;
        
        setDisplayText(displayText + "×");
        break;
      //#endregion

      //#region -'s entered.
      case "minus":
        // Minus cannot be entered when displayText is empty or after "%/×-+,".
        if (/[%/×\-+,]$/.test(displayText))
          break;
        
        setDisplayText(displayText + "-");
        break;
      //#endregion

      //#region +'s entered.
      case "plus":
        // Plus cannot be entered when displayText is empty or after "(%/×-+,".
        if (/^$|[(%/×\-+,]$/.test(displayText))
          break;
        
        setDisplayText(displayText + "+");
        break;
      //#endregion

      //#region ,'s entered.
      case "comma":
        // Comma cannot be entered when displayText is empty or after "()%/×-+,", also a number can have only one comma.
        if (/^$|([()%/×\-+,]|\d,\d+)(?!.*[()%/×\-+\d])/.test(displayText))
          break;

        setDisplayText(displayText + ",");
        break;
      //#endregion

      //#region ='s entered.
      case "equally":
        // Equally symbol cannot be entered when displayText is empty, after "(%/×-+," or when amount of ( and ) aren't the same.
        if (/^$|[(%/×\-+,]$/.test(displayText) ||
          displayText.split("(").length - displayText.split(")").length !== 0)
          break;

        setDisplayText(handleSolve(displayText));
        break;
      //#endregion

      //#endregion

      //#region delete button's entered.
      default:
        setDisplayText("");
      //#endregion
    }

    console.log((event.target as HTMLButtonElement).id);
  }

  return (
    <div className={css.app}>
      <CalcDisplay text={displayText} />
      <CalcBtns
        onClick={handleClick}
        isTextDisplay={displayText.length > 0}
        isANumberJustZero={/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText)}
        isSomeSpecialSymbolAtTheEnd={/[(%/×\-+,]$/.test(displayText)}
        isAmountOfBracketsTheSame={displayText.split("(").length - displayText.split(")").length === 0}
        isMinusDisabled={/[%/×\-+,]$/.test(displayText)}
        isCommaDisabled={/([()%/×\-+,]|\d,\d+)(?!.*[()%/×\-+\d])/.test(displayText)}
      />
    </div>
  );
}