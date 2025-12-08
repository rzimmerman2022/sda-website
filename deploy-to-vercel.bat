@echo off
echo ========================================
echo SparkData Analytics - Vercel Deployment
echo ========================================
echo.

REM Check if Vercel CLI is installed
where vercel >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [1/4] Installing Vercel CLI...
    npm install -g vercel
) else (
    echo [1/4] Vercel CLI already installed ✓
)

echo.
echo [2/4] Logging into Vercel...
echo (A browser window will open - login with GitHub, email, or GitLab)
echo.
vercel login

echo.
echo [3/4] Deploying to Vercel...
echo (This will build and deploy your site)
echo.
vercel --prod

echo.
echo [4/4] Adding custom domains...
echo.
vercel domains add sparkdatalab.ai
vercel domains add www.sparkdatalab.ai

echo.
echo ========================================
echo ✅ DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your site is deploying to Vercel!
echo You'll get a URL like: https://sda-website.vercel.app
echo.
echo 📋 NEXT STEPS:
echo.
echo 1. Go to spaceship.com and login
echo 2. Navigate to: Domains ^> sparkdatalab.ai ^> DNS Management
echo 3. Add these DNS records:
echo.
echo    Type: A
echo    Host: @ (or leave blank)
echo    Value: 76.76.21.21
echo    TTL: 3600
echo.
echo    Type: CNAME
echo    Host: www
echo    Value: cname.vercel-dns.com
echo    TTL: 3600
echo.
echo 4. Wait 10-30 minutes for DNS propagation
echo 5. Visit: https://sparkdatalab.ai
echo.
echo 🎉 Done! Your site will be live soon!
echo.
pause
