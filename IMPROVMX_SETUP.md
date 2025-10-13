# ImprovMX Setup Guide - proyectosalvaje.com

You're already using **ImprovMX** for mazunteconnect.com - let's set it up for proyectosalvaje.com too!

## What is ImprovMX?

**ImprovMX** is a FREE email forwarding service that lets you:
- Create unlimited email aliases (info@, hello@, contact@, etc.)
- Forward all emails to your personal email
- **100% FREE forever** (no credit card needed)
- Works with any domain

---

## Setup Steps for proyectosalvaje.com

### Step 1: Add Domain to ImprovMX

1. Go to [ImprovMX Dashboard](https://improvmx.com/dashboard/)
2. Log in with your existing account (same one you used for mazunteconnect.com)
3. Click **"Add Domain"**
4. Enter: `proyectosalvaje.com`
5. Click **"Add Domain"**

### Step 2: Configure DNS in Namecheap

1. **Log into Namecheap**
   - Go to [namecheap.com](https://namecheap.com)
   - Sign in to your account

2. **Navigate to Domain DNS Settings**
   - Go to **Domain List**
   - Find **proyectosalvaje.com**
   - Click **"Manage"**
   - Go to **"Advanced DNS"** tab

3. **Delete Old MX Records**
   - Find any existing MX records (the eforward ones)
   - Click the trash icon to delete them

4. **Add ImprovMX MX Records**
   - Click **"Add New Record"**
   - Add these TWO MX records:

   | Type | Host | Value | Priority | TTL |
   |------|------|-------|----------|-----|
   | MX Record | @ | mx1.improvmx.com | 10 | Automatic |
   | MX Record | @ | mx2.improvmx.com | 20 | Automatic |

5. **Add SPF TXT Record** (Recommended)
   - Click **"Add New Record"**
   - Type: **TXT Record**
   - Host: **@**
   - Value: `v=spf1 include:spf.improvmx.com ~all`
   - TTL: Automatic
   - Click **"Save Changes"**

### Step 3: Wait for DNS Propagation

- **Wait time**: 15-30 minutes (sometimes up to 24 hours)
- ImprovMX will automatically verify your domain

### Step 4: Create Email Aliases

Back in ImprovMX dashboard:

1. Click on **proyectosalvaje.com**
2. Click **"Add Alias"**
3. Create your email forwards:

   **Example aliases:**
   - `info@proyectosalvaje.com` → your-personal-email@gmail.com
   - `hello@proyectosalvaje.com` → your-personal-email@gmail.com
   - `contact@proyectosalvaje.com` → your-personal-email@gmail.com
   - `info@proyectosalvaje.com` → your-personal-email@gmail.com

   **Or use a catch-all:**
   - `*@proyectosalvaje.com` → your-personal-email@gmail.com
   - (This forwards ALL emails to your account)

### Step 5: Test It!

1. Wait 30 minutes after DNS setup
2. Send a test email to `info@proyectosalvaje.com`
3. Check your personal email inbox
4. Should arrive within seconds!

---

## Verify DNS Configuration

Check if DNS is set up correctly:

```bash
dig MX proyectosalvaje.com +short
```

**Expected output:**
```
10 mx1.improvmx.com.
20 mx2.improvmx.com.
```

If you see this, you're all set! ✅

---

## What You Get

With ImprovMX set up:

✅ **Receive emails** at any @proyectosalvaje.com address
✅ All emails forwarded to your personal inbox
✅ Create unlimited aliases (info@, hello@, team@, etc.)
✅ **100% FREE forever**
✅ No mailbox management needed

**Note**: You'll reply FROM your personal email, not @proyectosalvaje.com
- If you want to SEND from @proyectosalvaje.com, see "Send As Gmail Setup" below

---

## Optional: Setup "Send As" in Gmail

Want to REPLY from info@proyectosalvaje.com instead of your personal email?

### Gmail "Send As" Setup:

1. Open Gmail on desktop
2. Click **Settings** (gear icon) → **See all settings**
3. Go to **Accounts and Import** tab
4. Under **"Send mail as"**, click **"Add another email address"**
5. Enter:
   - Name: `Proyecto Salvaje`
   - Email: `info@proyectosalvaje.com`
   - Uncheck "Treat as an alias"
6. Click **Next Step**
7. SMTP Settings (use ImprovMX SMTP):
   - SMTP Server: `smtp.improvmx.com`
   - Port: `587`
   - Username: `your-personal-email@gmail.com`
   - Password: Create a password in ImprovMX dashboard → SMTP Settings
8. Click **Add Account**
9. Check your email for verification link
10. Click the verification link

Now you can:
- **Receive** emails at info@proyectosalvaje.com (forwarded to Gmail)
- **Send** emails FROM info@proyectosalvaje.com (through Gmail)

---

## Current Status

Your domains:

| Domain | Email Service | Status |
|--------|--------------|---------|
| **mazunteconnect.com** | ImprovMX | ✅ Active |
| **proyectosalvaje.com** | Namecheap Forwarding | 🔄 Needs Migration |

---

## Quick DNS Change Summary

**Current MX records** (Namecheap):
```
10 eforward1.registrar-servers.com
10 eforward2.registrar-servers.com
10 eforward3.registrar-servers.com
15 eforward4.registrar-servers.com
20 eforward5.registrar-servers.com
```

**New MX records** (ImprovMX):
```
10 mx1.improvmx.com
20 mx2.improvmx.com
```

**New SPF record**:
```
v=spf1 include:spf.improvmx.com ~all
```

---

## Troubleshooting

**DNS not updating?**
- Clear DNS cache: [flush-dns.com](https://www.flush-dns.com/)
- Check propagation: [whatsmydns.net](https://whatsmydns.net/)
- Wait up to 24 hours (usually 15-30 minutes)

**Not receiving emails?**
- Check ImprovMX dashboard for delivery logs
- Verify aliases are set up correctly
- Check spam folder in your personal email
- Ensure DNS MX records are correct

**Need help?**
- ImprovMX Support: [improvmx.com/support](https://improvmx.com/support)
- ImprovMX Dashboard: [improvmx.com/dashboard](https://improvmx.com/dashboard)

---

## Reminder: EmailJS for Website Forms

Don't forget to set up EmailJS (separate from ImprovMX) to handle form submissions from your website!

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for EmailJS setup instructions.

**The two systems work together:**
- **EmailJS**: Sends form submissions to your email
- **ImprovMX**: Lets you receive emails at info@proyectosalvaje.com

---

**Ready to set this up?** It takes about 10 minutes! 🚀
