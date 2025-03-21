import React, { useState } from 'react';
import { Switch } from 'antd';

const ChTheme = () => {
  const [menuTheme, setMenuTheme] = useState('light');

  const changeTheme = (value) => {
    setMenuTheme(value ? 'dark' : 'light');
  };

  const appStyle = {
    backgroundColor: menuTheme === 'dark' ? '#333' : '#fff', // เปลี่ยนพื้นหลัง
    color: menuTheme === 'dark' ? '#fff' : '#000', // เปลี่ยนสีฟอนต์
    padding: '20px',
    transition: 'background-color 0.3s, color 0.3s', // เพิ่มการเปลี่ยนแปลงแบบนุ่มนวล
  };

  return (
    <div style={appStyle}>
      <h1>Hello World</h1>
      <Switch
        checked={menuTheme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <p>Current theme is {menuTheme}</p>
    </div>
  );
};

export default ChTheme;
