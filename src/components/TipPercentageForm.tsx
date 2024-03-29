import { tipOptions } from "../data/db";
import { Dispatch, SetStateAction } from "react";
type TipPercentageFormType = {
  setTip: Dispatch<SetStateAction<number>>;
};
const TipPercentageForm = ({ setTip }: TipPercentageFormType) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <h3 className="font-black text-2xl"></h3>
      <form>
        {tipOptions.map((tip) => (
          <div
            key={tip.id}
            className="flex gap-2"
          >
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              type="radio"
              id={tip.id}
              name="tip"
              value={tip.value}
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPercentageForm;
