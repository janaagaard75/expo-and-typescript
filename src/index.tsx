import { StackNavigator } from 'react-navigation'

import { AccelerometerScreen } from 'screens/AccelerometerScreen'
import { AssetScreen } from 'screens/AssetScreen'
import { AmplitudeScreen } from 'screens/AmplitudeScreen'
import { AudioScreen } from 'screens/AudioScreen'
import { BlurView1Screen } from 'screens/BlurView1Screen'
import { BlurView2Screen } from 'screens/BlurView2Screen'
import { BrightnessScreen } from 'screens/BrightnessScreen'
import { CameraScreen } from 'screens/CameraScreen'
import { ConstantsScreen } from 'constants/ConstantsScreen'
import { FacebookScreen } from 'screens/FacebookScreen'
import { FingerprintScreen } from 'screens/FingerprintScreen'
import { FontScreen } from 'screens/FontScreen'
import { GyroscopeScreen } from 'screens/GyroscopeScreen'
import { LinearGradientScreen } from 'screens/LinearGradientScreen'
import { MainScreen } from './MainScreen'
import { ManifestScreen } from 'constants/ManifestScreen'
import { MapViewScreen } from 'screens/MapViewScreen'
import { PlatformScreen } from 'constants/PlatformScreen'
import { SvgScreen } from 'screens/SvgScreen'
import { SystemFontsScreen } from 'constants/SystemFontsScreen'
import { UtilScreen } from 'screens/UtilScreen'
import { VectorIconsScreen } from 'screens/VectorIconsScreen'

export default StackNavigator({
    Main: { screen: MainScreen },
    Accelerometer: { screen: AccelerometerScreen },
    Amplitude: { screen: AmplitudeScreen },
    Asset: { screen: AssetScreen },
    Audio: { screen: AudioScreen },
    BlurView1: { screen: BlurView1Screen },
    BlurView2: { screen: BlurView2Screen },
    Brightness: { screen: BrightnessScreen },
    Camera: { screen: CameraScreen },
    Constants: { screen: ConstantsScreen },
    Facebook: { screen: FacebookScreen },
    Fingerprint: { screen: FingerprintScreen },
    Font: { screen: FontScreen },
    Gyroscope: { screen: GyroscopeScreen },
    LinearGradient: { screen: LinearGradientScreen },
    Manifest: { screen: ManifestScreen },
    MapView: { screen: MapViewScreen },
    Platform: { screen: PlatformScreen },
    Svg: { screen: SvgScreen },
    SystemFonts: { screen: SystemFontsScreen },
    Util: { screen: UtilScreen },
    VectorIcons: { screen: VectorIconsScreen },
})