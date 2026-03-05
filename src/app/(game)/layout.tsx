import { HydrationGuard } from '@/components/shared/HydrationGuard';

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <HydrationGuard>
      <div className="h-dvh bg-gradient-to-b from-sky-100 to-sky-200 flex flex-col overflow-hidden">
        <div className="flex-1 w-full max-w-md mx-auto flex flex-col min-h-0 overflow-y-auto">
          {children}
        </div>
      </div>
    </HydrationGuard>
  );
}
