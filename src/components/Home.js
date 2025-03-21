import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import Question from './Question'; // Import คอมโพเนนต์ Question
import UpImg from './up_img';
import PickColor from './pick_color';
import ChTheme from './Theme_b';


const { Header, Content, Footer } = Layout;

const items = [
  { key: '1', label: 'Question 1' }, // เมนู nav1
  { key: '2', label: 'PickColor' },
  { key: '3', label: 'Upload_image' },
  { key: '4', label: 'changeTheme' },
];

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // State สำหรับเก็บหน้า (คอนเทนต์ที่จะแสดง)
  const [currentPage, setCurrentPage] = useState('home');

  // ฟังก์ชันเพื่อเปลี่ยนหน้าเมื่อคลิกที่เมนู
  const handleMenuClick = (e) => {
    if (e.key === '1') {
      setCurrentPage('page1'); // ตั้งค่าให้แสดงหน้า page1
    } else if (e.key === '2') {
      setCurrentPage('page2');
    } else if (e.key === '3') {
      setCurrentPage('page3'); // ตั้งค่าให้แสดงหน้า page2
    } else {
      setCurrentPage('page4'); // ตั้งค่าให้แสดงหน้า home
    }
  };

  // คอนเทนต์ที่จะถูกแสดงตามหน้า
  const renderPageContent = () => {
    switch (currentPage) {
      case 'page1':
        return <Question />; // แสดงคอมโพเนนต์ Question เมื่อเลือก nav1
      case 'page2':
        return <PickColor />;
      case 'page3':
        return <UpImg />;
      case 'page4':
        return <ChTheme/>;
      default:
        return <Question />;
    }
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={handleMenuClick} // เพิ่ม event handler
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderPageContent()} {/* แสดงคอนเทนต์ที่สอดคล้องกับ state */}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
