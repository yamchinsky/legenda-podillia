export const NotFound = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black mt-[170px]">
      <div
        className="noise absolute inset-0 pointer-events-none opacity-20 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(/src/assets/images/not-found-gif.gif)",
        }}
      ></div>
      <div className="overlay absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-transparent via-green-900 to-transparent animate-scan"></div>
      <div className="terminal mt-[-200px] text-center z-20 p-16 max-w-full w-full text-green-300 uppercase">
        <h1 className="text-5xl mb-8">
          Помилка <span className="text-white">404</span>
        </h1>
        <p className="output mb-4">
          Сторінку, яку ви шукаєте, можливо було видалено, її назву змінено або
          вона тимчасово недоступна.
        </p>
        <p className="output mb-4">
          Спробуйте{" "}
          <a href="/" className="underline text-white">
            повернутися на головну сторінку
          </a>
          .
        </p>
        <p className="output">Удачі.</p>
      </div>
    </div>
  );
};
