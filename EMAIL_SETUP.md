# Email Setup Guide for Proyecto Salvaje

Your website has **two contact forms** that now use EmailJS to send emails:

1. **Contact Form** (Homepage) - General inquiries
2. **Investment Form** (/invest page) - Investment inquiries

## Current Setup: EmailJS (Recommended)

EmailJS is already installed and integrated! It sends form submissions directly to your email without needing a backend server.

### Step-by-Step Setup Instructions

#### 1. Create EmailJS Account
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) and sign up for a free account
2. The free tier includes **200 emails/month** (perfect for most needs)

#### 2. Connect Your Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps for your provider
5. **Copy your Service ID** (e.g., `service_abc123`)

#### 3. Create Email Templates

You need **TWO templates** (one for each form):

##### Template 1: Contact Form
1. Go to **Email Templates** → **Create New Template**
2. **Template Name**: `Contact Form - Proyecto Salvaje`
3. **Template Content**:
```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
Interest: {{interest}}

Message:
{{message}}

---
Sent via proyectosalvaje.com contact form
```
4. Save and **copy the Template ID** (e.g., `template_contact123`)

##### Template 2: Investment Inquiry Form
1. Create another template
2. **Template Name**: `Investment Inquiry - Proyecto Salvaje`
3. **Template Content**:
```
Subject: Investment Inquiry from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Citizenship: {{citizenship}}
Package Interest: {{package}}
Preferred Visit Date: {{visit}}

Message:
{{message}}

---
Sent via proyectosalvaje.com/invest
```
4. Save and **copy the Template ID** (e.g., `template_invest123`)

#### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123XYZ`)

#### 5. Update Your .env File
Open your `.env` file and replace the placeholder values:

```bash
# Replace these with your actual EmailJS credentials
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID_CONTACT=template_contact123
VITE_EMAILJS_TEMPLATE_ID_INVESTMENT=template_invest123
VITE_EMAILJS_PUBLIC_KEY=abc123XYZ
```

#### 6. Test It!
1. Restart your dev server: `npm run dev`
2. Test the contact form on homepage
3. Test the investment form at `/invest`
4. Check your email inbox for the submissions!

### Fallback Behavior
If EmailJS is not configured (env variables are missing), the forms will automatically fall back to opening the user's email client with a pre-filled mailto: link.

---

## Alternative: ConvertKit (For Email Lists)

If you want to build an email subscriber list, ConvertKit is already configured in your .env file:

```bash
VITE_CONVERTKIT_API_KEY=WL4dvqOgWKNB2eq6RLOflQ
VITE_CONVERTKIT_FORM_ID=8630317
```

This is useful if you want to add a newsletter subscription form later.

---

## Need Professional Email Addresses?

To **receive** emails at `info@proyectosalvaje.com` or `hello@proyectosalvaje.com`, see the [DNS_EMAIL_SETUP.md](./DNS_EMAIL_SETUP.md) guide.
