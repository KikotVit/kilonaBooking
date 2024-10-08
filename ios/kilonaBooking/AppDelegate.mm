#import "AppDelegate.h"
#import <GoogleMaps/GoogleMaps.h>

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"kilonaBooking";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  [GMSServices provideAPIKey:@"AIzaSyCEaOoNWKrl4QBjOs5RSk7CNjlaW0di-0I"]; // add this line using the api key obtained from Google Console
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
