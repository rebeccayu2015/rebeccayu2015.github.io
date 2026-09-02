import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/rebeccayu2015",
        linkTitle: `Rebecca Yu on GitHub`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/rebecca-j-yu/",
        linkTitle: `Rebecca Yu on LinkedIn`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    LinkedIn: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
};
