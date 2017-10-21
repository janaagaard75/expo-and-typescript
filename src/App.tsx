import { StackNavigator } from 'react-navigation'

import { AccelerometerScreen } from './AccelerometerScreen'
import { BlurViewScreen } from './BlurViewScreen'
import { LinearGradientScreen } from './LinearGradientScreen'
import { MainScreen } from './MainScreen'
import { SvgScreen } from './SvgScreen'

export default StackNavigator({
  // tslint:disable:object-literal-sort-keys
  Main: { screen: MainScreen },

  Accelerometer: { screen: AccelerometerScreen },
  BlurView: { screen: BlurViewScreen },
  LinearGradient: { screen: LinearGradientScreen },
  Svg: { screen: SvgScreen },
})