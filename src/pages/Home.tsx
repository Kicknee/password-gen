import { useState } from "react";
import { saveToLocalStorage } from "../utilities/saveToLocalStorage";
import { usePasswordContext } from "../context/passwordContext";

type Inputs = {
  length: number;
  includeNumbers: boolean;
  includeLowerCase: boolean;
  includeUpperCase: boolean;
  includeSymbols: boolean;
};
export const Home = () => {
  const [input, setInput] = useState<Inputs>({
    length: 7,
    includeNumbers: true,
    includeLowerCase: false,
    includeUpperCase: false,
    includeSymbols: false,
  });
  const { password, setPassword } = usePasswordContext();

  function handleChange(e: any) {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.type === "range" ? e.target.value : e.target.checked,
    }));
  }

  function generatePswd(e: any) {
    e.preventDefault();

    const sourceNumbers = "0123456789";
    const sourceLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const sourceUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const sourceSymbols = "@#$%";

    let characters: string = "";
    let generatedPassword: string = "";

    if (input.includeNumbers) {
      const randomIndex = Math.floor(Math.random() * sourceNumbers.length);

      characters += sourceNumbers;
      generatedPassword += sourceNumbers.charAt(randomIndex);
    }
    if (input.includeLowerCase) {
      const randomIndex = Math.floor(Math.random() * sourceLowerCase.length);

      characters += sourceLowerCase;
      generatedPassword += sourceLowerCase.charAt(randomIndex);
    }
    if (input.includeUpperCase) {
      const randomIndex = Math.floor(Math.random() * sourceUpperCase.length);

      characters += sourceUpperCase;
      generatedPassword += sourceUpperCase.charAt(randomIndex);
    }
    if (input.includeSymbols) {
      const randomIndex = Math.floor(Math.random() * sourceSymbols.length);

      characters += sourceSymbols;
      generatedPassword += sourceSymbols.charAt(randomIndex);
    }

    for (let i = generatedPassword.length; i < input.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(randomIndex);
    }

    saveToLocalStorage(generatedPassword);
    setPassword(generatedPassword);
  }

  return (
    <div>
      <div className="header">
        <h1>Generate password</h1>
      </div>
      <div className="display">
        <p className="info">GENERATED PASSWORD</p>
        <div className="output">{password}</div>
      </div>

      <form action="">
        <p className="info">
          LENGTH: <span id="len_num">{input.length}</span>
        </p>
        <div className="range">
          <span>4</span>
          <input
            type="range"
            name="length"
            id="range"
            min="4"
            max="15"
            defaultValue={input.length}
            onChange={(e) => handleChange(e)}
          />
          <span>15</span>
        </div>
        <p className="info">SETTINGS</p>
        <label htmlFor="numbers">
          Include numbers
          <input
            id="numbers"
            name="numbers"
            type="checkbox"
            defaultChecked={input.includeNumbers}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="lowercase">
          Include lowercase
          <input
            id="lowercase"
            name="includeLowerCase"
            type="checkbox"
            defaultChecked={input.includeLowerCase}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="uppercase">
          Include uppercase
          <input
            id="uppercase"
            name="includeUpperCase"
            type="checkbox"
            defaultChecked={input.includeUpperCase}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="symbols">
          Include symbols
          <input
            id="symbols"
            name="includeSymbols"
            type="checkbox"
            defaultChecked={input.includeSymbols}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <input
          className="button"
          type="button"
          onClick={generatePswd}
          value="GENERATE PASSWORD"
        />
      </form>
    </div>
  );
};
