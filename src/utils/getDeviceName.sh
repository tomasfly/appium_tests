#Script to get a list of devices available.
if [ -z "$1" ]
then
      echo "Please pass SDK Platform Tools Absolute path as the only parameter of this script
      exit 1
else
      echo "SDK Platform Tools Absolute path is $1"
fi
SDK_PLATFORM_TOOLS_ABSOLUTE_PATH=$1
$SDK_PLATFORM_TOOLS_ABSOLUTE_PATH/adb devices