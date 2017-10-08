import { StackNavigator } from 'react-navigation'

import { MainScreen } from './MainScreen'
import { SvgScreen } from './SvgScreen'

export default StackNavigator({
  Main: { screen: MainScreen },
  Svg: { screen: SvgScreen }
})