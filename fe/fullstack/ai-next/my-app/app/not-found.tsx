import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 - 页面未找到",
  description: "您访问的页面不存在或已被移动。",
};

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full max-w-2xl items-center gap-8 px-6 py-32 text-center bg-white dark:bg-black sm:px-16">
        <p className="text-7xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-8xl">
          404
        </p>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            页面走丢了
          </h1>
          <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
            抱歉，您访问的页面不存在或已被移动。请检查地址是否正确，或返回首页继续浏览。
          </p>
        </div>
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
            <Link href="/about">关于 Next.js</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
