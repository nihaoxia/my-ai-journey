import type { Metadata } from "next";
import Link from "next/link";

import { posts } from "./posts";

export const metadata: Metadata = {
  title: "博客",
  description: "Next.js 相关文章与笔记。",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full max-w-3xl gap-12 px-6 py-24 bg-white dark:bg-black sm:px-16">
        <section className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            博客
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            这里记录 Next.js 的学习与实践笔记。
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-solid border-black/[.06] p-6 transition-colors hover:bg-zinc-50 dark:border-white/[.08] dark:hover:bg-[#111]"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <time dateTime={post.date}>{post.date}</time>
                <span aria-hidden>·</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/[.04] px-2 py-0.5 dark:bg-white/[.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-lg font-semibold leading-7 tracking-tight text-black dark:text-zinc-50">
                {post.title}
              </h2>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>
              <span className="mt-auto text-sm font-medium text-zinc-950 transition-transform group-hover:translate-x-0.5 dark:text-zinc-50">
                阅读全文 →
              </span>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
