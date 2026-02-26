import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getArticle } from "../utils/get-article";
import { markdownComponents } from "../ui/markdown-components";


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
                <div className="text-xs text-catppuccin-blue font-medium">{`${articleReadingTime} min read`}</div>
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
