import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Ideology", href: "/#ethos" },
          { title: "Features", href: "/#features" },
          { title: "Github", href: "https://github.com/LPX55", external: true },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtFor="Onboard Hackathon @ Taipei BW 2024"
        builtForLink="https://www.taipeiblockchainweek.com/"
        githubLink="https://github.com/LPX55"
        twitterLink="https://twitter.com/LPX_404"
        linkedinLink="https://www.linkedin.com/in/hanyoon1/"
      />
    </div>
  );
}
