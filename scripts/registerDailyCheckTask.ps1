# Registers the daily site check in Windows Task Scheduler for the current user.
#
#   powershell -ExecutionPolicy Bypass -File scripts\registerDailyCheckTask.ps1            # every day 09:00
#   powershell -ExecutionPolicy Bypass -File scripts\registerDailyCheckTask.ps1 -At 08:30
#   powershell -ExecutionPolicy Bypass -File scripts\registerDailyCheckTask.ps1 -Remove
#
# Runs only while the user is logged on (no password stored). If the computer was off at the
# set time, the check runs as soon as possible afterwards (StartWhenAvailable).

param(
  [string]$At = '09:00',
  [switch]$Remove
)

$taskName = 'Radeski kunlik sayt tekshiruvi'

if ($Remove) {
  Unregister-ScheduledTask -TaskName $taskName -Confirm:$false -ErrorAction SilentlyContinue
  Write-Output "Removed: $taskName"
  exit 0
}

$runner = Join-Path $PSScriptRoot 'runDailyCheck.ps1'
$action = New-ScheduledTaskAction -Execute 'powershell.exe' `
  -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$runner`"" `
  -WorkingDirectory (Split-Path -Parent $PSScriptRoot)
$trigger = New-ScheduledTaskTrigger -Daily -At $At
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -RunOnlyIfNetworkAvailable `
  -ExecutionTimeLimit (New-TimeSpan -Minutes 45) -MultipleInstances IgnoreNew
$principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType Interactive -RunLevel Limited

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings `
  -Principal $principal -Description 'radeski.uz: crawl, links, phones, SSL certificates (scripts/dailySiteCheck.mjs)' -Force | Out-Null

$task = Get-ScheduledTask -TaskName $taskName
$info = Get-ScheduledTaskInfo -TaskName $taskName
Write-Output "Registered: $($task.TaskName) - state $($task.State), next run $($info.NextRunTime)"
