import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export const metadata = {
  title: "Crash",
};

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <AnimatedThemeToggler variant="circle" />
    </main>
  );
}
