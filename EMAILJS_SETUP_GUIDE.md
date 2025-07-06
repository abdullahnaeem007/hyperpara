# EmailJS Setup Guide for Hyperpara Contact Form

## 🚀 **Step-by-Step Setup for info@hyperpara.co**

### **Step 1: Create EmailJS Account**

1. **Go to [EmailJS.com](https://www.emailjs.com/)**
2. **Sign up for a free account**
3. **Verify your email address**

### **Step 2: Add Email Service**

1. **Go to Email Services** in your EmailJS dashboard
2. **Click "Add New Service"**
3. **Choose "Custom SMTP"**
4. **Configure with your GoDaddy email settings:**

```
Service Name: Hyperpara Email
SMTP Host: smtpout.secureserver.net (GoDaddy SMTP)
SMTP Port: 587
Username: info@hyperpara.co
Password: [Your GoDaddy email password]
```

### **Step 3: Create Email Template**

1. **Go to Email Templates** in your dashboard
2. **Click "Create New Template"**
3. **Use this template:**

**Template Name:** `Contact Form Template`

**Subject:** `New Contact Form Submission from {{from_name}}`

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #18CB96; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #18CB96; }
        .value { margin-top: 5px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Hyperpara Website Contact Form</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="label">Company:</div>
                <div class="value">{{company}}</div>
            </div>
            
            <div class="field">
                <div class="label">Message:</div>
                <div class="value">{{message}}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the Hyperpara contact form.</p>
            <p>Reply directly to this email to respond to the customer.</p>
        </div>
    </div>
</body>
</html>
```

### **Step 4: Get Your Credentials**

After setting up the service and template, you'll get:

1. **Service ID** (e.g., `service_abc123`)
2. **Template ID** (e.g., `template_xyz789`)
3. **Public Key** (e.g., `user_def456`)

### **Step 5: Update Your Code**

Replace the placeholders in `src/Pages/ContactPage/ContactPage.jsx`:

```javascript
emailjs.send(
    'YOUR_SERVICE_ID',     // Replace with your actual Service ID
    'YOUR_TEMPLATE_ID',    // Replace with your actual Template ID
    templateParams,
    'YOUR_PUBLIC_KEY'      // Replace with your actual Public Key
)
```

**Example:**
```javascript
emailjs.send(
    'service_abc123',
    'template_xyz789',
    templateParams,
    'user_def456'
)
```

## 🔧 **Alternative: GoDaddy Email Settings**

If you need to configure your GoDaddy email manually:

### **SMTP Settings:**
- **SMTP Server:** `smtpout.secureserver.net`
- **Port:** `587` (TLS) or `465` (SSL)
- **Username:** `info@hyperpara.co`
- **Password:** Your GoDaddy email password
- **Security:** TLS/SSL

### **IMAP Settings (for receiving):**
- **IMAP Server:** `imap.secureserver.net`
- **Port:** `993` (SSL)
- **Username:** `info@hyperpara.co`
- **Password:** Your GoDaddy email password

## 📧 **Testing Your Setup**

### **1. Test the Form:**
1. **Fill out the contact form** on your website
2. **Submit the form**
3. **Check your info@hyperpara.co inbox**
4. **Verify the email was received**

### **2. Test Reply Functionality:**
1. **Reply to the received email**
2. **Make sure it goes to the customer's email address**

## 🛡️ **Security Best Practices**

### **1. Environment Variables (Recommended)**
Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update your code:
```javascript
emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

### **2. Rate Limiting**
EmailJS free plan includes:
- **200 emails per month**
- **Rate limiting to prevent spam**

### **3. Spam Protection**
- **Add CAPTCHA** if needed
- **Validate email addresses**
- **Monitor for spam submissions**

## 🔍 **Troubleshooting**

### **Common Issues:**

1. **"Service not found" error:**
   - Check your Service ID is correct
   - Verify the service is active in EmailJS dashboard

2. **"Template not found" error:**
   - Check your Template ID is correct
   - Verify the template is published

3. **"Authentication failed" error:**
   - Check your GoDaddy email credentials
   - Verify SMTP settings are correct

4. **Emails not received:**
   - Check spam folder
   - Verify GoDaddy email is working
   - Check EmailJS dashboard for delivery status

## 📱 **Mobile Testing**

### **Test on Different Devices:**
- **Desktop browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile browsers** (iOS Safari, Android Chrome)
- **Tablet browsers**

## 🎯 **Next Steps**

1. **Set up EmailJS** following this guide
2. **Test the contact form** thoroughly
3. **Monitor email delivery** for the first few days
4. **Set up email forwarding** if needed
5. **Configure email signatures** for professional responses

---

**Your contact form will now send emails directly to info@hyperpara.co! 🎉** 