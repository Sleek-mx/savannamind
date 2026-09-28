import "@/app/learn-studio.css";
import { LearnStudioRoute } from "@/components/learn/learn-studio-route";

const studioRouteBoot = `document.body.classList.add("learn-studio-route");`;

export default function LearnStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LearnStudioRoute>
      <script dangerouslySetInnerHTML={{ __html: studioRouteBoot }} />
      <div className="learn-studio">{children}</div>
    </LearnStudioRoute>
  );
}
