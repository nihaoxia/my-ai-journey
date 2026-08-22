export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "getting-started-with-app-router",
    title: "初识 Next.js App Router",
    date: "2026-08-10",
    tags: ["路由", "入门"],
    excerpt:
      "App Router 用文件夹与 page.tsx 定义路由，支持嵌套布局与状态保持。本文从目录结构出发，带你理解文件系统路由、布局嵌套与 Link 导航的核心概念。",
    content: [
      "App Router 是 Next.js 引入的新一代路由模型，取代了早期的 Pages Router。它以 React 服务端组件为基础，把路由、布局、数据获取统一在同一棵组件树中，让全栈开发更接近 React 本来的心智模型。",
      "文件系统路由是 App Router 的核心。在 app 目录下，文件夹映射 URL 段，page.tsx 让该段成为可访问路由。例如 app/blog/page.tsx 对应 /blog，app/blog/[slug]/page.tsx 对应单篇文章。文件夹本身不产生路由，只有放了 page.tsx 才对外公开。",
      "布局嵌套让多页面共享 UI。layout.tsx 会包裹同段及其子段的页面，并且嵌套层级与文件夹层级一致。更关键的是：导航切换页面时，layout 不会重新渲染，状态得以保留，交互也不会中断。",
      "导航推荐使用 next/link 的 Link 组件。它在原生 <a> 之上增加了客户端路由切换与预取能力，点击后不会整页刷新。对于程序化跳转，则可以使用 useRouter 钩子，例如表单提交后重定向。",
      "动态路由用方括号包裹的文件夹实现，如 [slug]。配合 generateStaticParams 可在构建时预生成路径，既享受静态站点的速度，又能按数据驱动生成页面。当路径不存在时，调用 notFound() 即可渲染 404 页面。",
    ],
  },
  {
    slug: "understanding-react-server-components",
    title: "深入理解 React 服务端组件",
    date: "2026-08-18",
    tags: ["RSC", "进阶"],
    excerpt:
      "服务端组件默认在服务端渲染，能直接访问数据源并减少客户端 JS 体积。本文梳理 RSC 的执行模型、与 Client Component 的边界划分，以及数据获取的最佳实践。",
    content: [
      "React 服务端组件（Server Components）在服务端执行，输出的是序列化后的 React 树，而非 HTML 片段。这意味着组件可以直接读取数据库、文件系统或内部服务，而不必把这些逻辑搬到客户端，也无需通过 API 中转。",
      "在 App Router 中，组件默认就是服务端组件。你可以在组件体内直接使用 async/await 获取数据，就像写普通异步函数一样。数据获取与渲染合二为一，省去了 useEffect 加 state 的样板代码，也避免了请求瀑布。",
      "客户端组件需要用 'use client' 指令显式声明。它适用于需要交互、状态或浏览器 API 的场景：事件处理、useState、useEffect、路由钩子等。'use client' 不是把整个组件树都搬上客户端，它只是划定一条边界，边界以上的服务端组件仍在服务端执行。",
      "划分边界的一个实用原则：从叶子节点（最需要交互的组件）开始标记 'use client'，让上层尽量保持服务端组件。这样能最大化留在服务端的部分，减少打包到客户端的 JS 体积，首屏更快可交互。",
      "数据获取上，服务端组件可以直接 await，而客户端组件则需要通过 props 接收或用 SWR/React Query 等库。把数据获取尽量放在服务端组件，再把结果作为 props 传给客户端组件，是一种清晰且高效的组织方式。",
    ],
  },
];
