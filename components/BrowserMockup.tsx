"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface BrowserMockupProps {
  url: string;
  title: string;
}

function formatDisplayUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname + parsed.pathname.replace(/\/$/, "");
  } catch {
    return url;
  }
}

export default function BrowserMockup({ url, title }: BrowserMockupProps) {
  const [iframeFailed, setIframeFailed] = useState(false);

  return (
    <div className="overflow-hidden rounded-t-lg border-b border-white/[0.06]">
      <div
        className="flex items-center gap-3 px-3 py-2.5"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="min-w-0 flex-1 rounded-md bg-black/40 px-3 py-1">
          <p className="truncate font-mono text-[10px] text-white/50 sm:text-xs">
            {formatDisplayUrl(url)}
          </p>
        </div>
      </div>

      <div className="relative h-[200px] w-full overflow-hidden bg-[#0A1628]">
        {!iframeFailed ? (
          <>
            <iframe
              src={url}
              title={`${title} live preview`}
              className="pointer-events-none h-[200px] w-full border-0"
              loading="lazy"
              scrolling="no"
              tabIndex={-1}
              onError={() => setIframeFailed(true)}
            />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-[1] flex items-end justify-center bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent pb-3 opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100"
              aria-label={`Open ${title} in a new tab`}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#1A1A1A]/90 px-3 py-1.5 text-xs text-gold backdrop-blur-sm">
                Open live site
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </span>
            </a>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
            <p className="text-sm text-white/60">
              Preview unavailable — site blocks embedding
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gold transition-colors hover:text-gold-light"
            >
              Open {title}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
