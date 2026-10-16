# TOTOCALCIO PRO - mise a jour securisee pour Windows 11
# Ce script ne demande aucun identifiant GitHub.
$ErrorActionPreference = 'Stop'
$base = 'https://gillesgallon.github.io/TOTOCALCIO-PRO'
$destination = Join-Path $env:LOCALAPPDATA 'TOTOCALCIO'
$application = Join-Path $destination 'totocalcio.html'
$manifestUrl = "$base/manifest.json"
$tempFile = Join-Path $env:TEMP ('totocalcio-' + [guid]::NewGuid().ToString('N') + '.html')
try {
    New-Item -ItemType Directory -Path $destination -Force | Out-Null
    $manifest = Invoke-RestMethod -Uri $manifestUrl -TimeoutSec 25
    if ($manifest.download_url -ne "$base/totocalcio.html") {
        throw 'Adresse de telechargement inattendue : mise a jour refusee.'
    }
    if ($manifest.sha256 -notmatch '^[a-fA-F0-9]{64}$') {
        throw 'Empreinte SHA-256 du manifeste invalide.'
    }
    Invoke-WebRequest -Uri $manifest.download_url -OutFile $tempFile -TimeoutSec 120
    $actual = (Get-FileHash -Path $tempFile -Algorithm SHA256).Hash
    if ($actual -ine $manifest.sha256) {
        throw 'Le fichier ne correspond pas a son empreinte SHA-256. Aucune modification effectuee.'
    }
    if ((Test-Path $application) -and ((Get-FileHash $application -Algorithm SHA256).Hash -ieq $actual)) {
        Write-Host 'TOTOCALCIO PRO est deja a jour.'
    } else {
        if (Test-Path $application) { Copy-Item $application ($application + '.bak') -Force }
        Move-Item -Path $tempFile -Destination $application -Force
        Write-Host 'TOTOCALCIO PRO mis a jour avec succes.'
    }
    Start-Process $application
} catch {
    Write-Host ('Mise a jour impossible : ' + $_.Exception.Message) -ForegroundColor Red
    if (Test-Path $application) {
        Write-Host 'Ouverture de la version deja installee.'
        Start-Process $application
    } else {
        throw
    }
} finally {
    if (Test-Path $tempFile) { Remove-Item $tempFile -Force }
}
