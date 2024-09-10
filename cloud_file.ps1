$command = "Write-Host 'My voice is my passport, verify me.'" 
$bytes = [System.Text.Encoding]::Unicode.GetBytes($command) 
$encodedCommand = [Convert]::ToBase64String($bytes) 
powershell.exe -EncodedCommand $encodedCommand
