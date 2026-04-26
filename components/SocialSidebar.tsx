"use client";

import * as React from "react";
import { GitBranch, Link2, Mail, Phone, Code, Trophy, MessageSquare, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useAppHaptics } from '@/lib/haptics';
import { SOCIAL_COLORS, Z_INDEX } from '@/lib/designTokens';
import { PERSONAL_LINKS } from '@/lib/links';

const SOCIALS = [
    { name: "GitHub", icon: GitBranch, url: PERSONAL_LINKS.github, color: SOCIAL_COLORS.github },
    { name: "LinkedIn", icon: Link2, url: PERSONAL_LINKS.linkedin, color: SOCIAL_COLORS.linkedin },
    { name: "LeetCode", icon: Code, url: PERSONAL_LINKS.leetcode, color: "hover:text-yellow-500" },
    { name: "Victory Project", icon: Trophy, url: PERSONAL_LINKS.victoryProject, color: "hover:text-amber-500" },
    { name: "Email", icon: Mail, url: PERSONAL_LINKS.email, color: SOCIAL_COLORS.email },
    { name: "Phone", icon: Phone, url: PERSONAL_LINKS.phone, color: SOCIAL_COLORS.phone },
];

type Social = typeof SOCIALS[0];

const SocialLink = React.memo(function SocialLink({ social, isMobile, index, onPress }: { social: Social; isMobile?: boolean; index?: number; onPress: () => void; }) {
    if (isMobile) {
        return React.createElement('a', {
            href: social.url,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: onPress,
            className: "flex items-center justify-center w-10 h-10 bg-[var(--c-paper)] text-gray-500 transition-[color,transform] duration-200 " + social.color + " rounded-full shadow-[1px_2px_4px_rgba(0,0,0,0.15)] border-2 border-dashed border-[var(--c-grid)] dark:border-gray-600 active:scale-95 font-hand",
            title: social.name,
            "aria-label": social.name,
        }, React.createElement(social.icon, { size: 16, strokeWidth: 2.5 }));
    }
    return React.createElement('a', {
        href: social.url,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: onPress,
        className: "animate-social-link text-gray-400 transition-[color,transform] duration-300 " + social.color + " relative group hover:scale-110",
        title: social.name,
        "aria-label": social.name,
        style: { animationDelay: (0.5 + ((index ?? 0) * 0.1)) + "s" },
    },
        React.createElement('div', { className: "absolute inset-0 bg-gray-200/50 rounded-full scale-0 group-hover:scale-150 transition-transform -z-10" }),
        React.createElement(social.icon, { size: 24, strokeWidth: 2.5, className: "md:w-7 md:h-7" }),
        React.createElement('span', { className: "absolute right-full mr-4 top-1/2 -translate-y-1/2 text-sm font-hand font-bold text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded shadow-sm" }, social.name)
    );
});

const MOBILE_SOCIALS = SOCIALS.filter((s) => s.name !== "Victory Project");

const MobileThemeButton = React.memo(function MobileThemeButton({ onPress }: { onPress: () => void }) {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => { setMounted(true); }, []);
    if (!mounted) return React.createElement('div', { className: "w-10 h-10" });
    const isDark = resolvedTheme === "dark";
    return (
        <button
            onClick={() => { onPress(); setTheme(isDark ? "light" : "dark"); }}
            className="flex items-center justify-center w-10 h-10 bg-[var(--c-paper)] text-gray-500 transition-[color,transform] duration-200 hover:text-amber-500 rounded-full shadow-[1px_2px_4px_rgba(0,0,0,0.15)] border-2 border-dashed border-[var(--c-grid)] dark:border-gray-600 active:scale-95 font-hand"
            title="Toggle theme"
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
        </button>
    );
});

export default function SocialSidebar({ onFeedbackClick }: { onFeedbackClick?: () => void }) {
    const { externalLink, openPanel, toggle } = useAppHaptics();
    return (
        <>
            <div className="hidden md:flex fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex-col gap-6" role="complementary" aria-label="Social media links" style={{ zIndex: Z_INDEX.sidebar }}>
                {SOCIALS.map((social, i) => (
                    <SocialLink key={social.name} social={social} index={i} onPress={externalLink} />
                ))}
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-300 -z-20 -translate-x-1/2 hidden md:block opacity-30" />
            </div>
            <div className="md:hidden fixed bottom-4 left-[calc(50%+var(--c-binding-w)/2)] -translate-x-1/2 flex items-center gap-1.5 bg-[var(--c-paper)] px-3 py-2 rounded-full shadow-md border-2 border-dashed border-[var(--c-grid)]/50" role="complementary" aria-label="Social media links" style={{ zIndex: Z_INDEX.sidebar }}>
                <MobileThemeButton onPress={toggle} />
                {MOBILE_SOCIALS.map((social) => (
                    <SocialLink key={social.name} social={social} isMobile onPress={externalLink} />
                ))}
                {onFeedbackClick && (
                    <button onClick={() => { openPanel(); onFeedbackClick(); }} className="flex items-center justify-center w-10 h-10 bg-[var(--c-paper)] text-gray-500 hover:text-purple-600 transition-[color,transform] duration-200 rounded-full shadow-[1px_2px_4px_rgba(0,0,0,0.15)] border-2 border-dashed border-[var(--c-grid)] dark:border-gray-600 active:scale-95 font-hand" title="Send feedback" aria-label="Open feedback form">
                        <MessageSquare size={16} strokeWidth={2.5} />
                    </button>
                )}
            </div>
        </>
    );
}
