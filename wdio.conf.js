exports.config = {
    specs: [
        './src/features/amazon.feature',
    ],
    port: 4723,
    services: ['appium','shared-store'],
    appium: {
        command: 'appium',
        logPath: 'appium.log'
    },
    capabilities: [
        {
            platformName: "Android",
            platformVersion: "7",
            deviceName: "ZY22424CS2",
            app: "./src/resources/apks/amazon.apk",
            appPackage: "com.amazon.mShop.android.shopping",
            appActivity: "com.amazon.mShop.home.HomeActivity",
            automationName: "UiAutomator2",
            noReset: "true",
            skipUnlock: "true"
        }
    ],
    framework: 'cucumber',
    cucumberOpts: {
        backtrace: false,
        requireModule: ['@babel/register'],
        failAmbiguousDefinitions: true,
        failFast: true,
        ignoreUndefinedDefinitions: true,
        name: [],
        snippets: true,
        source: true,
        profile: [],
        require: [
            './src/steps/given.js',
            './src/steps/then.js',
            './src/steps/when.js',
        ],
        snippetSyntax: undefined,
        strict: true,
        tagExpression: 'not @Pending',
        tagsInTitle: false,
        timeout: 200000
    }    
}
