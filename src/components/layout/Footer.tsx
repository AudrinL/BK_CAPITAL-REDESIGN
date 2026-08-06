import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { nav, contact } from "@/lib/content";

const socials = [
  { icon: FacebookIcon, href: contact.social.facebook, label: "Facebook" },
  { icon: TwitterIcon, href: contact.social.twitter, label: "Twitter / X" },
  { icon: LinkedInIcon, href: contact.social.linkedin, label: "LinkedIn" },
  { icon: InstagramIcon, href: contact.social.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[image:var(--gradient-dark)] text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logos/bk-capital.svg"
            alt="BK Capital"
            width={160}
            height={38}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            A subsidiary of BK Group PLC — Rwanda&apos;s largest specialist
            stockbroker and investment banking firm.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Menu
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-accent">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/services/investment-wealth-management" className="transition-colors hover:text-accent">
                Investment &amp; Wealth Management
              </Link>
            </li>
            <li>
              <Link href="/services/corporate-finance-advisory" className="transition-colors hover:text-accent">
                Corporate Finance &amp; Advisory
              </Link>
            </li>
            <li>
              <Link href="/services/securities-brokerage-market-research" className="transition-colors hover:text-accent">
                Securities Brokerage &amp; Research
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Our Contacts
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              <span>
                {contact.address}
                <br />
                {contact.poBox}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span>
                {contact.supportLine} / {contact.supportLineAlt}
              </span>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
              <span>WhatsApp: {contact.whatsapp}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-accent">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} BK Capital. All rights reserved.</p>
          <p>A subsidiary of BK Group PLC</p>
        </Container>
      </div>
    </footer>
  );
}
