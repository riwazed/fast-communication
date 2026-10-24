"use client";

import { useState, useMemo } from "react";
import {
  Server,
  Tv,
  Film,
  Search,
  ExternalLink,
  Copy,
  Check,
  Layers,
  Radio,
  Globe,
  Hash,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { FTP_SERVERS, LIVE_TV_SERVERS } from "@/lib/ftp";

interface FtpDirectoryClientProps {
  ftpServers: typeof FTP_SERVERS;
  tvServers: typeof LIVE_TV_SERVERS;
}

export default function FtpDirectoryClient({
  ftpServers,
  tvServers,
}: FtpDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "ftp" | "tv">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const filteredFtpServers = useMemo(() => {
    if (!searchQuery.trim()) return ftpServers;
    const query = searchQuery.toLowerCase().trim();
    return ftpServers.filter(
      (server) =>
        server.name.toLowerCase().includes(query) ||
        server.address.toLowerCase().includes(query) ||
        server.description.toLowerCase().includes(query),
    );
  }, [searchQuery, ftpServers]);

  const filteredTvServers = useMemo(() => {
    if (!searchQuery.trim()) return tvServers;
    const query = searchQuery.toLowerCase().trim();
    return tvServers.filter(
      (server) =>
        server.name.toLowerCase().includes(query) ||
        server.address.toLowerCase().includes(query) ||
        server.description.toLowerCase().includes(query) ||
        server.channels.toLowerCase().includes(query),
    );
  }, [searchQuery, tvServers]);

  const totalFilteredCount =
    (activeTab === "all" || activeTab === "ftp"
      ? filteredFtpServers.length
      : 0) +
    (activeTab === "all" || activeTab === "tv" ? filteredTvServers.length : 0);

  return (
    <section
      id="servers-directory"
      aria-labelledby="directory-heading"
      className="flex flex-col gap-8 scroll-mt-24"
    >
      {/* Controls: Search & Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2
            id="directory-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            লোকাল BDIX সার্ভার ও চ্যানেল ডিরেক্টরি
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {totalFilteredCount} টি সার্ভার ও লাইভ টিভি চ্যানেল উপলব্ধ রয়েছে
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="সার্ভার বা চ্যানেল খুঁজুন..."
            className="h-10 w-full rounded-xl border border-border/80 bg-card/80 dark:bg-card/50 pl-10 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 backdrop-blur-sm transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-medium"
              aria-label="সার্চ ক্লিয়ার করুন"
            >
              মুছুন
            </button>
          )}
        </div>
      </div>

      {/* Tab Filters */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-4">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
            activeTab === "all"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "border border-border/60 bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Layers className="size-4" />
          <span>সকল সার্ভার ({ftpServers.length + tvServers.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ftp")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
            activeTab === "ftp"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "border border-border/60 bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Server className="size-4" />
          <span>FTP মুভি সার্ভার ({ftpServers.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("tv")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
            activeTab === "tv"
              ? "bg-brand-orange text-white shadow-sm"
              : "border border-border/60 bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Tv className="size-4" />
          <span>লাইভ টিভি চ্যানেল ({tvServers.length})</span>
        </button>
      </div>

      {/* Empty Search Result */}
      {totalFilteredCount === 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card/40 p-12 text-center">
          <Search className="size-10 text-muted-foreground/60 mb-3" />
          <h3 className="text-lg font-bold text-foreground">
            কোনো সার্ভার খুঁজে পাওয়া যায়নি
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mt-1 mb-4">
            &quot;{searchQuery}&quot; দিয়ে কোনো ফলাফল পাওয়া যায়নি। অনুগ্রহ করে
            নাম বা আইপি অ্যাড্রেস পুনরায় চেক করুন।
          </p>
          <Button
            variant="outline"
            onClick={() => setSearchQuery("")}
            className="rounded-xl border-border hover:bg-muted"
          >
            সব সার্ভার পুনরায় দেখুন
          </Button>
        </div>
      )}

      {/* =====================================================================
          FTP SERVERS SUBSECTION
          ===================================================================== */}
      {(activeTab === "all" || activeTab === "ftp") &&
        filteredFtpServers.length > 0 && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Film className="size-4" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  FTP মুভি ও ফাইল সার্ভারসমূহ ({filteredFtpServers.length}টি)
                </h3>
              </div>
              <span className="text-xs text-muted-foreground hidden sm:inline-block">
                ২০০+ Mbps পর্যন্ত বাফারিংহীন স্ট্রিমিং ও ডাউনলোড
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFtpServers.map((server) => {
                const isCopied = copiedId === `ftp-${server.id}`;
                return (
                  <article
                    key={`ftp-${server.id}`}
                    className="group relative flex flex-col justify-between rounded-2xl border border-border/75 bg-card/80 dark:bg-card/50 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex flex-col gap-3">
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                            <Server className="size-4.5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                              {server.name}
                            </h4>
                            <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                              {server.type === "ip" ? (
                                <>
                                  <Hash className="size-3 text-brand-orange" />
                                  <span>লোকাল আইপি সার্ভার</span>
                                </>
                              ) : (
                                <>
                                  <Globe className="size-3 text-primary" />
                                  <span>BDIX ডোমেন</span>
                                </>
                              )}
                            </span>
                          </div>
                        </div>

                        <Badge
                          variant="outline"
                          className="text-[10px] uppercase font-mono tracking-wider border-border/70 text-muted-foreground bg-muted/50"
                        >
                          {server.type}
                        </Badge>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {server.description}
                      </p>

                      {/* Address Box */}
                      <div className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-1.5 font-mono text-xs text-foreground/90 border border-border/40">
                        <span className="truncate pr-2">{server.address}</span>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopy(`ftp-${server.id}`, server.address)
                          }
                          className="shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
                          title="ঠিকানা কপি করুন"
                          aria-label={`${server.name} এর ঠিকানা কপি করুন`}
                        >
                          {isCopied ? (
                            <Check className="size-3.5 text-primary" />
                          ) : (
                            <Copy className="size-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(`ftp-${server.id}`, server.address)
                        }
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {isCopied ? (
                          <>
                            <Check className="size-3 text-primary" />
                            <span className="text-primary font-medium">
                              কপি হয়েছে!
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3" />
                            <span>লিংক কপি</span>
                          </>
                        )}
                      </button>

                      <a
                        href={server.address}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <span>সার্ভার ওপেন</span>
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

      {/* =====================================================================
          LIVE TV SUBSECTION
          ===================================================================== */}
      {(activeTab === "all" || activeTab === "tv") &&
        filteredTvServers.length > 0 && (
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <Radio className="size-4" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  লাইভ টিভি পোর্টাল ও চ্যানেলসমূহ ({filteredTvServers.length}টি)
                </h3>
              </div>
              <span className="text-xs text-muted-foreground hidden sm:inline-block">
                সরাসরি লাইভ স্পোর্টস, নিউজ ও বিনোদন চ্যানেল
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTvServers.map((server) => {
                const isCopied = copiedId === `tv-${server.id}`;
                return (
                  <article
                    key={`tv-${server.id}`}
                    className="group relative flex flex-col justify-between rounded-2xl border border-border/75 bg-card/80 dark:bg-card/50 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-lg hover:shadow-brand-orange/5"
                  >
                    <div className="flex flex-col gap-3">
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="flex size-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange shrink-0">
                            <Tv className="size-4.5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-foreground group-hover:text-brand-orange transition-colors">
                                {server.name}
                              </h4>
                              {/* Live broadcast dot */}
                              <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                              </span>
                            </div>
                            <span className="text-[11px] text-muted-foreground">
                              {server.description}
                            </span>
                          </div>
                        </div>

                        <Badge
                          variant="outline"
                          className="text-[11px] border-brand-orange/30 text-brand-orange bg-brand-orange/5 font-semibold"
                        >
                          {server.channels}
                        </Badge>
                      </div>

                      {/* Address Box */}
                      <div className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-1.5 font-mono text-xs text-foreground/90 border border-border/40">
                        <span className="truncate pr-2">{server.address}</span>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopy(`tv-${server.id}`, server.address)
                          }
                          className="shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
                          title="টিভি সার্ভার আইপি কপি করুন"
                          aria-label={`${server.name} এর আইপি কপি করুন`}
                        >
                          {isCopied ? (
                            <Check className="size-3.5 text-brand-orange" />
                          ) : (
                            <Copy className="size-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(`tv-${server.id}`, server.address)
                        }
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {isCopied ? (
                          <>
                            <Check className="size-3 text-brand-orange" />
                            <span className="text-brand-orange font-medium">
                              কপি হয়েছে!
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3" />
                            <span>আইপি কপি</span>
                          </>
                        )}
                      </button>

                      <a
                        href={server.address}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange/10 px-3 py-1.5 text-xs font-semibold text-brand-orange hover:bg-brand-orange hover:text-white transition-all"
                      >
                        <span>টিভি দেখুন</span>
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
    </section>
  );
}
