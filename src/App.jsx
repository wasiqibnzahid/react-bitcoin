import { useEffect, useState } from "react";
import "../src/assets/style/index.css";
import BitcoinWallet from "./components/BitcoinWallet/BitcoinWallet";
import BuyAndSellBtnc from "./components/BuyAndSellBtc/BuyAndSellBtnc";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import GraphSection from "./components/Graph/GraphSection";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import { getCurrentValue } from "./api/CoinData";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCoinBalance() {
    try {
      setIsLoading(true);
      await getCurrentValue().then((res) => {
        setCurrentValue(res.bitcoin.usd);
        setIsLoading(false);
      });
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchCoinBalance();
  }, []);
  return (
    <>
      <NavigationMenu />
      <main className="overflow-hidden mainBody">
        <BitcoinWallet loading={isLoading} coinValue={currentValue} />
        <GraphSection coinValue={currentValue} />
        <BuyAndSellBtnc />
      </main>
      <FooterMenu />
    </>
  );
}

export default App;
