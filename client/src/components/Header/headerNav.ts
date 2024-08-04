interface NavLink {
  to: string;
  label: string;
  isExternal: boolean;
}

export const navLinks: NavLink[] = [
  { to: "getting-started", label: "GETTING STARTED", isExternal: false },
  { to: "shop", label: "SHOP", isExternal: true },
  { to: "contact-us", label: "CONTACT US", isExternal: false },
];

interface SocialMedia {
  link: string;
  iconClassName: string;
}

export const socialMedia: SocialMedia[] = [
  {
    link: "https://www.instagram.com/crossfitisrael/",
    iconClassName: "bi bi-instagram",
  },
  {
    link: "https://www.facebook.com/crossfitisrael.official",
    iconClassName: "bi bi-facebook",
  },
];
