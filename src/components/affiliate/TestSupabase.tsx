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
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Supabase Connection Test</h3>
      <p>{testResult}</p>
    </div>
  );
}
