# Daily site check runner for Windows Task Scheduler ("Radeski kunlik sayt tekshiruvi").
#
#   1. runs scripts/dailySiteCheck.mjs against https://radeski.uz (report in audit/daily/<date>/)
#   2. copies the summary to Desktop\Radeski_kunlik_tekshiruvlar\<date>.md (last 30 days kept)
#   3. shows a Windows notification: all clear, or how many problems were found
#
# Register / remove the task: scripts/registerDailyCheckTask.ps1
# (ASCII only: Windows PowerShell 5.1 reads scripts without a BOM as ANSI.)

$ErrorActionPreference = 'Continue'
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

$day = Get-Date -Format 'yyyy-MM-dd'
$logDir = Join-Path $repo 'audit\daily'
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$log = Join-Path $logDir 'last-run.log'

$node = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $node) { $node = 'C:\Program Files\nodejs\node.exe' }

"[$(Get-Date -Format s)] start ($node)" | Out-File -FilePath $log -Encoding utf8
& $node 'scripts/dailySiteCheck.mjs' '--out' 'audit/daily' *>> $log
$exitCode = $LASTEXITCODE
"[$(Get-Date -Format s)] exit $exitCode" | Out-File -FilePath $log -Encoding utf8 -Append

# Copy the summary where the clinic team will see it
$desktopDir = Join-Path ([Environment]::GetFolderPath('Desktop')) 'Radeski_kunlik_tekshiruvlar'
New-Item -ItemType Directory -Force -Path $desktopDir | Out-Null
$summary = Join-Path $logDir "$day\summary.md"
$status = Join-Path $logDir "$day\status.json"
if (Test-Path $summary) {
  Copy-Item $summary (Join-Path $desktopDir "$day.md") -Force
}
Get-ChildItem $desktopDir -Filter '*.md' | Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-30) } | Remove-Item -Force -ErrorAction SilentlyContinue

# Notification
if (-not (Test-Path $summary)) {
  $title = 'Radeski: kunlik tekshiruv ishlamadi'
  $text = "Tekshiruv yakunlanmadi. Log: $log"
  $icon = 'Error'
} elseif ($exitCode -eq 0) {
  $title = 'Radeski: sayt tekshiruvi - hammasi joyida'
  $text = "Hisobot: Desktop\Radeski_kunlik_tekshiruvlar\$day.md"
  $icon = 'Info'
} else {
  $failing = '?'
  try { $failing = (Get-Content $status -Raw | ConvertFrom-Json).failing } catch {}
  $title = "Radeski: saytda $failing ta muammo topildi"
  $text = "Hisobotni oching: Desktop\Radeski_kunlik_tekshiruvlar\$day.md"
  $icon = 'Warning'
}
try {
  Add-Type -AssemblyName System.Windows.Forms
  Add-Type -AssemblyName System.Drawing
  $notify = New-Object System.Windows.Forms.NotifyIcon
  $notify.Icon = [System.Drawing.SystemIcons]::Information
  $notify.BalloonTipIcon = $icon
  $notify.BalloonTipTitle = $title
  $notify.BalloonTipText = $text
  $notify.Visible = $true
  $notify.ShowBalloonTip(15000)
  Start-Sleep -Seconds 16
  $notify.Dispose()
} catch {
  "notification failed: $_" | Out-File -FilePath $log -Encoding utf8 -Append
}
exit $exitCode
