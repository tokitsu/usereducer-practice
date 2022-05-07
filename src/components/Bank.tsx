import React, { useReducer, useState } from "react";

type State = {
  savings: number;
};

type Action =
  | { type: "DEPOSIT"; payload: number }
  | { type: "WITHDRAW"; payload: number };

const initialState = {
  savings: 10000
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        savings: state.savings + action.payload
      };
    case "WITHDRAW":
      return {
        ...state,
        savings: state.savings - action.payload
      };
    default:
      return state;
  }
};

export const Bank: React.VFC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState<number>(0);

  const onDeposit = (amount: number) => {
    dispatch({ type: "DEPOSIT", payload: amount });
    console.log(amount);
  };

  const onWithdraw = (amount: number) => {
    dispatch({ type: "WITHDRAW", payload: amount });
  };
  return (
    <div>
      <h4>残高: {state.savings.toLocaleString()}</h4>
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
        />
      </div>
      <button onClick={() => onDeposit(amount)}>預け入れ</button>
      <button onClick={() => onWithdraw(amount)}>引き出し</button>
    </div>
  );
};
