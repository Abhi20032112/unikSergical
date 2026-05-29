# Unik Surgical Website - Contact Form with Zoho SMTP

## Overview
This is a complete React website for Unik Surgical Pvt. Ltd. with a fully functional contact form that sends emails via Zoho SMTP using Netlify serverless functions.

## Features
- ✅ React contact form with validation
- ✅ File attachment support (PDF, DOC, DOCX, JPG, PNG, max 2.5MB)
- ✅ Base64 encoding for attachments
- ✅ Netlify serverless function with Nodemailer
- ✅ Zoho SMTP integration
- ✅ Responsive design with animations
- ✅ Professional UI with Tailwind CSS

## Project Structure
```
unik-surgical-website/
├── functions/
│   └── send-email.js          # Netlify serverless function
├── src/
│   ├── components/            # React components
│   ├── pages/
│   │   └── Contact.jsx        # Contact form page
│   ├── utils/
│   │   └── base64Helper.js    # Base64 utilities
│   └── App.jsx                # Main app component
├── public/                    # Static assets
├── package.json               # Dependencies
├── netlify.toml               # Netlify configuration
└── test_smtp.js               # SMTP testing script
```

## Dependencies
- React 18.3.1
- Nodemailer 7.0.10
- Framer Motion (animations)
- Tailwind CSS (styling)
- React Router DOM (routing)

## Environment Variables for Netlify
Set these in your Netlify dashboard under Site Settings > Environment Variables:

```
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=info@uniksurgical.com
SMTP_PASS=your_zoho_password_or_app_password
```

**Important:** For Zoho SMTP, you may need to generate an app password:
1. Go to Zoho Mail > Settings > Security
2. Generate an app password
3. Use the app password as SMTP_PASS

## Deployment Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Test SMTP Locally (Optional)
```bash
node test_smtp.js
```

### 3. Build the Project
```bash
npm run build
```

### 4. Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy

### 5. Test the Contact Form
1. Visit your deployed site
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email for the submission

## Testing the Function Locally
You can test the Netlify function locally using Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link to your site
netlify link

# Start local development server
netlify dev

# Test the function
curl -X POST http://localhost:8888/.netlify/functions/send-email \
  -H "Content-Type: application/json" \
  -d @test_payload.json
```

## File Upload Details
- **Allowed formats:** PDF, DOC, DOCX, JPG, PNG
- **Max size:** 2.5 MB
- **Encoding:** Base64 (converted client-side)
- **Validation:** File type and size validation on frontend

## Email Configuration
- **From:** info@uniksurgical.com (Unik Surgical Contact Form)
- **To:** info@uniksurgical.com, uniksurgicalpvtltd@gmail.com
- **Reply-To:** Submitter's email address
- **Subject:** "New Contact Form Submission: [Subject]"

## Troubleshooting

### SMTP Authentication Issues
- Ensure you're using the correct Zoho password or app password
- Check if 2FA is enabled on your Zoho account
- Try both ports: 587 (TLS) and 465 (SSL)

### Function Deployment Issues
- Check Netlify function logs in the dashboard
- Ensure environment variables are set correctly
- Verify the function file is in the `functions/` directory

### Form Submission Issues
- Check browser console for JavaScript errors
- Verify CORS headers in the function response
- Ensure all required fields are filled

## Security Notes
- Input validation on both frontend and backend
- File type and size restrictions
- Base64 validation for attachments
- CORS configuration for cross-origin requests

## Support
For issues with this implementation, check:
1. Netlify function logs
2. Browser developer console
3. Zoho SMTP settings
4. Environment variable configuration
