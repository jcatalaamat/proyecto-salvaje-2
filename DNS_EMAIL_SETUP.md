# DNS Email Setup Guide - proyectosalvaje.com

## Your Domain Information

- **Domain**: proyectosalvaje.com
- **Registrar**: **Namecheap** (NameCheap, Inc.)
- **DNS Provider**: Namecheap's default DNS (registrar-servers.com)
- **Registered**: April 21, 2025
- **Expires**: April 21, 2026

---

## Setup Professional Email Addresses

You want to receive emails at addresses like:
- `info@proyectosalvaje.com`
- `hello@proyectosalvaje.com`
- `contact@proyectosalvaje.com`

You have **three options** to set this up:

---

## Option 1: Namecheap Email Forwarding (FREE & Easiest)

**Best for**: Small volume, forwarding to existing email

Namecheap offers **FREE email forwarding** - emails sent to info@proyectosalvaje.com get forwarded to your personal email.

### Setup Steps:

1. **Log into Namecheap**
   - Go to [namecheap.com](https://www.namecheap.com)
   - Sign in to your account

2. **Navigate to Domain Settings**
   - Go to **Domain List**
   - Click **Manage** next to proyectosalvaje.com

3. **Set Up Email Forwarding**
   - Find the **Email Forwarding** section
   - Click **Add Forwarder** or **Manage**
   - Create forwards:
     - `info@proyectosalvaje.com` → your-personal@gmail.com
     - `hello@proyectosalvaje.com` → your-personal@gmail.com
     - `contact@proyectosalvaje.com` → your-personal@gmail.com

4. **Verify DNS Records** (Usually automatic)
   - Namecheap will automatically add the necessary MX records
   - Wait 5-30 minutes for DNS propagation

5. **Test It**
   - Send a test email to info@proyectosalvaje.com
   - Check your personal email inbox

### Limitations:
- ✅ FREE
- ✅ Easy setup
- ✅ Can forward to any email
- ❌ Cannot send FROM @proyectosalvaje.com addresses
- ❌ No mailbox (just forwarding)

---

## Option 2: Namecheap Private Email ($0.99-$1.49/month)

**Best for**: Professional mailbox with full send/receive

Namecheap offers affordable email hosting with actual mailboxes.

### Setup Steps:

1. **Purchase Private Email**
   - Log into Namecheap
   - Go to your domain → **Products** tab
   - Find **Private Email** → Click **Add**
   - Choose plan: **Starter** ($0.99/mo for 1 mailbox) or **Pro** ($1.49/mo)

2. **Create Mailboxes**
   - Create mailbox: `info@proyectosalvaje.com`
   - Set a password

3. **Configure MX Records** (Usually automatic)
   - Namecheap automatically configures DNS
   - MX records point to Namecheap's mail servers

4. **Access Your Email**
   - **Webmail**: [privateemail.com](https://privateemail.com)
   - **Mobile/Desktop**: Use IMAP/SMTP settings provided by Namecheap

### Features:
- ✅ Full mailbox (send & receive)
- ✅ Professional email client
- ✅ Calendar & contacts
- ✅ Mobile app support
- ✅ Spam protection
- 💰 Paid ($0.99-$1.49/month per mailbox)

---

## Option 3: Google Workspace ($6/user/month)

**Best for**: Professional business email with full Gmail features

Google Workspace (formerly G Suite) gives you Gmail with your domain.

### Setup Steps:

1. **Sign Up for Google Workspace**
   - Go to [workspace.google.com](https://workspace.google.com)
   - Sign up and add your domain: proyectosalvaje.com
   - Choose **Business Starter** plan ($6/user/month)

2. **Verify Domain Ownership**
   - Google will ask you to add a TXT record to verify
   - Log into Namecheap → Domain → **Advanced DNS**
   - Add the TXT record Google provides

3. **Configure MX Records in Namecheap**
   - Go to Namecheap → Domain → **Advanced DNS**
   - Click **Add New Record** → Type: **MX Record**
   - Add these Google MX records (in order of priority):

   | Priority | Hostname | Value |
   |----------|----------|-------|
   | 1 | @ | ASPMX.L.GOOGLE.COM |
   | 5 | @ | ALT1.ASPMX.L.GOOGLE.COM |
   | 5 | @ | ALT2.ASPMX.L.GOOGLE.COM |
   | 10 | @ | ALT3.ASPMX.L.GOOGLE.COM |
   | 10 | @ | ALT4.ASPMX.L.GOOGLE.COM |

4. **Create User Accounts**
   - Create: info@proyectosalvaje.com
   - Create: hello@proyectosalvaje.com
   - Or use aliases to one main account

5. **Access Gmail**
   - Go to [gmail.com](https://gmail.com)
   - Sign in with info@proyectosalvaje.com

### Features:
- ✅ Full Gmail interface
- ✅ Google Drive (30GB+)
- ✅ Google Docs, Sheets, Slides
- ✅ Google Meet video calls
- ✅ Calendar & Contacts
- ✅ Mobile apps
- ✅ Best spam protection
- 💰 Paid ($6/user/month)

---

## Option 4: Alternative Providers

Other good options for professional email:

### Microsoft 365 ($6/user/month)
- Full Outlook with your domain
- Office apps included
- [microsoft365.com/business](https://www.microsoft365.com/business)

### Zoho Mail (FREE or $1/month)
- Free tier: 5GB, 1 domain, 5 users
- Paid: $1/user/month
- [zoho.com/mail](https://www.zoho.com/mail/)

### ProtonMail ($4/month)
- Privacy-focused encrypted email
- Swiss-based servers
- [proton.me/mail/pricing](https://proton.me/mail/pricing)

---

## Recommended Setup for Proyecto Salvaje

Based on your needs, I recommend:

### For Testing/Light Use:
**Option 1: Namecheap Email Forwarding (FREE)**
- Perfect for getting started
- Forward info@proyectosalvaje.com to your personal email
- Reply using your personal email (or set up "Send As" in Gmail)

### For Professional Use:
**Option 2: Namecheap Private Email ($0.99/month)**
- Affordable professional solution
- Full mailbox functionality
- Quick setup through existing Namecheap account

### For Full Business Suite:
**Option 3: Google Workspace ($6/month)**
- If you need collaboration tools
- Best for teams
- Premium features

---

## Quick DNS Configuration Guide

To manually add MX records in Namecheap:

1. Log into [Namecheap](https://namecheap.com)
2. Go to **Domain List** → **Manage** (proyectosalvaje.com)
3. Click **Advanced DNS** tab
4. Add records as needed based on your email provider
5. Wait 15-30 minutes for DNS propagation
6. Test with: `nslookup -type=mx proyectosalvaje.com`

---

## Current DNS Configuration

Your current nameservers:
- dns1.registrar-servers.com
- dns2.registrar-servers.com

These are Namecheap's default DNS servers, which is perfect for easy email setup.

---

## Need Help?

- **Namecheap Support**: [namecheap.com/support](https://www.namecheap.com/support/)
- **Google Workspace Setup**: [support.google.com/a](https://support.google.com/a)
- **DNS Propagation Check**: [whatsmydns.net](https://www.whatsmydns.net/)

---

**Questions?** Just ask! I can help you configure any of these options.
