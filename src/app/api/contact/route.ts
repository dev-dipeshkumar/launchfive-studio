import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  description: z.string().min(10),
  referenceLink: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // In a production environment, you would:
    // 1. Save to Firebase Firestore / Supabase
    // 2. Send email via Resend / EmailJS
    // 3. Send WhatsApp notification
    // For now, we log the inquiry and return success

    console.log("New contact inquiry received:", {
      name: data.name,
      email: data.email,
      company: data.company || "N/A",
      service: data.service,
      budget: data.budget,
      timeline: data.timeline,
      description: data.description.substring(0, 100) + "...",
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. We will get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data. Please check your inputs and try again.",
          details: error.errors.map((e) => e.message),
        },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
