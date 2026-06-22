# Netlify Deployment Guide

## Quick Start

Your portfolio will be hosted using **Netlify** with your GitHub repository.

## Prerequisites

1. GitHub account
2. Netlify account
3. Repository named `Portfolio`

## Step-by-Step Setup

### 1. Create a Netlify Account

1. Go to [Netlify](https://www.netlify.com/)
2. Click **Sign up**
3. Choose **Continue with GitHub**
4. Authorize Netlify to access your repository

### 2. Link Your GitHub Repository

1. In Netlify, open the **Sites** tab
2. Click **New site from Git** 
3. Select **GitHub** as the provider
4. Choose your `Portfolio` repository

### 3. Configure the Build Settings

For a static HTML/CSS/JS portfolio using the `_site` folder:

- **Branch:** `main`
- **Build command:** leave blank
- **Publish directory:** `_site`

Click **Deploy site**.

### 4. Confirm Your Deployment

After deployment, Netlify will assign a temporary URL such as:

```
https://unique-name.netlify.app
```

You can change this later under **Site settings → Site details → Site name**.

## Optional: Configure a Custom Domain

1. In Netlify, go to your site dashboard
2. Click **Domain settings**
3. Add a custom domain or use the generated Netlify domain

## Testing Locally

To preview your site before deployment:

### Using Python

```bash
cd c:\Users\tommy\Projects\Portfolio\docs
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.

### Using Node.js

```bash
npm install -g http-server
cd c:\Users\tommy\Projects\Portfolio\docs
http-server -p 8000
```

## GitHub + Netlify Workflow

Netlify will redeploy automatically whenever you push to the connected GitHub branch.

### Recommended workflow

```bash
cd c:\Users\tommy\Projects\Portfolio

# Create or update files
git add .

git commit -m "feat: update portfolio content"

git push origin main
```

Then wait for Netlify to finish deploying the site.

## File Structure

Keep this structure in your `_site/` folder:

```
_site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── pages/
    ├── about.html
    ├── work.html
    └── case-study-1.html
```

**Important:** Always have an `index.html` in the root of `_site/`.

## Troubleshooting

### Netlify build fails

- Confirm **Publish directory** is set to `_site`
- Confirm **Build command** is blank for static sites
- Make sure `_site/index.html` exists

### Site not updating

- Check the Netlify deploy log
- Confirm the pushed branch is `main`
- Verify Netlify is connected to the correct GitHub repo

### Asset path issues

- Use relative paths in HTML:
  ```html
  <link rel="stylesheet" href="css/style.css">
  ```
- Avoid leading slashes like `/css/style.css`

## Quick Bootstrap Starter

Use this minimal `_site/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">My Portfolio</a>
        </div>
    </nav>
    <main class="container my-5">
        <h1>Welcome to My Portfolio</h1>
        <p>This is my portfolio website.</p>
    </main>
    <footer class="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

And `_site/css/style.css`:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

main {
    min-height: 80vh;
}

footer {
    margin-top: auto;
}
```

## Next Steps

1. Connect Netlify to GitHub
2. Set publish directory to `docs`
3. Push updates to `main`
4. Verify the site is live on Netlify

## References

- [Netlify Docs](https://docs.netlify.com/)
- [Netlify GitHub Integration](https://docs.netlify.com/integrations/git/github/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
- [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)

