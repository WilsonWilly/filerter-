import Image from 'next/image';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from '@nextui-org/react';
import SearchIcon from '@/components/SearchIcon';

const AppLogo = () => {
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
};

export default Header;
