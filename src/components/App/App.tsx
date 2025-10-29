import { useState } from "react";

import css from "./App.module.css";

import CalcDisplay from "../CalcDisplay/CalcDisplay";
import CalcBtns from "../CalcBtns/CalcBtns";

export default function App() {
  const [displayText, setDisplayText] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    switch ((event.target as HTMLButtonElement).id) {
      //#region Numbers.

      //#region 0's entered.
      case "n0":
        if (displayText[0] === "0" && !displayText.includes("0,")) {
          break;
        }

        setDisplayText(displayText + "0");
        break;
      //#endregion
      
      //#region 1's entered.
      case "n1":
        if (displayText[0] === "0" && !displayText.includes("0,")) {
          break;
        }

        setDisplayText(displayText + "1");
        break;
      //#endregion

      //#region 2's entered.
      case "n2":
        if (displayText[0] === "0" && !displayText.includes("0,")) {
          break;
        }

        setDisplayText(displayText + "2");
        break;
      //#endregion

      //#region 3's entered.
      case "n3":
        if (displayText[0] === "0" && !displayText.includes("0,")) {
          break;
        }

        setDisplayText(displayText + "3");
        break;
      //#endregion

      //#region 4's entered.
      case "n4":
        if (displayText[0] === "0" && !displayText.includes("0,")) {
          break;
        }

        setDisplayText(displayText + "4");
        break;
      //#endregion

      //#region 5's entered.
      case "n5":
        if (displayText[0] === "0" && !displayText.includes("0,")) {
          break;
        }

        setDisplayText(displayText + "5");
        break;
      //#endregion

      //#region 6's entered.
      case "n6":
        if (displayText[0] === "0" && !displayText.includes("0,")) {
          break;
        }

        setDisplayText(displayText + "6");
        break;
      //#endregion

      //#region 7's entered.
      case "n7":
        if (displayText[0] === "0" && !displayText.includes("0,")) {
          break;
        }

        setDisplayText(displayText + "7");
        break;
      //#endregion

      //#region 8's entered.
      case "n8":
        if (displayText[0] === "0" && !displayText.includes("0,")) {
          break;
        }

        setDisplayText(displayText + "8");
        break;
      //#endregion

      //#region 9's entered.
      case "n9":
        if (displayText[0] === "0" && !displayText.includes("0,")) {
          break;
        }

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
        if (displayText === "" ||
          displayText.slice(displayText.lastIndexOf("(")).length === 1 ||
          displayText.slice(displayText.lastIndexOf("(")) === "(-" ||
          (displayText.split("(").length - 1) - (displayText.split(")").length - 1) === 0) {
          break;
        }
        
        setDisplayText(displayText + ")");
        break;
      //#endregion
      
      //#region %'s entered.
      case "module":
        if (displayText === "" ||
          displayText.includes("(", displayText.length - 1) ||
          displayText.includes("%", displayText.length - 1) ||
          displayText.includes("/", displayText.length - 1) ||
          displayText.includes("×", displayText.length - 1) ||
          displayText.includes("-", displayText.length - 1) ||
          displayText.includes("+", displayText.length - 1) ||
          displayText.includes(",", displayText.length - 1)) {
          break;
        }
        
        setDisplayText(displayText + "%");
        break;
      //#endregion

      //#region /'s entered.
      case "divide":
        if (displayText === "" ||
          displayText.includes("(", displayText.length - 1) ||
          displayText.includes("%", displayText.length - 1) ||
          displayText.includes("/", displayText.length - 1) ||
          displayText.includes("×", displayText.length - 1) ||
          displayText.includes("-", displayText.length - 1) ||
          displayText.includes("+", displayText.length - 1) ||
          displayText.includes(",", displayText.length - 1)) {
          break;
        }
        
        setDisplayText(displayText + "/");
        break;
      //#endregion

      //#region ×'s entered.
      case "multiply":
        if (displayText === "" ||
          displayText.includes("(", displayText.length - 1) ||
          displayText.includes("%", displayText.length - 1) ||
          displayText.includes("/", displayText.length - 1) ||
          displayText.includes("×", displayText.length - 1) ||
          displayText.includes("-", displayText.length - 1) ||
          displayText.includes("+", displayText.length - 1) ||
          displayText.includes(",", displayText.length - 1)) {
          break;
        }
        
        setDisplayText(displayText + "×");
        break;
      //#endregion

      //#region -'s entered.
      case "minus":
        if (displayText.includes("%", displayText.length - 1) ||
          displayText.includes("/", displayText.length - 1) ||
          displayText.includes("×", displayText.length - 1) ||
          displayText.includes("-", displayText.length - 1) ||
          displayText.includes("+", displayText.length - 1) ||
          displayText.includes(",", displayText.length - 1)) {
          break;
        }
        
        setDisplayText(displayText + "-");
        break;
      //#endregion

      //#region +'s entered.
      case "plus":
        if (displayText === "" ||
          displayText.includes("(", displayText.length - 1) ||
          displayText.includes("%", displayText.length - 1) ||
          displayText.includes("/", displayText.length - 1) ||
          displayText.includes("×", displayText.length - 1) ||
          displayText.includes("-", displayText.length - 1) ||
          displayText.includes("+", displayText.length - 1) ||
          displayText.includes(",", displayText.length - 1)) {
          break;
        }
        
        setDisplayText(displayText + "+");
        break;
      //#endregion

      //#region ,'s entered.
      case "comma":
        // Comma cannot be entered when displayText is empty or after ",()%/×\-+", also a number can have only one comma.
        if (/^$|([,()%/×\-+]|\d,\d+)(?!.*[()%/×\-+\d])/.test(displayText))
          break;

        setDisplayText(displayText + ",");
        break;
      //#endregion

      //#region ='s entered.
      case "equally":
        if (displayText === "" || displayText[displayText.length - 1] === ",") {
          break;
        }
        
        setDisplayText(eval(displayText.replace("×", "*")
          .replace(",", "."))
            .toString()
            .replace(".", ","));
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
        isACommaAtTheEnd={displayText[displayText.length - 1] === ","}
        isOnlyZero={displayText === "0"}
      />
    </div>
  );
}