param([Switch]$NoWait)

Write-Host "Clearing solutions..."
& "C:\Development\Hephaestus\CleanSolution.ps1" -NoWait

Write-Host ""
Write-Host "Clearing old archive..."
Remove-Item "C:\Development\Hephaestus.zip" -Force -ea Ignore | Out-Null

Write-Host "Building new archive..."
Compress-Archive -Path "C:\Development\Hephaestus\*" -DestinationPath "C:\Development\Hephaestus.zip"

If ($NoWait) { Exit } Else { Write-Host ""; Read-Host "Press [Enter] to exit" }