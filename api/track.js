import { google } from "googleapis";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const auth = new google.auth.JWT(
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0].trim() || "unknown";

    const { page = "/", referrer = "" } = req.body || {};

    const userAgent = req.headers["user-agent"] || "";
    const device = /mobile|android|iphone|ipad/i.test(userAgent)
      ? "Mobile"
      : "Desktop";

    // Get location from IP
    let city = "unknown";
    let region = "unknown";
    let country = "unknown";
    let isp = "unknown";

    if (ip !== "unknown") {
      try {
        const geo = await fetch(`http://ip-api.com/json/${ip}?fields=city,regionName,country,isp,status`);
        const geoData = await geo.json();
        if (geoData.status === "success") {
          city = geoData.city || "unknown";
          region = geoData.regionName || "unknown";
          country = geoData.country || "unknown";
          isp = geoData.isp || "unknown";
        }
      } catch {
        // silently fail — location stays unknown
      }
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:J",
      valueInputOption: "RAW",
      requestBody: {
        values: [[timestamp, ip, city, region, country, isp, page, device, userAgent, referrer]],
      },
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Tracking error:", err);
    return res.status(500).json({ error: "Failed to track" });
  }
}