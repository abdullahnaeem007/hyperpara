# 🚀 Quick Email Setup for Hyperpara

## ✅ **What's Already Done:**

1. **EmailJS installed** ✅
2. **Contact form updated** ✅
3. **Environment variables configured** ✅
4. **EmailJS initialized** ✅
5. **Loading states added** ✅
6. **Success/Error messages added** ✅

## 🔧 **What You Need to Do:**

### **Step 1: Create EmailJS Account**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for free account
3. Verify your email

### **Step 2: Set Up Email Service**
1. Go to **Email Services** → **Add New Service**
2. Choose **Custom SMTP**
3. Use these settings:
   ```
   SMTP Host: smtpout.secureserver.net
   SMTP Port: 587
   Username: info@hyperpara.co
   Password: [Your GoDaddy email password]
   ```

### **Step 3: Create Email Template**
1. Go to **Email Templates** → **Create New Template**
2. Use the template from `EMAILJS_SETUP_GUIDE.md`
3. Set subject: `New Contact Form Submission from {{from_name}}`

### **Step 4: Get Your Credentials**
After setup, you'll get:
- **Service ID** (e.g., `service_abc123`)
- **Template ID** (e.g., `template_xyz789`)
- **Public Key** (e.g., `user_def456`)

### **Step 5: Create Environment File**
1. Create `.env` file in your project root
2. Add your credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### **Step 6: Test**
1. Run your development server
2. Fill out the contact form
3. Submit and check your info@hyperpara.co inbox

## 🎯 **Your Contact Form Features:**

- ✅ **Sends to info@hyperpara.co**
- ✅ **Professional email template**
- ✅ **Loading states**
- ✅ **Success/Error messages**
- ✅ **Form validation**
- ✅ **Mobile responsive**
- ✅ **Security with environment variables**

## 📧 **Email Template Preview:**

When someone submits the form, you'll receive a professional email with:
- **Sender's name and email**
- **Company name**
- **Project details**
- **Reply-to set to customer's email**

## 🔒 **Security Features:**

- **Environment variables** protect your credentials
- **Rate limiting** prevents spam
- **Form validation** ensures data quality
- **Error handling** provides user feedback

---

**Your contact form is ready! Just follow the setup steps above. 🎉** 