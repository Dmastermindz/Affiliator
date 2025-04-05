import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function YoutubeVideoPage() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="p-4">
        <Button asChild variant="ghost" className="gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="flex-1 w-full p-5">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/sQ8MNFVhIoU?si=mq_bBRMGs9V3NktD&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
