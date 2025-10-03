# Email Subscription Setup Guide

Your landing page now has email subscription functionality! Choose one of these options:

## Option 1: ConvertKit (Recommended)

ConvertKit is perfect for landing pages and has a generous free tier.

### Setup Steps:
1. Go to [ConvertKit](https://convertkit.com) and create a free account
2. Create a new form in ConvertKit
3. Go to Settings → Advanced → API Keys
4. Copy your API Key and Form ID
5. Create a `.env` file in your project root:

```bash
VITE_CONVERTKIT_API_KEY=your_api_key_here
VITE_CONVERTKIT_FORM_ID=your_form_id_here
```

6. Restart your dev server: `npm run dev`

## Option 2: EmailJS (Simpler)

EmailJS sends emails directly to your inbox without a backend.

### Setup Steps:
1. Go to [EmailJS](https://emailjs.com) and create a free account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Create a `.env` file in your project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart your dev server: `npm run dev`

## Option 3: Simple Backend (Advanced)

If you want full control, you can create a simple API endpoint using:
- Netlify Functions
- Vercel Functions
- Railway
- Or any other serverless platform

## Testing

1. Start your dev server: `npm run dev`
2. Try submitting an email
3. Check your email service dashboard to see the subscription
4. Deploy: `npm run build && npm run deploy`

## Current Status

Right now, the form will show success even without email service configured (for demo purposes). Once you set up one of the services above, it will actually collect emails!
