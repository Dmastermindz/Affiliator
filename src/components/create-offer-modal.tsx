"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabaseClient";

export function CreateOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    offer_name: "",
    offer_percent: "",
    details: "",
    keywords: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.from("affiliate_offers").insert([form]);
    if (error) {
      alert("Error: " + error.message);
      return;
    }
    alert("Offer created successfully!");
    setIsOpen(false);
    setForm({
      offer_name: "",
      offer_percent: "",
      details: "",
      keywords: "",
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          console.log("Button clicked");
          setIsOpen(true);
        }}
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Create New Offer
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              width: "100%",
              maxWidth: "32rem",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontSize: "1.125rem", fontWeight: 600 }}>Create New Affiliate Offer</h2>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  padding: "0.25rem",
                  borderRadius: "0.25rem",
                  opacity: 0.7,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <Label htmlFor="offer_name">Offer Name</Label>
                <Input
                  id="offer_name"
                  name="offer_name"
                  value={form.offer_name}
                  onChange={handleChange}
                  placeholder="Enter offer name"
                  required
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <Label htmlFor="offer_percent">Commission Percentage</Label>
                <Input
                  id="offer_percent"
                  name="offer_percent"
                  type="number"
                  value={form.offer_percent}
                  onChange={handleChange}
                  placeholder="Enter commission percentage"
                  required
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <Label htmlFor="details">Offer Details</Label>
                <Textarea
                  id="details"
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  placeholder="Enter offer details"
                  required
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <Label htmlFor="keywords">Keywords</Label>
                <Input
                  id="keywords"
                  name="keywords"
                  value={form.keywords}
                  onChange={handleChange}
                  placeholder="Enter keywords (comma separated)"
                  required
                />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Create Offer</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
