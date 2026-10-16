@echo off
cd /d "%~dp0"
echo =============================================
echo 1) Boshqa keraksiz Chrome oynalarini yopishingiz mumkin
echo 2) Bot riskavan Profile 7 + GSC radeski.uz bilan ishlaydi
echo 3) Agar GSC allaqachon ochiq va debug portda bo'lsa —
echo    YANGI oyna ochmaydi, shu tabda davom etadi
echo =============================================
if not exist .venv (
  python -m venv .venv
  call .venv\Scripts\pip install -r requirements.txt
  call .venv\Scripts\playwright install chromium
)
set PYTHONIOENCODING=utf-8
call .venv\Scripts\python run_indexer.py
pause
