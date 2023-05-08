export type StyleSize = 'small' | 'medium' | 'large';

export type ThemeIconButtonFrameType = {
  [key in StyleSize]: string;
};

export interface ThemeType {
  background: {
    default: string;
  };
  palette: {
    primary: {
      light: string;
      main: string;
      dark: string;
    };
  };

  frame: {
    button: ThemeIconButtonFrameType;
    iconButton: ThemeIconButtonFrameType;
  };
}

export const theme: ThemeType = {
  background: {
    default: '#f6f6f6',
  },
  palette: {
    primary: {
      light: '#a9c3ed',
      main: '#648dcf',
      dark: '#446ba9',
    },
  },

  frame: {
    button: {
      small: '35px',
      medium: '35px',
      large: '35px',
    },
    iconButton: {
      small: '5px',
      medium: '8px',
      large: '12px',
    },
  },
};

export default { theme };
