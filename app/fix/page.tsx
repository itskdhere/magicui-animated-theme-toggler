import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler-patched";

export const metadata = {
  title: "Fix",
};

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <AnimatedThemeToggler variant="circle" />
    </main>
  );
}
