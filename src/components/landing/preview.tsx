import { Article } from '../../types/article';

interface ArticlePreviewProps {
  date: Article['date'];
  content: Article['content'];
  tags: Article['tags'];
  title: Article['title'];
}

export default function ArticlePreview({ date, content, tags, title }: ArticlePreviewProps) {
  return (
        <div className="w-[400px] border border-border rounded-lg bg-card overflow-hidden">
          <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-catppuccin-red"></div>
                <div className="w-3 h-3 rounded-full bg-catppuccin-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-catppuccin-green"></div>
              </div>
              <span className="text-xs text-muted-foreground ml-2">PREVIEW_MODE</span>
            </div>
            <span className="text-xs text-catppuccin-yellow">UTF-8</span>
          </div>

          <div className="p-4 text-sm overflow-y-auto max-h-[500px]">
            <h1 className="text-catppuccin-mauve text-xl font-bold mb-2">{title}</h1>
            
            <div className="flex items-center gap-3 text-xs text-terminal-gray mb-4">
              <span className="flex items-center gap-1">
                <span className="text-catppuccin-blue">📅</span>
                {date.toString()}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-catppuccin-red">👤</span>
                guest
              </span>
              <span className="flex items-center gap-1">
                <span className="text-catppuccin-green">🏷️</span>
                {tags.map((tag, i) => <span key={i}>{tag}</span>)}
              </span>
            </div>
            <p>{content}</p>

            <p className="text-terminal-gray text-xs border-t border-border pt-2">
              -- End of preview --
            </p>
          </div>

          {/* <div className="bg-muted px-4 py-2 border-t border-border flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <span className="text-catppuccin-blue">📁 master</span>
              <span className="text-muted-foreground">unix</span>
              <span className="text-muted-foreground">utf-8</span>
              <span className="text-catppuccin-yellow">5 files, 2 dirs</span>
            </div>
            <span className="text-catppuccin-teal">15:42</span>
          </div> */}
        </div>
  )
}
