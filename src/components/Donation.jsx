import { useEffect } from "react";
import { Button, message } from "antd";

export const Donation = () => {
  const handleCopy = () => {
    const requisites = `
      ЄДРПОУ 41245853
      UA253052990000026006046002285 (грн)
      UA583052990000026005036017515 (euro)
      JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
      Bank SWIFT Code: PBANUA2X
      `;
    navigator.clipboard.writeText(requisites).then(() => {
      message.success("Реквізити скопійовані!");
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-6 pt-6 bg-gray-100 min-h-screen flex flex-col items-center mt-[170px]">
      <h1 className="text-3xl font-bold mb-8">Зробіть свій внесок</h1>

      <div className="mb-8 w-full max-w-md bg-white shadow p-6 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Спасіння ЖИТТЯ військових - ПРОЗОРО
        </h2>
        <p className="mb-4">
          <strong>IBAN:</strong> UA253052990000026006046002285 (грн)<br />
          <strong>IBAN:</strong> UA583052990000026005036017515 (euro)<br />
          <strong>ЄДРПОУ:</strong> 41245853 <br />
          <strong>Банк:</strong> JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE<br />
          <strong>Bank SWIFT Code:</strong> PBANUA2X;
        </p>
        <Button onClick={() => handleCopy()}>
          Скопіювати реквізити
        </Button>
      </div>

      <div className="mb-8 w-full max-w-md bg-white shadow p-6 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Monobank Jar</h2>
        <Button
          type="primary"
          size="large"
          href="https://send.monobank.ua/jar/94DvaZBkGH"
          target="_blank"
          rel="noopener noreferrer"
        >
          Підтримати через Monobank
        </Button>
      </div>
    </div>
  );
};
