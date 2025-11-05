# Figma 转代码规则使用指南

## 📖 简介

本项目配置了完整的 Figma 转代码规则，用于指导 Figma-Context-MCP 工具将设计稿转换为高质量的 React + TypeScript 代码。

## 📁 规则文件说明

### 1. `.figma-code-rules.md`
主要的代码生成规则文档，包含：
- 项目架构规范
- 设计规范转换规则
- 组件开发规范
- 响应式设计规则
- 代码质量规范

### 2. `.figma-component-rules.md`
组件映射和生成规则，包含：
- Figma 元素到 React 组件的映射表
- 组件识别规则
- 组件生成模板
- 样式转换规则

### 3. `.figma-style-rules.md`
样式转换详细规则，包含：
- 设计 Token 转换（颜色、间距、字体等）
- 布局转换规则
- 响应式断点定义
- CSS Modules 使用规范

### 4. `figma-mcp-config.json`
MCP 工具配置文件，包含：
- 项目配置
- 代码生成设置
- 设计 Token 定义
- 组件映射规则

## 🚀 使用方法

### 1. 使用 Figma-Context-MCP 时引用规则

在调用 Figma MCP 工具时，系统会自动读取这些规则文件。你可以这样提示：

```
请参考项目中的 .figma-code-rules.md、.figma-component-rules.md 和 .figma-style-rules.md 文件中的规则，将 Figma 设计稿转换为代码。
```

### 2. 直接使用配置

MCP 工具会读取 `figma-mcp-config.json` 配置文件，自动应用以下设置：
- 组件命名规范
- 文件组织结构
- 设计 Token 定义
- 响应式断点

## 📋 快速检查清单

生成代码后，请检查：

- [ ] **类型定义**: 所有组件都有完整的 TypeScript 接口
- [ ] **样式规范**: 使用 CSS Modules 和 CSS 变量
- [ ] **响应式**: 实现了移动端适配
- [ ] **可访问性**: 有 aria-label、alt 等属性
- [ ] **性能**: 图片懒加载、代码分割
- [ ] **代码质量**: 通过 ESLint 检查

## 🎨 设计 Token 使用示例

### 在代码中使用 CSS 变量

```css
/* 使用预定义的设计 Token */
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  box-shadow: var(--shadow-md);
}
```

### 在组件中使用

```tsx
import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
```

## 🔧 自定义规则

如果需要修改规则，可以编辑以下文件：

1. **修改代码风格**: 编辑 `.figma-code-rules.md`
2. **修改组件映射**: 编辑 `.figma-component-rules.md`
3. **修改样式规则**: 编辑 `.figma-style-rules.md`
4. **修改 MCP 配置**: 编辑 `figma-mcp-config.json`

## 📚 参考资源

- [Ant Design 设计规范](https://ant.design/docs/spec/introduce-cn)
- [Element Plus 设计指南](https://element-plus.org/zh-CN/guide/design.html)
- [React TypeScript 最佳实践](https://react-typescript-cheatsheet.netlify.app/)

## 💡 最佳实践

1. **保持一致性**: 始终遵循已定义的命名规范和代码风格
2. **使用设计 Token**: 避免硬编码颜色、间距等值
3. **组件化思维**: 将复杂设计拆分为可复用组件
4. **响应式优先**: 从移动端开始设计，逐步扩展到桌面端
5. **可访问性**: 始终考虑键盘导航和屏幕阅读器支持

## 🐛 常见问题

### Q: 如何添加新的组件类型映射？
A: 在 `.figma-component-rules.md` 的"组件映射表"部分添加新的映射关系。

### Q: 如何修改设计 Token？
A: 在 `figma-mcp-config.json` 的 `designTokens` 部分修改，并同步更新 `.figma-style-rules.md`。

### Q: 如何添加新的代码质量规则？
A: 在 `.figma-code-rules.md` 的"代码质量规范"部分添加新规则。

## 📞 支持

如有问题或建议，请查看项目文档或提交 Issue。

