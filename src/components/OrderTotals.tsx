import { formatCurrency } from "../helpers";

type OrderTotalsType = {
  subtotalAmount: number;
  tipAmount: number;
  totalAmount: number;
  placeOrder: () => void;
};

const OrderTotals = ({
  subtotalAmount,
  tipAmount,
  totalAmount,
  placeOrder,
}: OrderTotalsType) => {
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-4xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-black"> {formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-black"> {formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar: {""}
          <span className="font-black"> {formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        {" "}
        Guardar Orden
      </button>
    </>
  );
};

export default OrderTotals;
