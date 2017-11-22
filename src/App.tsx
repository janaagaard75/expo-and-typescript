import { StackNavigator } from 'react-navigation'

import { AccelerometerScreen } from './AccelerometerScreen'
import { AssetScreen } from './AssetScreen'
import { AudioScreen } from './AudioScreen'
import { BlurView1Screen } from './BlurView1Screen'
import { BlurView2Screen } from './BlurView2Screen'
import { BrightnessScreen } from './BrightnessScreen'
import { CameraScreen } from './CameraScreen'
import { ConstantsScreen } from './constants/ConstantsScreen'
import { FontScreen } from './FontScreen'
import { GyroscopeScreen } from './GyroscopeScreen'
import { LinearGradientScreen } from './LinearGradientScreen'
import { MainScreen } from './MainScreen'
import { ManifestScreen } from './constants/ManifestScreen'
import { MapViewScreen } from './MapViewScreen'
import { PlatformScreen } from './constants/PlatformScreen'
import { SvgScreen } from './SvgScreen'
import { SystemFontsScreen } from './constants/SystemFontsScreen'
import { VectorIconsScreen } from './VectorIconsScreen'

export default StackNavigator({
  // tslint:disable:object-literal-sort-keys
  Main: { screen: MainScreen },

  Accelerometer: { screen: AccelerometerScreen },
  Asset: { screen: AssetScreen },
  Audio: { screen: AudioScreen },
  BlurView1: { screen: BlurView1Screen },
  BlurView2: { screen: BlurView2Screen },
  Brightness: { screen: BrightnessScreen },
  Camera: { screen: CameraScreen },
  Constants: { screen: ConstantsScreen },
  Font: { screen: FontScreen },
  Gyroscope: { screen: GyroscopeScreen },
  LinearGradient: { screen: LinearGradientScreen },
  Manifest: { screen: ManifestScreen },
  MapView: { screen: MapViewScreen },
  Platform: { screen: PlatformScreen },
  Svg: { screen: SvgScreen },
  SystemFonts: { screen: SystemFontsScreen },
  VectorIcons: { screen: VectorIconsScreen }
})