import { useState } from "react";

import css from "./App.module.css";

import CalcDisplay from "../CalcDisplay/CalcDisplay";
import CalcBtns from "../CalcBtns/CalcBtns";

export default function App() {
  const [displayText, setDisplayText] = useState<string>("");

  const handleMultiply = (expression: string): string => {
    // Matches any "a*b*...".
    const matchedOnes: string[] | null = expression.match(/((-?\d+(\.\d+)?e)\+?)?-?\d+(\.\d+)?(\*-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+/g);
    // Checks if there's any match.
    if (matchedOnes)
      // Replaces the 1'st "a*b*..." into multiplied "a*b*...", that was made by splitted "a*b*..." by "*" (array ["a", "b", ...]) and then reduce method multiplies each other of them.
      // Are you afraid of this code below that was made due to my laziness to make additional variables? :D
      expression = expression.replace(/((-?\d+(\.\d+)?e)\+?)?-?\d+(\.\d+)?(\*-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+/, matchedOnes[0].split("*").reduce((prev, cur) => {
        const calculated: string = String(Number(prev) * Number(cur));
        // Logs.
        console.log(`MULTIPLYING\n${prev} * ${cur} = ${calculated}`);
        return calculated;
      })); // 🫣

    return expression;
  };

  const handleDivide = (expression: string): string => {
    // Matches any "a/b/...".
    const matchedOnes: string[] | null = expression.match(/((-?\d+(\.\d+)?e)\+?)?-?\d+(\.\d+)?(\/-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+/g);
    // Checks if there's any match.
    if (matchedOnes)
      // Replaces the 1'st "a/b/..." into divided "a/b/...", that was made by splitted "a/b/..." by "/" (array ["a", "b", ...]) and then reduce method divides each other of them.
      expression = expression.replace(/((-?\d+(\.\d+)?e)\+?)?-?\d+(\.\d+)?(\/-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+/, matchedOnes[0].split("/").reduce((prev, cur) => {
        const calculated: string = String(Number(prev) / Number(cur));
        // Logs.
        console.log(`DIVIDING\n${prev} / ${cur} = ${calculated}`);
        return calculated;
      })); // 🫣
    
    return expression;
  };

  const handleMod = (expression: string): string => {
    // Matches any "a%b%...".
    const matchedOnes: string[] | null = expression.match(/((-?\d+(\.\d+)?e)\+?)?-?\d+(\.\d+)?(%-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+/g);
    // Checks if there's any match.
    if (matchedOnes)
      // Replaces the 1'st "a%b%..." into modded "a%b%...", that was made by splitted "a%b%..." by "%" (array ["a", "b", ...]) and then reduce method mods each other of them.
      expression = expression.replace(/((-?\d+(\.\d+)?e)\+?)?-?\d+(\.\d+)?(%-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+/, matchedOnes[0].split("%").reduce((prev, cur) => {
        const calculated: string = String(Number(prev) % Number(cur));
        // Logs.
        console.log(`MODDING\n${prev} % ${cur} = ${calculated}`);
        return calculated;
      })); // 🫣

    return expression;
  };

  const handleAdd = (expression: string): string => {
    // Matches any "a+b+...".
    const matchedOnes: string[] | null = expression.match(/((-?\d+(\.\d+)?e)\+?)?-?\d+(\.\d+)?(\+-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+/g); // 🫣
    // Checks if there's any match.
    if (matchedOnes)
      // Replaces the 1'st "a+b+..." into added "a+b+...", that was made by splitted "a+b+..." by /(?<!e)\+/ (array ["a", "b", ...]) and then reduce method adds each other of them.
      expression = expression.replace(/((-?\d+(\.\d+)?e)\+?)?-?\d+(\.\d+)?(\+-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+/, matchedOnes[0].split(/(?<!e)\+/).reduce((prev, cur) => {
        const calculated: string = String(Number(prev) + Number(cur));
        // Logs.
        console.log(`ADDING\n${prev} + ${cur} = ${calculated}`);
        return calculated;
      })); // 🫣

    return expression;
  };

  const handleSubtract = (expression: string): string => {
    // Matches any "a-b-...".
    const matchedOnes: string[] | null = expression.match(/((-?\d+(\.\d+)?e)\+?)?-?\d+(\.\d+)?(--?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+/g); // 🫣
    // Checks if there's any match.
    if (matchedOnes)
      // Replaces the 1'st "a-b-..." into subtracted "a-b-...", that was made by splitted "a-b-..." by /(?<![e-]|^)-/ (array ["a", "b", ...]) and then reduce method subtracts each other of them.
      expression = expression.replace(/((-?\d+(\.\d+)?e)\+?)?-?\d+(\.\d+)?(--?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+/, matchedOnes[0].split(/(?<![e-]|^)-/).reduce((prev, cur) => {
        // Checks on "a--b".
        if (cur[0] === "-") {
          const calculated: string = String(Number(prev) + Number(cur) * -1);
          // Logs.
          console.log(`SUBTRACTING\n${prev} - ${cur} = ${calculated}`);
          // Returns "a+b".
          return calculated;
        }
        const calculated: string = String(Number(prev) - Number(cur));
        // Logs.
        console.log(`SUBTRACTING\n${prev} - ${cur} = ${calculated}`);
        return calculated;
      })); // 🫣

    return expression;
  };

  const handleCalculateInParentheses = (expression: string): string => {
    // Matches any "a..." of "(a...)" excluding parentheses, that include parentheses.
    const matchedOnes: string[] | null = expression.match(/(?<=\()-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?(([%/*\-+]-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+)?(?=\))/g);
    // Checks if there's any match.
    if (matchedOnes) {
      // Logs.
      console.log(`CALCULATING IN PARENTHESES\n(${matchedOnes[0]})`);

      //#region Calculates in order.

      // Calculates expression until there are no multiplying, dividing or modding left.
      while (/[*/%]/.test(matchedOnes[0])) {
        const matchedOnesOfMatchedOne: string[] | null = matchedOnes[0].match(/[*/%]/g);

        if ((matchedOnesOfMatchedOne as string[])[0] === "*")
          matchedOnes[0] = handleMultiply(matchedOnes[0]);
        if ((matchedOnesOfMatchedOne as string[])[0] === "/")
          matchedOnes[0] = handleDivide(matchedOnes[0]);
        if ((matchedOnesOfMatchedOne as string[])[0] === "%")
          matchedOnes[0] = handleMod(matchedOnes[0]);
      }
      // Calculates expression until there are no adding or subtraction left.
      while (/(?<!e)\+|(?<=\d)-/.test(matchedOnes[0])) {
        const matchedOnesOfMatchedOne: string[] | null = matchedOnes[0].match(/(?<!e)\+|(?<=\d)-/g);

        if ((matchedOnesOfMatchedOne as string[])[0] === "+")
          matchedOnes[0] = handleAdd(matchedOnes[0]);
        if ((matchedOnesOfMatchedOne as string[])[0] === "-")
          matchedOnes[0] = handleSubtract(matchedOnes[0]);
      }

      //#endregion

      // Replaces the 1'st "(a...)" into calculated number, that was made via its content ("a...").
      expression = expression.replace(/\(-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?(([%/*\-+]-?\d+(\.\d+)?(e[+-]\d+(\.\d+)?)?)+)?\)/, matchedOnes[0]); // 🫣
    };

    return expression;
  }

  const handleCalculate = (expression: string): string => {
    // Logs.
    console.log(`EXPRESSION\n${expression}`);

    // Parses.
    let parsedExpression: string = expression
      .replace(/×/g, "*")
      .replace(/,/g, ".")
      .replace(/\)\(/g, ")*(")
      .replace(/(?<=\d)\(/g, "*(")
      .replace(/\)(?=\d)/g, ")*")
      .replace(/-\(-/g, "+(");

    // Logs.
    console.log(`PARSED EXPRESSION\n${parsedExpression}`);
    
    //#region Calculates in order.

    // Calculates expressions in parentheses until there are no parentheses left.
    while (/\(/.test(parsedExpression)) {
      // Logs.
      console.log(`PARENTHESES LEFT\n${parsedExpression}`);

      parsedExpression = handleCalculateInParentheses(parsedExpression);
    }
    // Calculates expression until there are no multiplying, dividing or modding left.
    while (/[*/%]/.test(parsedExpression)) {
      // Logs.
      console.log(`MULTIPLYING, DIVIDING OR MODDING LEFT\n${parsedExpression}`);

      const matchedOnes: string[] | null = parsedExpression.match(/[*/%]/g);
      
      if ((matchedOnes as string[])[0] === "*")
        parsedExpression = handleMultiply(parsedExpression);
      if ((matchedOnes as string[])[0] === "/")
        parsedExpression = handleDivide(parsedExpression);
      if ((matchedOnes as string[])[0] === "%")
        parsedExpression = handleMod(parsedExpression);
    }
    // Calculates expression until there are no adding or subtraction left.
    while (/(?<!e)\+|(?<=\d)-/.test(parsedExpression)) {
      // Logs.
      console.log(`ADDING OR SUBTRACTING LEFT\n${parsedExpression}`);

      const matchedOnes: string[] | null = parsedExpression.match(/(?<!e)\+|(?<=\d)-/g);

      if ((matchedOnes as string[])[0] === "+")
        parsedExpression = handleAdd(parsedExpression);
      if ((matchedOnes as string[])[0] === "-")
        parsedExpression = handleSubtract(parsedExpression);
    }

    // Logs.
    console.log(`CALCULATION COMPLETED\n${parsedExpression}`);

    //#endregion
    
    // Returns calculated.
    return parsedExpression
      .replace(/\./g, ",");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // Logs.
    console.log(`CLICKED\n${(event.target as HTMLButtonElement).id}`);

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
      case "left-parenthesis":
        setDisplayText(displayText + "(");
        break;
      //#endregion

      //#region )'s entered.
      case "right-parenthesis":
        // Right parenthesis cannot be entered when displayText is empty, after "(%/×-+," or when amount of ( and ) are the same.
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
        // Minus cannot be entered after "%/×-+,".
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

        setDisplayText(handleCalculate(displayText));
        break;
      //#endregion

      //#endregion

      //#region delete button's entered.
      default:
        setDisplayText("");
      //#endregion
    }
  }

  return (
    <div className={css.app}>
      <CalcDisplay text={displayText} />
      <CalcBtns
        onClick={handleClick}
        isTextDisplay={displayText.length > 0}
        isANumberJustZero={/(?<!,)\b0\b(?![()%/×\-+,])/.test(displayText)}
        isSomeSpecialSymbolAtTheEnd={/[(%/×\-+,]$/.test(displayText)}
        isAmountOfParenthesesTheSame={displayText.split("(").length - displayText.split(")").length === 0}
        isMinusDisabled={/[%/×\-+,]$/.test(displayText)}
        isCommaDisabled={/([()%/×\-+,]|\d,\d+)(?!.*[()%/×\-+\d])/.test(displayText)}
      />
    </div>
  );
}