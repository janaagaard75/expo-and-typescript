import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { AccelerometerScreen } from "./AccelerometerScreen";
import { AmplitudeScreen } from "./AmplitudeScreen";
import { AssetScreen } from "./AssetScreen";
import { AudioScreen } from "./AudioScreen";
import { BarCodeScannerScreen } from "./BarCodeScannerScreen";
import { BlurView2Screen } from "./BlurView2Screen";
import { BlurViewScreen } from "./BlurViewScreen";
import { BrightnessScreen } from "./BrightnessScreen";
import { CameraScreen } from "./CameraScreen";
import { ConstantsScreen } from "./constants/ConstantsScreen";
import { ManifestScreen } from "./constants/ManifestScreen";
import { PlatformScreen } from "./constants/PlatformScreen";
import { SystemFontsScreen } from "./constants/SystemFontsScreen";
import { FacebookScreen } from "./FacebookScreen";
import { FontScreen } from "./FontScreen";
import { GyroscopeScreen } from "./GyroscopeScreen";
import { LinearGradientScreen } from "./LinearGradientScreen";
import { LocalAuthenticationScreen } from "./LocalAuthenticationScreen";
import { MainScreen } from "./MainScreen";
import { MapViewScreen } from "./MapViewScreen";
import { SvgScreen } from "./SvgScreen";
import { VectorIconsScreen } from "./VectorIconsScreen";

const mainNavigator = createStackNavigator({
  // tslint:disable:object-literal-sort-keys
  Main: { screen: MainScreen },

  Accelerometer: { screen: AccelerometerScreen },
  Amplitude: { screen: AmplitudeScreen },
  Asset: { screen: AssetScreen },
  Audio: { screen: AudioScreen },
  BarCodeScanner: { screen: BarCodeScannerScreen },
  BlurView: { screen: BlurViewScreen },
  BlurView2: { screen: BlurView2Screen },
  Brightness: { screen: BrightnessScreen },
  Camera: { screen: CameraScreen },
  Constants: { screen: ConstantsScreen },
  Facebook: { screen: FacebookScreen },
  Font: { screen: FontScreen },
  Gyroscope: { screen: GyroscopeScreen },
  LinearGradient: { screen: LinearGradientScreen },
  LocalAuthentication: { screen: LocalAuthenticationScreen },
  Manifest: { screen: ManifestScreen },
  MapView: { screen: MapViewScreen },
  Platform: { screen: PlatformScreen },
  Svg: { screen: SvgScreen },
  SystemFonts: { screen: SystemFontsScreen },
  VectorIcons: { screen: VectorIconsScreen },
});

export default createAppContainer(mainNavigator);
