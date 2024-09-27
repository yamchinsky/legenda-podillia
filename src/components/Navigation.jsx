export const Navigation = () => {
  const navItems = [
    { name: 'Головна', href: '#home' },
    { name: 'Про нас', href: '#about' },
    { name: 'Зв\'язатися з нами', href: '#contact' },
  ];

  return (
    <nav className="flex gap-5 lg:gap-10 items-center text-sm lg:text-lg font-medium whitespace-nowrap">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={`hover:text-blue-500 transition-colors ${
            index === 0 ? 'font-bold text-blue-500' : 'text-stone-900'
          }`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};
