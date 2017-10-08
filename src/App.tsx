import { StackNavigator } from 'react-navigation'

import { LinearGradientScreen } from './LinearGradientScreen'
import { MainScreen } from './MainScreen'
import { SvgScreen } from './SvgScreen'

export default StackNavigator({
  // tslint:disable:object-literal-sort-keys
  Main: { screen: MainScreen },
  LinearGradient: { screen: LinearGradientScreen },
  Svg: { screen: SvgScreen },
})