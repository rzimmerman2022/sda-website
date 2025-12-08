# Set environment variable
$env:VERCEL_TOKEN = "PvFJaCVjjqOiShWwKiY0egx9"

# Navigate to project
Set-Location "c:\Projects\SDA - Website"

# Deploy
Write-Host "Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod --yes

# Add domains
Write-Host "Adding domains..." -ForegroundColor Yellow
vercel domains add sparkdatalab.ai
vercel domains add www.sparkdatalab.ai

Write-Host "Done!" -ForegroundColor Green
