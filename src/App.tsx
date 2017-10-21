import { StackNavigator } from 'react-navigation'

import { AccelerometerScreen } from './AccelerometerScreen'
import { BlurView1Screen } from './BlurView1Screen'
import { BlurView2Screen } from './BlurView2Screen'
import { LinearGradientScreen } from './LinearGradientScreen'
import { MainScreen } from './MainScreen'
import { SvgScreen } from './SvgScreen'

export default StackNavigator({
  // tslint:disable:object-literal-sort-keys
  Main: { screen: MainScreen },

  Accelerometer: { screen: AccelerometerScreen },
  BlurView1: { screen: BlurView1Screen },
  BlurView2: { screen: BlurView2Screen },
  LinearGradient: { screen: LinearGradientScreen },
  Svg: { screen: SvgScreen },
})