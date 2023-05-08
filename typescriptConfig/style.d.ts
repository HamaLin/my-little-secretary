import 'styled-components';
import { ThemeType } from '../src/styledTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
