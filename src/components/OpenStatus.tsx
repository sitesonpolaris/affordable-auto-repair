"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Status = { open: boolean; label: string; today: number };

function nowInGastonia() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

const toMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3));
const fmt = (t: string) => {
  const h = Number(t.slice(0, 2));
  const m = t.slice(3);
  return `${((h + 11) % 12) + 1}:${m} ${h < 12 ? "AM" : "PM"}`;
};

function compute(): Status {
  const { day, minutes } = nowInGastonia();
  const row = site.hours.find((h) => h.d === day);
  if (row?.open && row.close && minutes >= toMin(row.open) && minutes < toMin(row.close)) {
    return { open: true, label: `Open now · until ${fmt(row.close)}`, today: day };
  }
  for (let i = 0; i < 8; i++) {
    const d = (day + i) % 7;
    const r = site.hours.find((h) => h.d === d);
    if (!r?.open) continue;
    if (i === 0 && minutes >= toMin(r.open)) continue;
    const when = i === 0 ? "today" : i === 1 ? "tomorrow" : r.day;
    return { open: false, label: `Closed · opens ${fmt(r.open)} ${when}`, today: day };
  }
  return { open: false, label: "Closed", today: day };
}

export function OpenStatus({ className }: { className?: string }) {
  const [s, setS] = useState<Status | null>(null);
  useEffect(() => {
    setS(compute());
    const id = setInterval(() => setS(compute()), 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={className} data-open={s?.open ?? undefined} aria-live="polite">
      <i aria-hidden="true" />
      {s ? s.label : "Mon–Fri · 7:30 AM–5:30 PM"}
    </span>
  );
}

export function TodayMarker() {
  useEffect(() => {
    const { day } = nowInGastonia();
    document.querySelector(`[data-day="${day}"]`)?.setAttribute("data-today", "");
  }, []);
  return null;
}
