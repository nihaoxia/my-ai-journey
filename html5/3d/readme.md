# 3D

- canvas
html5 新增标签，js api绘制

## css 3d
css 属性触发3d 绘制  不止3d 还会带来GPU加速
哪怕是2d的界面 有时我们也会手动3d化
### 布局的概念 layout
- 外层盒子负责布局
- 内层盒子负责展示

### 水平垂直居中
- 父容器
   body 100%  100vh(css3新单位)
   100份（等比例）
   实现移动端的适配
   viewpoint-height
   vw viewpoint-width
- 子元素

## 行内/块级
- html 元素有两类 行内  块级
div,ul 等块级
span 行内元素
- 块级 block 盒子
   - 可以设置宽高
   - 独占一行
- 行内  inline 
    - 不能设置宽高
    - 不独占一行
- display 属性
   flex开启弹性格式上下文
   inline-block 行内块
   - 不会把兄弟挤下去
   - 又可以设置宽和高
  浏览器默认块级/行内-> display 手动切换inline或block->
  格式化上下文（flex/inline-block/grid）
     inline-block 默认有个天坑
     默认空格符会占据一定的大小

 ## 定位
 相对定位 position: relative
 绝对定位 position: absolute
     