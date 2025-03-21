import React from 'react';
import { Button, Divider, Space, Tooltip } from 'antd';

const colors = [
  'pink', 'red', 'yellow', 'orange', 'cyan', 
  'green', 'blue', 'purple', 'geekblue', 
  'magenta', 'volcano', 'gold', 'lime'
];

const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

const PickColor = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <Space wrap>
      {colors.map((color) => (
        <Tooltip title={color} color={color} key={color}>
          <Button style={{ backgroundColor: color, color: '#fff', border: 'none' }}>
            {color}
          </Button>
        </Tooltip>
      ))}
    </Space>

    <Divider orientation="left">Custom</Divider>
    <Space wrap>
      {customColors.map((color) => (
        <Tooltip title={color} color={color} key={color}>
          <Button style={{ backgroundColor: color, color: '#fff', border: 'none' }}>
            {color}
          </Button>
        </Tooltip>
      ))}
    </Space>
  </>
);

export default PickColor;
