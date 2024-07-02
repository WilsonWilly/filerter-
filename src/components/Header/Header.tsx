import Image from 'next/image';

function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-black text-white">
      <div>
        <Image
          src="/images/logo.png"
          alt="Logo du site"
          width={80}
          height={80}
          priority
        />
        <div>titre de la page</div>
      </div>
      <div className="text-right">
        <div>se connecter</div>
        <div>Si admin</div>
      </div>
    </header>
  );
}

export default Header;
