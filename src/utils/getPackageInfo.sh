#Script to get APK information
if [ -z "$1" ]
then
      echo "Please pass APK path as the only parameter of this script"
      exit 1
else
      echo "APK Path is $1"
fi
SDK_VERSION="$(aapt d --values badging $1 | grep 'sdkVersion')"
SDK_TARGET_VERSION="$(aapt d --values badging $1 | grep 'targetSdkVersion' | cut -d ' ' -f 1)"
SDK_LAUNCHABLE_ACTIVITY="$(aapt d --values badging $1 | grep 'launchable-activity'| cut -d ' ' -f 2)"
echo $SDK_VERSION
echo $SDK_TARGET_VERSION
echo $SDK_LAUNCHABLE_ACTIVITY