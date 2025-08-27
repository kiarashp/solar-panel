import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <span className="relative flex h-16 w-16">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40 dark:bg-accent"></span>
        <span className="relative inline-flex rounded-full h-16 w-16 bg-primary dark:bg-accent"></span>
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-8 w-8 text-primary-950 dark:text-gray-300 animate-spin" />
        </span>
      </span>
    </div>
  );
}
