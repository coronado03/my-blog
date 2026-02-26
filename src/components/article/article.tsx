import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { getArticle } from "../utils/get-article";

const totalLines = 142;

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-foreground leading-tight mb-5 tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-foreground mb-4 mt-8 flex items-center gap-2.5">
      <span className="text-catppuccin-blue">##</span>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-bold text-foreground mb-3 mt-6 flex items-center gap-2">
      <span className="text-catppuccin-mauve">###</span>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-sm leading-relaxed text-terminal-light mb-6">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-catppuccin-sapphire border-b border-catppuccin-sapphire hover:text-catppuccin-blue hover:border-catppuccin-blue transition-colors"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <div className="border-l-[3px] border-catppuccin-mauve bg-card px-6 py-4 mb-6 [&>p]:mb-0">
      <div className="italic text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  ),
  code: ({ children, className }) => {
    const isBlock = Boolean(className?.includes("language-"));
    if (isBlock) {
      return (
        <pre className="bg-terminal-dark border border-muted px-5 py-4 mb-6 overflow-x-auto">
          <code className="text-xs text-catppuccin-green leading-relaxed">{children}</code>
        </pre>
      );
    }
    return (
      <code className="text-catppuccin-peach bg-terminal-dark px-1.5 py-0.5 text-xs">
        {children}
      </code>
    );
  },
  pre: ({ children }) => <>{children}</>,
  ul: ({ children }) => (
    <ul className="text-sm text-terminal-light mb-6 space-y-1.5 ml-4">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="text-sm text-terminal-light mb-6 space-y-1.5 ml-4">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2">
      <span className="text-catppuccin-blue mt-0.5 shrink-0">-</span>
      <span>{children}</span>
    </li>
  ),
  hr: () => <hr className="border-t border-muted my-8" />,
  strong: ({ children }) => (
    <strong className="text-catppuccin-yellow font-bold">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-catppuccin-flamingo italic">{children}</em>
  ),
  img: ({ src, alt }) => (
    <div className="border border-muted mb-6 bg-terminal-dark overflow-hidden">
      <img src={src} alt={alt} className="w-full object-cover max-h-72" />
      {alt && (
        <div className="text-center text-[11px] text-terminal-gray py-2 px-4 border-t border-muted tracking-wide">
          {alt}
        </div>
      )}
    </div>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border border-muted">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-card text-catppuccin-blue border-b border-muted">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-muted last:border-0 hover:bg-card transition-colors">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 text-left font-bold tracking-wide text-[11px] uppercase">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2 text-terminal-light">{children}</td>
  ),
};

type ArticleProps = {
  fileName: string;
};

export default function Article({ fileName }: ArticleProps) {
  const article = getArticle(fileName);
  const articleReadingTime = Math.floor(article.content.length/200)

  const NewLineCount  = (article.content.match(/\n/g) || []).length + 13;
  const lineNums = Array.from({ length: NewLineCount }, (_, i) => i + 1);
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-mono text-sm">
    { /* TO BE IMPLEMENTED LATER
      <div className="flex items-center gap-4 px-4 py-1.5 bg-card border-b border-muted text-xs text-muted-foreground shrink-0">
        <span className="text-catppuccin-green font-bold tracking-wide">USER@SYSTEM</span>
        <span className="text-muted">|</span>
        <span className="text-terminal-light">~/articles/modern-design.md</span>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-terminal-gray tracking-widest">-- READ-ONLY --</span>
          <span className="text-catppuccin-blue font-bold">15%</span>
        </div>
      </div>
      */
    }

      <div className="flex flex-1 overflow-hidden">
        <div className="w-12 shrink-0 py-3 bg-background border-r border-muted flex flex-col items-end pr-2.5">
          {lineNums.map((n) => (
            <div key={n} className="text-[11px] text-muted leading-[22px] min-h-[22px] select-none">
              {String(n).padStart(2, "0")}
            </div>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto py-3 pb-10">
          <div className="max-w-3xl mx-auto px-8">
            <div className="grid grid-cols-3 border border-muted bg-card px-5 py-3.5 mb-8">
              <div>
                <div className="text-[10px] text-terminal-gray tracking-[1.5px] uppercase mb-1">Reading Time</div>
                <div className="text-xs text-catppuccin-blue font-medium">{`${articleReadingTime} min read` ?? "~ 5 min read"}</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-gray tracking-[1.5px] uppercase mb-1">Last Modified</div>
                <div className="text-xs text-catppuccin-blue font-medium">{article.date ?? "—"}</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-gray tracking-[1.5px] uppercase mb-1">Tags</div>
                <div className="flex gap-2 flex-wrap">
                  {(article.tags ?? []).map((t: string) => (
                    <span key={t} className="text-xs text-catppuccin-mauve">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <ReactMarkdown components={markdownComponents}>
              {article.content}
            </ReactMarkdown>

            <Link href="/">
              <button className="terminal-button text-xs px-4 py-1.5 mt-4">
                ← Go back to Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
      { /* Commented out for now feature will be implemented later :)
           
      <div className="flex items-center gap-4 px-4 py-1.5 bg-card border-t border-muted text-xs text-terminal-gray shrink-0">
        <span className="text-terminal-light">: lines 1-45/{totalLines} (15%)</span>
        <span className="text-muted">|</span>
        <span>
          press{" "}
          <kbd className="bg-muted text-foreground px-1.5 py-0.5 rounded-sm font-bold text-[11px]">q</kbd>
          {" "}to return,{" "}
          <kbd className="bg-muted text-foreground px-1.5 py-0.5 rounded-sm font-bold text-[11px]">space</kbd>
          {" "}to scroll
        </span>
      </div>
      */}
    </div>
  );
}
