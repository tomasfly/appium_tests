# appium_tests
Mobile Automation Framework

Pre requisites:
- Java JDK should be installed
- Android Studio should be installed
- Emulator or real device should be configured and available (Tested with Moto G 4 Gen)
- ANDROID_HOME environment variable should be set
- Appium should be installed globally

Steps:
1. Clone this repository.
2. Install modules with 'npm install'
3. Connect your device via USB or launch emulator.
4. Set device ID in WDIO config file, together with platformVersion.
5. Launch the test with the command : ./node_modules/.bin/wdio wdio.conf.js
