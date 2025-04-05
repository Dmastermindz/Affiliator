"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function CreateOfferForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    offer_id: crypto.randomUUID(),
    offer_name: "",
    details: "",
    offer_percent: "",
    keywords: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Submitting form:", form);
      const { data, error } = await supabase.from("affiliate_offers").insert([form]).select();

      if (error) {
        console.error("Supabase error details:", error);
        throw error;
      }

      console.log("Successfully created offer:", data);
      router.push("/dashboard/affiliate-offers");
    } catch (error) {
      console.error("Detailed error:", error);
      alert(`Error creating offer: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  return (
    <Card className="mx-auto max-w-2xl p-6">
      <h2 className="mb-6 text-2xl font-semibold">Create New Affiliate Offer</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="offer_name">Offer Title</Label>
          <Input
            id="offer_name"
            name="offer_name"
            value={form.offer_name}
            onChange={handleChange}
            placeholder="Enter offer title"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="details">Description</Label>
          <Textarea
            id="details"
            name="details"
            value={form.details}
            onChange={handleChange}
            placeholder="Enter offer description"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="offer_percent">Commission Percentage</Label>
          <Input
            id="offer_percent"
            name="offer_percent"
            value={form.offer_percent}
            onChange={handleChange}
            placeholder="e.g., 30"
            type="number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="keywords">Keywords</Label>
          <Input
            id="keywords"
            name="keywords"
            value={form.keywords}
            onChange={handleChange}
            placeholder="e.g., Software, Health, Finance (comma separated)"
            required
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/dashboard/affiliate-offers")}
          >
            Cancel
          </Button>
          <Button type="submit">Create Offer</Button>
        </div>
      </form>
    </Card>
  );
}
