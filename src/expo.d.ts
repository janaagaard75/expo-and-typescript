// tslint:disable:interface-over-type-literal
// tslint:disable:max-classes-per-file

declare module 'expo' {
  import { ColorPropType } from 'react-native'
  import { Component } from 'react'
  // tslint:disable-next-line:no-implicit-dependencies - fbemitter is included by Expo.
  import { EventSubscription } from 'fbemitter'
  import { GestureResponderEvent } from 'react-native'
  import { PanResponderGestureState } from 'react-native'
  import { ViewProperties } from 'react-native'
  import { ViewStyle } from 'react-native'
  import { ImageURISource } from 'react-native'

  export namespace Accelerometer {
    // TODO: good export type of x, y and z
    export interface AccelerometerObject {
      x: any
      y: any
      z: any
    }

    export function addListener(listener: (obj: AccelerometerObject) => any): EventSubscription
    export function removeAllListeners(): void
    export function setUpdateInterval(intervalMs: number): void
  }

  export namespace Amplitude {
    export function initialize(apiKey: string): void
    export function setUserId(userId: string): void
    export function setUserProperties(userProperties: object): void    // TODO: add userProperties definition from amplitude doc
    export function clearUserProperties(): void
    export function logEvent(eventName: string): void
    export function logEventWithProperties(eventName: string, properties: object): void
    export function setGroup(groupType: string, groupNames: object): void
  }

  interface AssetOptions {
    name: string,
    type: string,
    hash: string,
    uri: string,
    width: number,
    height: number
  }

  export class Asset {
    constructor(options: AssetOptions);

    public name: string
    public type: string
    public hash: string
    public uri: string
    public localUri: string
    public width?: number
    public height?: number

    // TODO: make sure that these values should be readonly
    public readonly downloading: boolean
    public readonly downloaded: boolean
    public readonly downloadCallbacks: Array<{ resolve: () => any, reject: () => any }>   // TODO: def of resolve & reject

    public downloadAsync(): void

    public static fromModule(moduleId: number): Asset
  }

  export namespace Audio {

    export enum InterruptionModeIOS {
      INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS = 0,
      INTERRUPTION_MODE_IOS_DO_NOT_MIX = 1,
      INTERRUPTION_MODE_IOS_DUCK_OTHERS = 2,
    }

    export enum InterruptionModeAndroid {
      INTERRUPTION_MODE_ANDROID_DO_NOT_MIX = 1,
      INTERRUPTION_MODE_ANDROID_DUCK_OTHERS = 2,
    }

    export type SoundStatus =
      {
        isLoaded: false,
      } | {
        isLoaded: true,
        isPlaying: boolean,
        durationMillis: number,
        positionMillis: number,
        rate: number,
        shouldCorrectPitch: boolean,
        volume: number,
        isMuted: boolean,
        isLooping: boolean,
        didJustFinish: boolean,
      }

    export type RecordingStatus =
      {
        canRecord: false,
        isDoneRecording: false,
      } | {
        canRecord: true,
        isRecording: boolean,
        durationMillis: number,
      } | {
        canRecord: false,
        isDoneRecording: true,
        durationMillis: number,
      }

    export type AudioMode = {
      allowsRecordingIOS: boolean,
      interruptionModeIOS: InterruptionModeIOS,
      playsInSilentLockedModeIOS: boolean,
      interruptionModeAndroid: InterruptionModeAndroid,
      shouldDuckAndroid: boolean,
    }

    export function setAudioModeAsync(mode: AudioMode): Promise<void>  // TODO: better return

    /**
     * Expo Sound
     */
    export interface SoundOptions {
      source: number | string | Asset
    }

    export class Sound {
      constructor(options: SoundOptions)

      public getStatusAsync(): Promise<SoundStatus>
      public setCallback(callback: (status: SoundStatus) => any): void
      public setCallbackPollingMillis(millis: number): void

      public unloadAsync(): Promise<SoundStatus>
      public playAsync(): Promise<SoundStatus>
      public pauseAsync(): Promise<SoundStatus>
      public stopAsync(): Promise<SoundStatus>
      public setPositionAsync(millis: number): Promise<SoundStatus>
      public setRateAsync(
        value: number,
        shouldCorrectPitch: boolean,
      ): Promise<SoundStatus>
      public setVolumeAsync(value: number): Promise<SoundStatus>
      public setIsMutedAsync(value: boolean): Promise<SoundStatus>
      public setIsLoopingAsync(value: boolean): Promise<SoundStatus>
    }

    export class Recording {
      constructor();

      public getStatusAsync(): Promise<RecordingStatus>
      public setCallback(callback: (status: RecordingStatus) => any): void
      public setCallbackPollingMillis(millis: number): void

      public prepareToRecordAsync(): Promise<RecordingStatus>
      public isPreparedToRecord(): boolean  // Note @pierre-H : I found this function on the v16.0.0 doc, not in the code so have to check it.
      public startAsync(): Promise<RecordingStatus>
      public pauseAsync(): Promise<RecordingStatus>
      public stopAndUnloadAsync(): Promise<RecordingStatus>

      public getURI(): string | undefined
      public getNewSound(): Sound | null
    }
  }

  export namespace Constants {
    export const appOwnership: 'expo' | 'standalone' | 'guest'
    export const expoVersion: string
    export const deviceId: string
    export const deviceName: string
    export const deviceYearClass: string   // TODO : I'm not sure if it's a string
    export const isDevice: boolean

    // TODO: check if it's correct or not because in the v16.0.0 doc there is only os
    export type Platform = {
      ios: {
        platform: string;
        model: string;
        userInterfaceIdiom: string;
      },
    }
    export const platform: Platform
    export const sessionId: string
    export const statusBarHeight: any  // TODO: check what's the correct export type
    export const systemFonts: any      // TODO: check what's the correct export type

    // Note: I find this from https://docs.expo.io/versions/v16.0.0/guides/how-expo-works.html#expo-manifest
    // and config page so it may be not complete or exact
    export interface Manifest {
      name: string
      description?: string
      slug?: string
      sdkVersion?: string
      version?: string
      orientation?: 'portrait' | 'landscape'
      primaryColor?: string
      icon?: string
      notification?: {
        icon?: string,
        color?: string,
        androidMode?: 'default' | 'collapse',
        androidCollapsedTitle?: string,
      }
      loading?: {
        icon?: string,
        exponentIconColor?: 'white' | 'blue',
        exponentIconGrayscale?: 1 | 0,
        backgroundImage?: string,
        backgroundColor?: string,
        hideExponentText?: boolean,
      }
      appKey?: string
      androidStatusBarColor?: string
      androidStatusBar?: {
        barStyle?: 'lignt-content' | 'dark-content',
        backgroundColor?: string,
      }
      androidHideExponentNotificationInShellApp?: boolean
      scheme?: string
      extra?: {
        [propName: string]: any,
      }
      rnCliPath?: any
      entryPoint?: string
      packagerOpts?: {
        hostType?: string,
        dev?: boolean,
        strict?: boolean,
        minify?: boolean,
        urlType?: string,
        urlRandomness?: string,
        lanType?: string,
        [propName: string]: any,
      }
      ignoreNodeModulesValidation?: any  // TODO: better def
      nodeModulesPath?: string
      ios?: {
        bundleIdentifier?: string,
        buildNumber?: string,
        config?: {
          usesNonExemptEncryption?: boolean,
          googleSignIn?: {
            reservedClientId: string,
          },
        },
        supportsTablet?: boolean,
        infoPlist?: any,
      }
      android?: {
        package?: string,
        versionCode?: string,
        config?: {
          fabric?: {
            apiKey: string,
            buildSecret: string,
          },
          googleMaps?: {
            apiKey: string,
          },
          googleSignIn?: {
            apiKey: string,
            certificateHash: string,
          },
        },
      },
      facebookScheme: any
      xde: boolean
      developper?: {
        tool?: string,
        [propName: string]: any,
      }
      bundleUrl?: string
      debuggerHost?: string
      mainModuleName?: string
      logUrl?: string
      [propName: string]: any
    }
    export const manifest: Manifest
    export const linkingUri: string
  }

  export namespace Contacts {
    export type FieldType = 'phoneNumbers' | 'emails' | 'addresses'

    export interface Options {
      pageSize?: number
      pageOffset?: number
      fields?: Array<FieldType>
    }

    export interface Contact {
      id: number
      name: string
      firstName?: string
      middleName?: string
      lastName?: string
      emails?: Array<{
        email?: string,
        primary?: boolean,
        label: string,
      }>
      phoneNumbers?: Array<{
        number?: string,
        primary?: boolean,
        label: string,
      }>
      addresses?: Array<{
        street?: string,
        city?: string,
        country?: string,
        region?: string,
        neighborhood?: string,
        postcode?: string,
        pobox?: string,
        label: string,
      }>
      company?: string
      jobTitle?: string
    }

    export interface Response {
      data: Array<Contact>,
      total: number,
      hasNextPage: boolean,
      hasPreviousPage: boolean,
    }

    export const PHONE_NUMBERS = 'phoneNumbers'
    export const EMAILS = 'emails'
    export const ADDRESSES = 'addresses'

    export type Field = 'phoneNumbers' | 'emails' | 'addresses'

    export interface Options {
      pageSize?: number
      pageOffset?: number
      fields?: Array<Field>
    }
    export function getContactsAsync(options: Options): Promise<Response>
  }

  /**
   * Expo BlurView
   */
  interface BlurViewProps {
    intensity: number
    style?: ViewStyle
    tint: 'light' | 'default' | 'dark'
  }
  export class BlurView extends React.Component<BlurViewProps, {}> { }

  /**
   * AppLoading
   */
  export class AppLoading extends React.Component<void, void> { }

  /**
   * Expo BarCodeScanner
   */
  export interface BarCodeScannerProps {
    type?: 'front' | 'back'
    torchMode?: 'on' | 'off'
    barCodeTypes: Array<string>     // TODO: add supported formats
    style: ViewStyle
  }

  export class BarCodeScanner extends React.Component<BarCodeScannerProps, void> { }

  /**
   * Expo GLView
   * TODO: better defs because there is no complete documentation.
   * I did it from the code.
   */
  export interface GLViewProps extends ViewProperties {
    onContextCreate(): void
    msaaSamples: number
  }
  export class GLView extends React.Component<GLViewProps, { msaaSamples: number }> { }

  /**
   * Expo KeepAwake
   */
  export class KeepAwake extends React.Component<void, void> {
    public static activate(): void
    public static deactivate(): void
  }

  /**
   * Expo MapView
   */
  // TODO: MapView

  /**
   * Expo Video
   */
  export interface VideoLoad {
    duration: number
    currentTime: number
    canPlayReverse: boolean
    canPlayFastForward: boolean
    canPlaySlowForward: boolean
    canPlaySlowReverse: boolean
    canStepBackward: boolean
    canStepForward: boolean
    naturalSize: {
      width: number;
      heigth: number;
      orientation: 'landscape' | 'portrait'
    }
  }
  export type VideoError = {
    code: any,
    domain: any,
  } | {
    what: any,
    extra: any,
  }

  export interface VideoProgress {
    currentTime: number
    playableDuration: number
  }

  export interface VideoSeek {
    currentTime: number
    seekTime: number
  }

  export interface VideoProps {
    source: any    // TODO: better def: string|*require(file)*
    fullscreen?: boolean
    resizeMode?: string    // TODO: resize mode instead of general string
    repeat?: boolean
    paused?: boolean
    volume?: number
    muted?: boolean
    rate?: number
    onLoadStart?: (param: { uri: string }) => any
    onLoad?: (load: VideoLoad) => any
    onError?: (error: { error: VideoError }) => any
    onProgress?: (progress: VideoProgress) => any
    onSeek?: (seek: VideoSeek) => any
    onEnd?: () => any
  }

  export class Video extends React.Component<VideoProps, void> {
    public static RESIZE_MODE_CONTAIN: string
    public static RESIZE_MODE_COVER: string
    public static RESIZE_MODE_STRETCH: string

    public seek(time: string): void
    public presentFullscreenPlayer(): void
    public dismissFullscreenPlayer(): void
  }

  export namespace DocumentPicker {
    export interface Options {
      type: string
    }
    export type Response = {
      type: 'success',
      uri: string,
      name: string,
      size: number,
    } | {
      type: 'cancel',
    }

    export function getDocumentAsync(options: Options): Response
  }

  export namespace ErrorRecovery {
    export function setRecoveryProps(props: object): void
  }

  export namespace Facebook {
    export interface Options {
      permissions?: Array<string>
      behavior?: 'web' | 'native' | 'browser' | 'system'
    }
    export type Response = {
      type: 'success',
      token: string,
      expires: number,
    } | {
      type: 'cancel',
    }
    export function logInWithReadPermissionsAsync(appId: string, options: Options): void
  }

  export namespace FacebookAds {
    /**
     * Interstitial Ads
     */
    export namespace InterstitialAdManager {
      export function showAd(placementId: string): Promise<boolean>
    }

    /**
     * Native Ads
     */
    export type MediaCachePolicy = 'none' | 'icon' | 'image' | 'all'
    export class NativeAdsManager {
      constructor(placementId: string, numberOfAdsToRequest?: number);
      public disableAutoRefresh(): void
      public setMediaCachePolicy(iOS: MediaCachePolicy): any
    }

    export function withNativeAd(component: React.Component<{
      icon?: string;
      coverImage?: string;
      title?: string;
      subtitle?: string;
      description?: string;
      callToActionText?: string;
      socialContext?: string;
    }, any>): React.Component<{ adsManager: NativeAdsManager }, { ad: any, canRequestAds: boolean }>

    /**
     * Banner View
     */
    export type AdType = 'large' | 'rectangle' | 'standard'

    export interface BannerViewProps {
      type: AdType
      placementId: string
      onPress: () => any
      onError: () => any
    }

    export class BannerView extends React.Component<BannerViewProps, void> { }

    /**
     * Ad Settings
     */
    export namespace AdSettings {
      export const currentDeviceHash: string
      export function addTestDevice(device: string): void
      export function clearTestDevices(): void
      export type SDKLogLevel = 'none'
        | 'debug'
        | 'verbose'
        | 'warning'
        | 'error'
        | 'notification'

      export function setLogLevel(logLevel: SDKLogLevel): void
      export function setIsChildDirected(isDirected: boolean): void
      export function setMediationService(mediationService: string): void
      export function setUrlPrefix(urlPrefix: string): void
    }
  }

  export namespace Font {
    export function loadAsync(nameOrMap: string | object, uriOrModuleOrAsset: any): void  // TODO: better defs because the doc is not updated I think ...
  }

  export namespace Google {
    export interface LogInConfig {
      androidClientId?: string
      androidStandaloneAppClientId?: string
      iosClientId?: string
      iosStandaloneAppClientId?: string
      behavior?: 'system' | 'web'
      scopes?: Array<string>
    }

    export type LogInResult = {
      type: 'cancel',
    } | {
      type: 'success',
      accessToken: string,
      idToken?: string,
      refreshToken?: string,
      serverAuthCode?: string,
      user: {
        id: string,
        name: string,
        givenName: string,
        familyName: string,
        photoUrl?: string,
        email?: string,
      },
    }

    export function logInAsync(config: LogInConfig): Promise<LogInResult>
  }

  export namespace Gyroscope {
    // TODO: good export type of x, y and z
    export interface GyroscopeObject {
      x: any
      y: any
      z: any
    }

    export function addListener(listener: (obj: GyroscopeObject) => any): EventSubscription
    export function removeAllListeners(): void
    export function setUpdateInterval(intervalMs: number): void
  }

  export namespace ImagePicker {
    export interface ImageInfo {
      uri: string
      width: number
      height: number
    }

    export type ImageResult = { cancelled: true } | ({ cancelled: false } & ImageInfo)

    export interface ImageLibraryOptions {
      allowsEditing?: boolean
      aspect?: [number, number]
      quality?: number
    }

    export function launchImageLibraryAsync(options?: ImageLibraryOptions): Promise<ImageResult>

    export interface CameraOptions {
      allowsEditing?: boolean
      aspect?: [number, number]
      quality?: number
    }
    export function launchCameraAsync(options?: CameraOptions): Promise<ImageResult>
  }

  interface LinearGradientProps extends ViewProperties {
    colors?: Array<string>
    start?: [number, number]
    end?: [number, number]
    locations?: Array<number>
  }

  /** Linear gradient. See https://github.com/react-native-community/react-native-linear-gradient. */
  export class LinearGradient extends Component<LinearGradientProps, {}> { }

  export namespace Location {
    export interface LocationOptions {
      enableHighAccuracy?: boolean
      timeInterval?: number
      distanceInterval?: number
    }

    export interface LocationData {
      coords: {
        latitude: number,
        longitude: number,
        altitude: number,
        accuracy: number,
        heading: number,
        speed: number,
      }
      timestamp: number
    }

    export type LocationCallback = (data: LocationData) => any

    export function getCurrentPositionAsync(options: LocationOptions): Promise<LocationData>    // TODO: check if it's correct
    export function watchPositionAsync(options: LocationOptions, callback: (data: LocationData) => any): EventSubscription
  }

  export namespace Notifications {
    export interface Notification {
      origin: 'selected' | 'received'
      data: any
      remote: boolean
      isMultiple: boolean
    }

    export interface LocalNotification {
      title: string
      body?: string
      data?: any
      ios?: {
        sound?: boolean,
      }
      android?: {
        sound?: boolean;
        icon?: string;
        color?: string;
        priority?: 'min' | 'low' | 'high' | 'max';
        sticky?: boolean;
        vibrate?: boolean | Array<number>;
        link?: string;
      }
    }

    export type LocalNotificationId = string | number

    export function addListener(listener: (notification: Notification) => any): EventSubscription
    export function getExponentPushTokenAsync(): Promise<string>
    export function presentLocalNotificationAsync(localNotification: LocalNotification): Promise<LocalNotificationId>
    export function scheduleLocalNotificationAsync(
      localNotification: LocalNotification,
      schedulingOptions: { time: Date | number, repeat?: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year' },
    ): Promise<LocalNotificationId>
    export function dismissNotificationAsync(localNotificationId: LocalNotificationId): Promise<void>
    export function dismissAllNotificationsAsync(): Promise<void>
    export function cancelScheduledNotificationAsync(localNotificationId: LocalNotificationId): Promise<void>
    export function cancelAllScheduledNotificationsAsync(): Promise<void>
    export function getBadgeNumberAsync(): Promise<number>
    export function setBadgeNumberAsync(badgeNumber: number): Promise<void>
  }

  export namespace Permissions {
    export type PermissionType = 'remoteNotifications'
      | 'location'
      | 'camera'
      | 'contacts'
      | 'audioRecording'

    export type PermissionStatus = 'undetermined' | 'granted' | 'denied'
    export type PermissionExpires = 'never'
    export interface PermissionDetailsLocationIOS {
      scope: 'whenInUse' | 'always'
    }
    export interface PermissionDetailsLocationAndroid {
      scope: 'fine' | 'coarse' | 'none'
    }
    export interface PermissionResponse {
      status: PermissionStatus
      expires: PermissionExpires
      ios?: PermissionDetailsLocationIOS
      android?: PermissionDetailsLocationAndroid
    }

    export function getAsync(type: PermissionType): Promise<PermissionResponse>
    export function askAsync(type: PermissionType): Promise<PermissionResponse>

    export const CAMERA: string
    export const AUDIO_RECORDING: string
    export const LOCATION: string
    export const REMOTE_NOTIFICATIONS: string
    export const NOTIFICATIONS: string
    export const CONTACTS: string
  }

  /** Register Root Component. Useful when using function like react-redux connect for example. */
  // TODO: verify if it's a good idea or not to use generics.
  export function registerRootComponent<P, S>(component: React.Component<P, S>): React.Component<P, S>

  export namespace ScreenOrientation {
    export namespace Orientation {
      /** All 4 possible orientations */
      export const ALL: 'ALL'

      /** All but reverse portrait, could be all 4 orientations on certain Android devices. */
      export const ALL_BUT_UPSIDE_DOWN: 'ALL_BUT_UPSIDE_DOWN'

      /** Portrait orientation, could also be reverse portrait on certain Android devices. */
      export const PORTRAIT: 'PORTRAIT'

      /** Upside portrait only. */
      export const PORTRAIT_UP: 'PORTRAIT_UP'

      /** Upside down portrait only. */
      export const PORTRAIT_DOWN: 'PORTRAIT_DOWN'

      /** Any landscape orientation. */
      export const LANDSCAPE: 'LANDSCAPE'

      /** Left landscape only. */
      export const LANDSCAPE_LEFT: 'LANDSCAPE_LEFT'

      /** Right landscape only. */
      export const LANDSCAPE_RIGHT: 'LANDSCAPE_RIGHT'
    }

    export function allow(orientation: 'ALL' | 'ALL_BUT_UPSIDE_DOWN' | 'PORTRAIT' | 'PORTRAIT_UP' | 'PORTRAIT_DOWN' | 'LANDSCAPE' | 'LANDSCAPE_LEFT' | 'LANDSCAPE_RIGHT'): void
  }

  // TODO: check that all these functions return void or not.
  export namespace Segment {
    export function initializeIOS(writeKey: string): void
    export function initializeAndroid(writeKey: string): void
    export function identify(userId: string): void
    export function identifyWithTraits(userId: string, traits: any): void
    export function track(event: string): void
    export function trackWithProperties(event: string, properties: any): void
    export function flush(): void
  }

  export namespace SQLite {
    type Error = any

    export interface Database {
      transaction(
        callback: (transaction: Transaction) => any,
        error?: (error: Error) => any,     // TODO def of error
        success?: () => any,
      ): void
    }

    export interface Transaction {
      executeSql(
        sqlStatement: string,
        arguments?: Array<string | number>,
        success?: (transaction: Transaction, resultSet: ResultSet) => any,
        error?: (transaction: Transaction, error: Error) => any,
      ): any
    }

    export interface ResultSet {
      insertId: number
      rowAffected: number
      rows: {
        length: number;
        item: (index: number) => any;
        _array: Array<object>;
      }
    }

    export function openDatabase(
      name: string | {
        name: string,
        version?: string,
        description?: string,
        size?: number,
        callback?: () => any,
      },
      version?: string,
      description?: string,
      size?: number,
      callback?: () => any,
    ): any
  }

  export class Svg extends Component<Svg.SvgProps, {}> { }

  export namespace Svg {
    interface CircleProps extends SharedPathProps {
      cx: number | string
      cy: number | string
      r: number | string
    }

    interface ClipPathProps {
      id: string
    }

    interface ClipProps {
      clipPath?: string
      clipRule?: 'evenodd' | 'nonzero'
    }

    interface DefinationProps {
      name?: string
    }

    interface EllipseProps extends SharedPathProps {
      cx: number | string
      cy: number | string
      rx: number | string
      ry: number | string
    }

    interface FillProps {
      fill?: string
      fillOpacity?: number | string
      fillRule?: 'evenodd' | 'nonzero'
    }

    interface FontProps {
      fontFamily?: string
      fontSize?: number | string
      fontWeight?: number | string
      fontStyle?: string
      font?: object
    }

    interface ImageProps extends ResponderProps, TouchableProps {
      height: number | string
      href?: ImageURISource | Array<ImageURISource>
      preserveAspectRatio?: string
      width: number | string
      x?: number | string
      y?: number | string
    }

    // tslint:disable-next-line:no-shadowed-variable
    interface LinearGradientProps {
      gradientUnits?: 'objectBoundingBox' | 'userSpaceOnUse'
      id: string
      x1: number | string
      x2: number | string
      y1: number | string
      y2: number | string
    }

    interface LineProps extends SharedPathProps {
      x1: number | string
      x2: number | string
      y1: number | string
      y2: number | string
    }

    interface PathProps extends SharedPathProps {
      d: string
    }

    interface PatternProps {
      patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
      patternTransform?: string
      patternUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
      x1?: number | string
      x2?: number | string
      y1?: number | string
      y2?: number | string
    }

    interface PolygonProps extends SharedPathProps {
      points: string | Array<any>
    }

    interface PolylineProps extends SharedPathProps {
      points: string | Array<any>
    }

    interface RadialGradientProps {
      cx: number | string
      cy: number | string
      fx: number | string
      fy: number | string
      gradientUnits?: 'objectBoundingBox' | 'userSpaceOnUse'
      id: string
      r?: number | string
      rx?: number | string
      ry?: number | string
    }

    interface RectProps extends SharedPathProps {
      height: number | string
      rx?: number | string
      ry?: number | string
      width: number | string
      x: number | string
      y: number | string
    }

    interface ResponderProps {
      onMoveShouldSetPanResponder?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onMoveShouldSetPanResponderCapture?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onPanResponderEnd?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onPanResponderGrant?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onPanResponderMove?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onPanResponderReject?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onPanResponderRelease?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onPanResponderStart?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onPanResponderTerminate?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onPanResponderTerminationRequest?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onShouldBlockNativeResponder?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onStartShouldSetPanResponder?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
      onStartShouldSetPanResponderCapture?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => any
    }

    interface SharedPathProps extends
      ClipProps,
      DefinationProps,
      FillProps,
      ResponderProps,
      StrokeProps,
      TouchableProps,
      TransformProps {
    }

    interface StopProps {
      offset: number | string
      stopColor: string
      stopOpacity?: number | string
    }

    interface StrokeProps {
      stroke?: string
      strokeDasharray?: Array<number> | string
      strokeDashoffset?: number | string
      strokeLinecap?: 'butt' | 'square' | 'round'
      strokeLinejoin?: 'miter' | 'bevel' | 'round'
      strokeMiterlimit?: number | string
      strokeOpacity?: number | string
      strokeWidth?: number | string
    }

    interface SvgProps extends ViewProperties {
      height?: number | string
      opacity?: number | string
      preserveAspectRatio?: string
      viewBox?: string
      width?: number | string
    }

    interface SymbolProps {
      id: string
      preserveAspectRatio?: string
      viewBox?: string
    }

    interface TextProps extends FontProps, SharedPathProps {
      dx?: number | string
      dy?: number | string
      textAnchor?: 'start' | 'middle' | 'end'
    }

    interface TextPathProps extends FontProps, SharedPathProps {
      href: string
      startOffset?: number | string
    }

    interface TouchableProps {
      delayLongPress?: number
      delayPressIn?: number
      delayPressOut?: number
      disabled?: boolean
      onLongPress?: (...args: Array<any>) => any
      onPress?: (...args: Array<any>) => any
      onPressIn?: (...args: Array<any>) => any
      onPressOut?: (...args: Array<any>) => any
    }

    interface TransformProps {
      origin?: number | string
      originX?: number | string
      originY?: number | string
      rotate?: number | string
      rotation?: number | string
      scale?: number | string
      scaleX?: number | string
      scaleY?: number | string
      skew?: number | string
      skewX?: number | string
      skewY?: number | string
      transform?: object
      translate?: number | string
      translateX?: number | string
      translateY?: number | string
      x?: number | string
      y?: number | string
    }

    interface TSpanProps extends FontProps, SharedPathProps {
      dx?: number | string
      dy?: number | string
      textAnchor?: 'start' | 'middle' | 'end'
    }

    interface UseProps extends SharedPathProps {
      height?: number | string
      href: string
      width?: number | string
    }

    export class Circle extends Component<CircleProps, {}> { }
    export class ClipPath extends Component<ClipPathProps, {}> { }
    export class Defs extends Component<{}, {}> { }
    export class Ellipse extends Component<EllipseProps, {}> { }
    export class G extends Component<SharedPathProps, {}> { }
    export class Image extends Component<ImageProps, {}> { }
    export class Line extends Component<LineProps, {}> { }
    // tslint:disable-next-line:no-shadowed-variable
    export class LinearGradient extends Component<LinearGradientProps, {}> { }
    export class Path extends Component<PathProps, {}> { }
    export class Pattern extends Component<PatternProps, {}> { }
    export class Polygon extends Component<PolygonProps, {}> { }
    export class Polyline extends Component<PolylineProps, {}> { }
    export class RadialGradient extends Component<RadialGradientProps, {}> { }
    export class Rect extends Component<RectProps, {}> { }
    export class Shape extends Component<{}, {}> { }
    export class Stop extends Component<StopProps, {}> { }
    export class Symbol extends Component<SymbolProps, {}> { }
    export class Text extends Component<TextProps, {}> { }
    export class TextPath extends Component<TextPathProps, {}> { }
    export class TSpan extends Component<TSpanProps, {}> { }
    export class Use extends Component<UseProps, {}> { }
  }

  export function takeSnapshotAsync(
    view?: (number | React.ReactElement<any>),
    options?: {
      width?: number,
      height?: number,
      format?: 'png' | 'jpg' | 'jpeg' | 'webm',
      quality?: number,
      result?: 'file' | 'base64' | 'data-uri',
    },
  ): Promise<string>

  export namespace Util {
    export function getCurrentLocaleAsync(): Promise<string>
    export function reload(): void
  }

  export namespace WebBrowser {
    export function openBrowserAsync(url: string): Promise<{ type: 'cancelled' | 'dismissed' }>
    export function dismissBrowser(): Promise<{ type: 'dismissed' }>
  }
}

declare module '@expo/vector-icons' {
  export interface IconProps {
    size?: number
    name: string
    color?: string
  }

  export class Entypo extends React.Component<IconProps, void> { }
  export class EvilIcons extends React.Component<IconProps, void> { }
  export class FontAwesome extends React.Component<IconProps, void> { }
  export class Foundation extends React.Component<IconProps, void> { }
  export class Ionicons extends React.Component<IconProps, void> { }
  export class MaterialIcons extends React.Component<IconProps, void> { }
  export class MaterialComunityIcons extends React.Component<IconProps, void> { }
  export class Octicons extends React.Component<IconProps, void> { }
  export class Zocial extends React.Component<IconProps, void> { }
  export class SimpleLineIcons extends React.Component<IconProps, void> { }
}