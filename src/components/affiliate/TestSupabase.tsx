"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function TestSupabase() {
  const [testResult, setTestResult] = useState<string>("Testing connection...");

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from("affiliate_offers").select("*").limit(1);
        if (error) throw error;
        setTestResult("Connection successful! Found " + (data?.length || 0) + " offers.");
      } catch (error) {
        setTestResult("Error: " + (error as Error).message);
      }
    }

    testConnection();
  }, []);

  return (
    <div className="rounded-lg border p-4">
      <h3 className="mb-2 font-semibold">Supabase Connection Test</h3>
      <p>{testResult}</p>
    </div>
  );
}
