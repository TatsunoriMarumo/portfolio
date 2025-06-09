import Portfolio from "@/components/portfolio";
import ProfileSection from "@/components/profile-section";
import LanguageSwitcher from "@/components/language-switcher";

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <div className="flex justify-end mb-4">
        <LanguageSwitcher />
      </div>
      <ProfileSection />
      <Portfolio />
    </main>
  );
}
