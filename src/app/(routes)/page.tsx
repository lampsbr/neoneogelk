import MainMenu from "@/components/main-menu";
import { auth } from "@/lib/auth/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>main content</div>
      <MainMenu />
    </main>
  );
}
