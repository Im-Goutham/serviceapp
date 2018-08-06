package com.spotjobs;

import com.facebook.FacebookSdk;
import com.facebook.CallbackManager;
import com.facebook.appevents.AppEventsLogger;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.amazonaws.RNAWSCognitoPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import io.callstack.react.fbads.FBAdsPackage;
import com.sbugert.rnadmob.RNAdMobPackage;
import com.airbnb.android.react.maps.MapsPackage;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import co.apptailor.googlesignin.RNGoogleSigninPackage; 

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNAWSCognitoPackage(),
            new ReactNativePushNotificationPackage(),
            new FBAdsPackage(),
            new RNAdMobPackage(),
          new RNGoogleSigninPackage(),
          new MapsPackage(),
          new FBSDKPackage(mCallbackManager)

      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
