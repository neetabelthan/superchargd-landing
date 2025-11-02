# GitHub Pages Deployment Guide

Your SuperChargd landing page is ready to deploy to GitHub Pages! Follow these simple steps:

## Step 1: Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/neetabelthan/superchargd-landing

2. Click on **Settings** (top right of the repo page)

3. Scroll down the left sidebar and click **Pages** (under "Code and automation")

4. Under **Source**, select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**

5. Click **Save**

6. Wait 1-2 minutes for deployment to complete

## Step 2: Access Your Site

Your site will be live at:
```
https://neetabelthan.github.io/superchargd-landing/
```

## Step 3: (Optional) Add a Custom Domain

If you want to use a custom domain like `www.superchargd.com`:

1. In the same **Pages** settings, scroll to **Custom domain**

2. Enter your domain name (e.g., `www.superchargd.com`)

3. Click **Save**

4. Add a CNAME record in your domain provider's DNS settings:
   - Type: `CNAME`
   - Name: `www` (or `@` for root domain)
   - Value: `neetabelthan.github.io`

5. Wait for DNS propagation (5-30 minutes)

6. Enable **Enforce HTTPS** in GitHub Pages settings (appears after domain verification)

## Files Deployed

✅ index.html (Home page)
✅ faq.html (FAQ page)
✅ terms.html (Terms & Conditions page)
✅ styles.css (Styling)
✅ script.js (Interactive features)
✅ public/images/ (All images)

## Updating Your Site

Whenever you make changes:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your update message"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```

3. GitHub Pages will automatically rebuild and deploy (takes 1-2 minutes)

## Troubleshooting

**Site not loading?**
- Wait 2-3 minutes after enabling Pages
- Check the Pages settings to ensure it says "Your site is live at..."
- Clear your browser cache

**Images not showing?**
- Image paths are relative, so they should work automatically
- If issues persist, check browser console for 404 errors

**Need help?**
- Check the Actions tab in your repo to see deployment status
- GitHub Pages status: https://www.githubstatus.com/

---

Your site is now ready to go live! Just follow Step 1 above to enable GitHub Pages.
