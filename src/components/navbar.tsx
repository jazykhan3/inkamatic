"use client";
import Image from "next/image";
import React from "react";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

class MenuItem {
  label: React.ReactNode;
  key: string;

  constructor(label: React.ReactNode, key: string) {
    this.label = label;
    this.key = key;
  }
}

function Navbar() {
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
    <div className="m-auto w-4/5 h-[100px] flex items-center border-b border-[#25314633] justify-between">
      <div>
        <Image
          src={"/logo.png"}
          className="dark:invert"
          width={178}
          height={30}
          priority
          alt="logo"
        />
      </div>
      <div>
        <ul className="flex items-center gap-[30px] text-[#253146BF]">
          <li className="text-[#253146BF] text-base">Home</li>
          {dropdowns.map((dropdown, index) => (
            <li key={index}>
              <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="text-[#253146BF] text-base">
                    {dropdown.text}
                    {dropdown.icon}
                  </Space>
                </a>
              </Dropdown>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
