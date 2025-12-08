@echo off
cls
echo ============================================================
echo   SparkData Analytics - One-Click Deployment to Vercel
echo ============================================================
echo.
echo This will:
echo   1. Login to Vercel (browser opens)
echo   2. Deploy your site automatically
echo   3. Add sparkdatalab.ai as custom domain
echo.
echo Press any key to continue...
pause >nul

echo.
echo [Step 1/3] Opening Vercel Login...
echo (A browser window will open - please login)
echo.
start "" "https://vercel.com/login"
timeout /t 3 /nobreak >nul

echo Running: vercel login
vercel login

echo.
echo [Step 2/3] Deploying to Vercel Production...
echo (This will take 2-3 minutes)
echo.
cd "c:\Projects\SDA - Website"
vercel --prod

echo.
echo [Step 3/3] Adding Custom Domain...
echo.
vercel domains add sparkdatalab.ai
vercel domains add www.sparkdatalab.ai

echo.
echo ============================================================
echo   ✅ DEPLOYMENT COMPLETE!
echo ============================================================
echo.
echo Your site is now deployed to Vercel!
echo.
echo 🌐 Temporary URL: Check the output above for your .vercel.app URL
echo.
echo 📋 FINAL STEP - Configure DNS at Spaceship:
echo.
echo 1. Go to: https://spaceship.com/login
echo 2. Navigate: Domains ^> sparkdatalab.ai ^> DNS Management
echo 3. Add these DNS records:
echo.
echo    ┌─────────┬────────┬──────────────────────┬──────┐
echo    │ Type    │ Host   │ Value                │ TTL  │
echo    ├─────────┼────────┼──────────────────────┼──────┤
echo    │ A       │ @      │ 76.76.21.21          │ 3600 │
echo    │ CNAME   │ www    │ cname.vercel-dns.com │ 3600 │
echo    └─────────┴────────┴──────────────────────┴──────┘
echo.
echo 4. Save and wait 10-30 minutes for DNS propagation
echo.
echo 5. Visit: https://sparkdatalab.ai
echo.
echo 📖 Detailed DNS instructions: SPACESHIP_DNS_INSTRUCTIONS.md
echo.
echo ============================================================
echo.
pause
