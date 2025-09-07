
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(((globalThis as any).Deno?.env.get("RESEND_API_KEY")) || "");

// Configure CORS using an allowlist from environment. Example:
// ALLOWED_ORIGINS="https://app.example.com,https://www.example.com,http://localhost:5173"
const ALLOWED_ORIGINS = (((globalThis as any).Deno?.env.get("ALLOWED_ORIGINS")) || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const buildCorsHeaders = (req: Request): HeadersInit => {
  const origin = req.headers.get("Origin") || req.headers.get("origin");
  const headers: Record<string, string> = {
    // Only expose CORS when origin is allowed; also set Vary so caches differentiate.
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    // Cache preflight for a day.
    "Access-Control-Max-Age": "86400",
  };

  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests safely
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: buildCorsHeaders(req) });
  }

  try {
    const { name, email, company, projectType, budget, timeline, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", name, email);

    // Send email to you (joel@letmecheck.ai)
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["joel@letmecheck.ai"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This email was sent from your contact form at 30plusfreelancer.com</em></p>
      `,
      replyTo: email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...buildCorsHeaders(req),
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...buildCorsHeaders(req) },
      }
    );
  }
};

serve(handler);
