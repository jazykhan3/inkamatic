"use client";
import Image from "next/image";
import React, { useReducer, useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Input, Space } from 'antd';
import { useRouter } from "next/navigation";
import './index.css'

class MenuItem {
  label: React.ReactNode;
  key: string;

  constructor(label: React.ReactNode, key: string) {
    this.label = label;
    this.key = key;
  }
}

function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const items: MenuProps['items'] = [
    new MenuItem(<a href="https://www.antgroup.com">1st menu item</a>, '0'),
    new MenuItem(<a href="https://www.aliyun.com">2nd menu item</a>, '1'),
    { type: 'divider' },
    new MenuItem('3rd menu item', '3'),
  ];

  const dropdowns = [
    { text: 'Banking & Savings', icon: <img src="/arrow-down.png" width={16} height={16} alt="arrown-down" className="text-sm mt-1" /> },
    { text: 'Investing', icon: <img src="/arrow-down.png" width={16} height={16} alt="arrown-down" className="text-sm mt-1" />  },
    { text: 'Offers', icon: <img src="/arrow-down.png" width={16} height={16} alt="arrown-down" className="text-sm mt-1" />   },
    { text: 'Get Free Stocks', icon: <img src="/arrow-down.png" width={16} height={16} alt="arrown-down" className="text-sm mt-1" /> },
  ];

  return (
    <div className="m-auto w-11/12 h-[100px] flex items-center border-b border-[#25314633] justify-between">
      <div className="flex items-start gap-[1.5rem]">
        <Image
          src={"/logo.png"}
          className=" cursor-pointer"
          width={178}
          height={30}
          priority
          alt="logo"
          onClick={()=>{router.push('/')}}
        />
            <Input className="hidden lg:flex w-[20rem] rounded-full h-11 bg-[#2531460D] searchBar" placeholder="Search" prefix={<Image src={'/search.png'} height={20} width={20} alt=""/>} />

      </div>
      <div>
      <div className="lg:hidden flex items-center " >
        <Image src={'/search.png'} height={20} width={20} alt=""/>
          <button
            onClick={toggleMobileMenu}
            className="flex items-center justify-center p-2"
          >
        <Image src={'/menu.png'} height={20} width={20} alt=""/>
          </button>
        </div>
        <ul className=" hidden lg:flex items-center gap-[30px] text-[#253146BF]">
          <li className="text-[#253146BF] text-base cursor-pointer" onClick={()=>{router.push('/')}}>Home</li>
          {dropdowns.map((dropdown, index) => (
            <li key={index}>
              <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="text-[#253146BF] text-base cursor-pointer">
                    {dropdown.text}
                    {dropdown.icon}
                  </Space>
                </a>
              </Dropdown>
            </li>
          ))}
        </ul>
        {isMobileMenuOpen && (
        <div className="lg:hidden z-[2] absolute top-16 right-4 bg-white shadow-md rounded-md p-4">
       <ul className=" items-center gap-[30px] text-[#253146BF]">
          <li className="text-[#253146BF] text-base cursor-pointer" onClick={()=>{router.push('/')}}>Home</li>
          {dropdowns.map((dropdown, index) => (
            <li key={index}>
              <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="text-[#253146BF] text-base cursor-pointer">
                    {dropdown.text}
                    {dropdown.icon}
                  </Space>
                </a>
              </Dropdown>
            </li>
          ))}
        </ul>
        </div>
      )}
      </div>
    </div>
  );
}

export default Navbar;
