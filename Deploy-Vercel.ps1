# SparkData Analytics - Vercel Deployment Script
# PowerShell version for Windows

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  SparkData Analytics - Deploying to Vercel" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

# Change to project directory
Set-Location "c:\Projects\SDA - Website"

# Step 1: Open Vercel login in browser
Write-Host "[Step 1/4] Opening Vercel login in your browser..." -ForegroundColor Yellow
Start-Process "https://vercel.com/login"
Write-Host "  A browser window should have opened to https://vercel.com/login" -ForegroundColor Gray
Write-Host "  Please:" -ForegroundColor Gray
Write-Host "    1. Click 'Continue with Google'" -ForegroundColor Gray
Write-Host "    2. Login with: ryan.zimmerman@southwestresumes.com" -ForegroundColor Gray
Write-Host "    3. Authorize Vercel" -ForegroundColor Gray
Write-Host ""
Write-Host "Press any key after you've logged in via the browser..." -ForegroundColor Green
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Step 2: Run Vercel login command
Write-Host ""
Write-Host "[Step 2/4] Connecting Vercel CLI to your account..." -ForegroundColor Yellow
vercel login

# Step 3: Deploy to production
Write-Host ""
Write-Host "[Step 3/4] Deploying to Vercel Production..." -ForegroundColor Yellow
Write-Host "  This will take 2-3 minutes to build and deploy..." -ForegroundColor Gray
Write-Host ""
vercel --prod

# Step 4: Add custom domains
Write-Host ""
Write-Host "[Step 4/4] Adding custom domains..." -ForegroundColor Yellow
vercel domains add sparkdatalab.ai
vercel domains add www.sparkdatalab.ai

# Completion
Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host "  ✅ DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your site is now deployed to Vercel!" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Check the output above for your Vercel URL" -ForegroundColor White
Write-Host ""
Write-Host "📋 FINAL STEP - Configure DNS at Spaceship:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Go to: https://spaceship.com/login" -ForegroundColor White
Write-Host "2. Navigate: Domains > sparkdatalab.ai > DNS Management" -ForegroundColor White
Write-Host "3. Add these DNS records:" -ForegroundColor White
Write-Host ""
Write-Host "   Type: A       Host: @     Value: 76.76.21.21" -ForegroundColor Cyan
Write-Host "   Type: CNAME   Host: www   Value: cname.vercel-dns.com" -ForegroundColor Cyan
Write-Host ""
Write-Host "4. Save and wait 10-30 minutes for DNS propagation" -ForegroundColor White
Write-Host "5. Visit: https://sparkdatalab.ai" -ForegroundColor White
Write-Host ""
Write-Host "📖 See SPACESHIP_DNS_INSTRUCTIONS.md for detailed steps" -ForegroundColor Gray
Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
