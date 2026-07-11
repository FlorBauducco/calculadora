import MenuItem from "./components/MenuItem";
import OrderContets from "./components/OrderContets";
import OrderTotal from "./components/OrderTotal";
import TipPercentangeForm from "./components/TipPercentangeForm";
import { menuItems } from "./data/db";
import useOrder from "./hook/useOrder";

function App() {
  const { order, addItem, removeItem, tip, setTip } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas & Consumos
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black "> Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 rounded-lg space-y-10">
          <OrderContets order={order} removeItem={removeItem} />
          <TipPercentangeForm setTip={setTip} />
          <OrderTotal order={order} tip={tip} />
        </div>
      </main>
    </>
  );
}

export default App;
