$distributionId = $env:FITEDIT_LANDING_CLOUDFRONT_DISTRIBUTIONID
$bucket = $env:FITEDIT_LANDING_S3_BUCKET

write-host "Syncing with S3..."
pushd $PSScriptRoot
aws s3 sync . s3://$bucket --exclude '*.ps1' --exclude '.git/*'

write-host "Invalidating Cloudfront caches..."
$createInvalidationResult = aws cloudfront create-invalidation --distribution-id $distributionId --paths "/*" | ConvertFrom-Json
$invalidationId = $createInvalidationResult.Invalidation.Id
write-host "Invalidation created with ID: $invalidationId"

$waitForInvalidation = $args[0]

if ($waitForInvalidation -ne $true) {
    return
}

# Monitor the invalidation status
$invalidationStatus = $createInvalidationResult.Invalidation.Status
while ($invalidationStatus -ne "Completed") {
    $getInvalidationResult = aws cloudfront get-invalidation --distribution-id $distributionId --id $invalidationId | ConvertFrom-Json
    $invalidationStatus = $getInvalidationResult.Invalidation.Status
    write-host "Invalidation status: $invalidationStatus"
    Start-Sleep -Seconds 2
}

write-host "Invalidation completed"
write-host "Deployment completed"
popd
