import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "关于 Next.js",
  description: "了解 Next.js —— 基于 React 的全栈开发框架。",
};

const features = [
  {
    title: "App Router",
    desc: "基于文件系统的路由，用文件夹与 page.tsx 即可定义路由，支持布局嵌套与状态保持。",
  },
  {
    title: "服务端组件",
    desc: "React Server Components 默认在服务端渲染，减少客户端 JS 体积，数据获取更直接。",
  },
  {
    title: "预渲染与静态生成",
    desc: "支持 SSG、SSR 与增量静态再生（ISR），在性能与动态性之间灵活取舍。",
  },
  {
    title: "内置优化",
    desc: "自动优化图片、字体与第三方脚本，开箱即用的 Core Web Vitals 体验。",
  },
  {
    title: "全栈能力",
    desc: "Route Handlers 处理接口，Server Actions 直接变更数据，前后端同库开发。",
  },
  {
    title: "流式渲染",
    desc: "借助 Suspense 与 loading.tsx 实现渐进式流式输出，首屏更快可交互。",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full max-w-3xl gap-12 px-6 py-24 bg-white dark:bg-black sm:px-16">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <section className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            关于 Next.js
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Next.js 是由 Vercel 维护的 React 全栈框架。它在 React 之上提供了路由、渲染策略、数据获取与构建优化等能力，让你能用同一套代码同时搞定前端界面与后端接口，构建从静态站点到动态应用的各种 Web 产品。
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-2 rounded-2xl border border-solid border-black/[.06] p-6 transition-colors hover:bg-zinc-50 dark:border-white/[.08] dark:hover:bg-[#111]"
            >
              <h2 className="text-base font-semibold text-black dark:text-zinc-50">
                {feature.title}
              </h2>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </section>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button
            asChild
            className="h-12 w-full rounded-full px-5 text-base md:w-[158px]"
          >
            <Link href="/">返回首页</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 w-full rounded-full px-5 text-base md:w-[158px]"
          >
            <a
              href="https://nextjs.org/docs?utm_source=about-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看官方文档
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
