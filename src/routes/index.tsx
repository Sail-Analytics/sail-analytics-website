import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hello" },
      { name: "description", content: "A blank landing page." },
      { property: "og:title", content: "Hello" },
      { property: "og:description", content: "A blank landing page." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Hello
      </h1>
    </div>
  );
}

