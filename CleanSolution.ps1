param([Switch]$NoWait)

$Locations = @("Binaries", "Development")
$Projects = @("Architect", "Backend", "Frontend")
$Items = @("bin","obj")

ForEach ($Location in $Locations) {
	
	ForEach ($Project in $Projects) {
		
		ForEach ($Item in $Items) {
			
			Write-Host "Removing: C:\$Location\Hephaestus\$Project\$Item"
			Remove-Item "C:\$Location\Hephaestus\$Project\$Item" -Recurse -Force -ea Ignore | Out-Null
			
		}
		
	}
	
}

Remove-Item "C:\Development\Hephaestus\.vs" -Recurse -Force -ea Ignore | Out-Null
If ($NoWait) { Exit } Else { Write-Host ""; Read-Host "Press [Enter] to exit" }