"use client";

import { useEffect, useState } from "react";

export default function TestButton() {
  const [envStatus, setEnvStatus] = useState<{
    supabaseUrl: boolean;
    supabaseKey: boolean;
  }>({
    supabaseUrl: false,
    supabaseKey: false,
  });

  useEffect(() => {
    setEnvStatus({
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Environment Variables Test</h1>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full ${envStatus.supabaseUrl ? "bg-green-500" : "bg-red-500"}`}
          />
          <span>NEXT_PUBLIC_SUPABASE_URL: {envStatus.supabaseUrl ? "✅ Set" : "❌ Not Set"}</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full ${envStatus.supabaseKey ? "bg-green-500" : "bg-red-500"}`}
          />
          <span>
            NEXT_PUBLIC_SUPABASE_ANON_KEY: {envStatus.supabaseKey ? "✅ Set" : "❌ Not Set"}
          </span>
        </div>
      </div>
    </div>
  );
}
