/**
 * 运行时渲染器
 */
const obj = {
  tag: "div",
  props: {
    id: "root",
  },
  children: [
    { tag: "span", props: { id: "text" }, children: ["Hello", "World"] },
  ],
};

function render(obj, root) {
  // 如果是字符串，直接创建文本节点
  if (typeof obj === "string") {
    root.appendChild(document.createTextNode(obj));
    return;
  }

  const element = document.createElement(obj.tag);

  // 设置属性
  if (obj.props) {
    for (const key in obj.props) {
        element.setAttribute(key, obj.props[key])
    }
  }

  // 处理 children
  if (Array.isArray(obj.children)) {
    for (const child of obj.children) {
      render(child, element);
    }
  }

  root.appendChild(element);
}

render(obj, document.body);
