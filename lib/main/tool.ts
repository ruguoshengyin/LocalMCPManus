import fs from 'fs';
import path from 'path';
import { app } from 'electron';

// 定义数据文件路径到用户的/Documents/lmm目录
const dataDirPath = path.join(app.getPath('documents'), 'lmm');
const dataFilePath = path.join(dataDirPath, 'toolsData.json');

// 保存工具数据到本地文件
export function saveToolsData(toolsData: any) {
  // 确保目录存在
  if (!fs.existsSync(dataDirPath)) {
    fs.mkdirSync(dataDirPath, { recursive: true });
  }
  fs.writeFileSync(dataFilePath, JSON.stringify(toolsData, null, 2), 'utf-8');
}

// 从本地文件读取工具数据
export function readToolsData() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      // 如果文件不存在，返回空数组
      console.log("没有找到: ",dataFilePath)
      return [];
    }
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('读取工具数据失败:', error);
    return [];
  }
}