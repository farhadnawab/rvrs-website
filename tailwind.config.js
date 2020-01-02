module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#316aff',
        'secondary': '#141416',
        'tertiary': '#f8f8f8',
        'green': '#6ac75a',
        'lightgray': '#f6f6f6',
        'default': '#262626'
      },
      letterSpacing:{
          'wider': '3px',
          'widest': '6px'
      },
      fontFamily: {
        'geomanist': 'geomanist',
        'geomanist-book': 'geomanistbook'
      },
      fontSize: {
        '2xs': '0.65em',
        '3xs': '0.55em',
        '4xs': '0.45em'
      },
      borderRadius: {
        'br-15': '15px',
        'sm': '4px'
      },
      zIndex: {
        '-10': -10,
        '-20': -20,
        '-30': -30,
        '-40': -40,
        '-50': -50
      },
      padding:{
        '05': '0.05rem'
      },
      width:{
        'full-05': "105%",
        'full-10': "110%",
        'full-15': "115%",
        'full-20': "120%",
        'full-25': "125%",
        'full-30': "130%",
        'full-35': "135%",
        'full-40': "140%",
        'full-45': "145%",
        'full-50': "150%"
      },
      maxWidth:{
        '0': 'none',
        '2xs': '18rem',
        '3xs': '16rem',
        '4xs': '14rem',
        '5xs': '12rem',
        '6xs': '10rem',
        '50': '50%'
      },
      height:{
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '180': '40rem'
      },
      backgroundPosition:{
        'right-center': 'right center'
      }
    }
  },
  variants: ['responsive', 'hover', 'focus', 'group-hover'],
  plugins: []
}
