import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    return { title: "文章未找到" };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full max-w-2xl gap-8 px-6 py-24 bg-white dark:bg-black sm:px-16">
        <Link
          href="/blog"
          className="self-start text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← 返回博客
        </Link>

        <article className="flex flex-col gap-6">
          <header className="flex flex-col gap-4 border-b border-solid border-black/[.06] pb-6 dark:border-white/[.08]">
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
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              {post.title}
            </h1>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
          </header>

          <div className="flex flex-col gap-4">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-zinc-700 dark:text-zinc-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <Link
          href="/blog"
          className="self-start text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← 返回博客
        </Link>
      </main>
    </div>
  );
}
