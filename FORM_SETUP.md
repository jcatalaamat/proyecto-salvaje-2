# Form Setup - proyectosalvaje.com

## How Contact Forms Work

Your website has **two contact forms** that use the **mailto:** approach to send emails:

1. **Contact Form** (Homepage) - General inquiries
2. **Investment Form** (/invest page) - Investment inquiries

## How It Works

When a user fills out a form and clicks "Submit":

1. The form collects all field data (name, email, message, etc.)
2. Creates a formatted email body with ALL the information
3. Opens the user's default email client with:
   - **To**: The email address from your translations (e.g., info@proyectosalvaje.com)
   - **Subject**: Formatted subject line with key info
   - **Body**: Nicely formatted with all form fields

## Email Format Examples

### Contact Form Email:
```
Subject: Contact Form: John Doe - investor

Body:
Contact Form Submission from proyectosalvaje.com

-----------------------------------
Name: John Doe
Email: john@example.com
Interest: investor
-----------------------------------

Message:
I'm interested in learning more about investment opportunities...

-----------------------------------
Sent from: proyectosalvaje.com contact form
```

### Investment Form Email:
```
Subject: Investment Inquiry: Jane Smith - committed

Body:
Investment Inquiry from proyectosalvaje.com/invest

=========================================
CONTACT INFORMATION
=========================================
Name: Jane Smith
Email: jane@example.com
Phone: +1-555-0123
Citizenship: USA

=========================================
INVESTMENT DETAILS
=========================================
Package Interest: committed
Preferred Visit Date: 2025-03-15

=========================================
MESSAGE
=========================================
I would like to schedule a visit to discuss...

=========================================
Sent from: proyectosalvaje.com/invest
```

## Advantages of Mailto Approach

✅ **Simple** - No external services needed
✅ **No API keys** - No configuration required
✅ **Works offline** - No server dependencies
✅ **Static site friendly** - Perfect for GitHub Pages
✅ **Privacy** - No data sent to third parties
✅ **Free forever** - No costs or limits

## Limitations

⚠️ **Requires email client** - User must have email client configured (Mail, Outlook, Gmail app)
⚠️ **Mobile limitations** - Some mobile browsers don't handle mailto: well
⚠️ **No tracking** - Can't track if email was actually sent
⚠️ **User visible** - User sees the email being composed

## Email Receiving Setup

To receive emails at `info@proyectosalvaje.com`, you're using **ImprovMX** for email forwarding.

See [IMPROVMX_SETUP.md](./IMPROVMX_SETUP.md) for setup instructions.

## Current Configuration

- **Domain**: proyectosalvaje.com
- **Email Forwarding**: ImprovMX (same as mazunteconnect.com)
- **Contact Email**: Set in translation files (en.json, es.json)
- **Investment Email**: Set in translation files (en.json, es.json)

## Future Upgrade Options

If you want to improve the form experience (no mailto: required), you have these options:

### Option 1: EmailJS (Easiest)
- Free tier: 200 emails/month
- Client-side only (works with GitHub Pages)
- Setup time: ~15 minutes
- No backend needed

### Option 2: Netlify/Vercel + Resend (Professional)
- Use your existing Resend API key
- Migrate from GitHub Pages to Netlify/Vercel (still free)
- Serverless functions handle form submissions
- Setup time: ~30 minutes
- More secure (API key hidden)

### Option 3: FormSpree or Similar
- Free tier available
- Simple integration
- No backend needed
- Works with static sites

---

## Testing Forms

1. **Start dev server**: `npm run dev`
2. Fill out contact form on homepage
3. Click Submit
4. Your email client should open with pre-filled email
5. Send the email
6. Check your inbox (emails forwarded via ImprovMX)

---

## Troubleshooting

**Email client doesn't open?**
- User might not have an email client configured
- Try on a different device/browser
- Consider upgrading to EmailJS or Resend

**Not receiving emails?**
- Check ImprovMX is set up correctly (see [IMPROVMX_SETUP.md](./IMPROVMX_SETUP.md))
- Verify DNS MX records are correct
- Check spam folder

**Form fields not included?**
- All fields are URL-encoded and included
- Some email clients have URL length limits
- Forms are optimized to fit within limits

---

## Files Modified

Forms are implemented in:
- **Contact Form**: [src/components/ContactSection.tsx](src/components/ContactSection.tsx)
- **Investment Form**: [src/pages/InvestmentPage.tsx](src/pages/InvestmentPage.tsx)

Both forms:
- Collect all field data
- Format into professional email body
- Use `encodeURIComponent()` for proper URL encoding
- Include clear headers and formatting
- Show source page in email

---

**Questions?** Check the other setup guides:
- [IMPROVMX_SETUP.md](./IMPROVMX_SETUP.md) - Email forwarding setup
- [DNS_EMAIL_SETUP.md](./DNS_EMAIL_SETUP.md) - DNS configuration options
