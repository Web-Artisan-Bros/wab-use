/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: '#337D88',
        "primary-outline-hover": '#C6E4E1',
        "primary-dark": '#005969',
        secondary: '#31648E',
        "secondary-outline-hover": '#BFE2F4',
        "secondary-dark": '#244866',
        dark: '#141C24',
        light: '#F2F4F7',
        "basic-border": '#CED2DA',
        "dark-border": '#97A1AF',
        "basic-text": '#344051'
      },
      borderRadius: {
        'basic': '1rem',
        "small": "0.625rem",
      },
      fontSize: {
        // xs: 9.23px → 12px | lh: 1em → 1em
        "xs-fluid": ["clamp(0.5769rem, 0.5274rem + 0.2473vi, 0.75rem)", "1em"],
        // sm: 10.77px → 14px | lh: 1.25em → 1.25em
        "sm-fluid": ["clamp(0.6731rem, 0.6154rem + 0.2884vi, 0.875rem)", "1.25em"],
        // base: 12.31px → 16px | lh: 1.5em → 1.5em
        "base-fluid": ["clamp(0.7694rem, 0.7035rem + 0.3295vi, 1rem)", "1.5em"],
        // lg: 13.85px → 18px | lh: 1.75em → 1.75em
        "lg-fluid": ["clamp(0.8656rem, 0.7915rem + 0.3705vi, 1.125rem)", "1.75em"],
        // xl: 15.38px → 20px | lh: 1.75em → 1.75em
        "xl-fluid": ["clamp(0.9613rem, 0.8788rem + 0.4125vi, 1.25rem)", "1.25em"],
        // 2xl: 18.46px → 24px | lh: 2em → 2em
        "2xl-fluid": ["clamp(1.1538rem, 1.0548rem + 0.4946vi, 1.5rem)", "1.25em"],
        // 3xl: 23.08px → 30px | lh: 2.25em → 2.25em
        "3xl-fluid": ["clamp(1.4425rem, 1.3189rem + 0.6179vi, 1.875rem)", "2.25em"],
        // 4xl: 27.69px → 36px | lh: 2.5em → 2.5em
        "4xl-fluid": ["clamp(1.7306rem, 1.5822rem + 0.7420vi, 2.25rem)", "2.5em"],
        // 5xl: 36.92px → 48px | lh: 1em → 1em
        "5xl-fluid": ["clamp(2.3075rem, 2.1096rem + 0.9893vi, 3rem)", "1em"],
        // 6xl: 46.15px → 64px | lh: 1em → 1em
        "6xl-fluid": ["clamp(2.8844rem, 2.5656rem + 1.5938vi, 4rem)", "1.2em"],
        // 7xl: 55.38px → 72px | lh: 1em → 1em
        "7xl-fluid": ["clamp(3.4613rem, 3.1645rem + 1.4839vi, 4.5rem)", "1em"],
        // 8xl: 73.85px → 96px | lh: 1em → 1em
        "8xl-fluid": ["clamp(4.6156rem, 4.2201rem + 1.9777vi, 6rem)", "1em"],
        // 9xl: 98.46px → 128px | lh: 1em → 1em
        "9xl-fluid": ["clamp(6.1537rem, 5.6262rem + 2.6375vi, 8rem)", "1em"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(53.92deg, #78B22B 1.09%, rgba(69, 169, 91, 0.9801) 32.28%, rgba(23, 162, 135, 0.9604) 74.19%, rgba(7, 160, 151, 0.969158) 100.77%, rgba(6, 160, 153, 0.97) 103.33%);"
      },
      spacing: {
        // 0: 0px → 0px
        "0": "0rem",
        // 0.5: 2px → 2.6px
        "0.5-fluid": "clamp(0.125rem, 0.1143rem + 0.0536vi, 0.1625rem)",
        // 1: 4px → 5.2px
        "1-fluid": "clamp(0.25rem, 0.2286rem + 0.1071vi, 0.325rem)",
        // 1.5: 6px → 7.8px
        "1.5-fluid": "clamp(0.375rem, 0.3429rem + 0.1607vi, 0.4875rem)",
        // 2: 8px → 10.4px
        "2-fluid": "clamp(0.5rem, 0.4571rem + 0.2143vi, 0.65rem)",
        // 2.5: 10px → 13px
        "2.5-fluid": "clamp(0.625rem, 0.5714rem + 0.2679vi, 0.8125rem)",
        // 3: 12px → 15.6px
        "3-fluid": "clamp(0.75rem, 0.6857rem + 0.3214vi, 0.975rem)",
        // 3.5: 14px → 18.2px
        "3.5-fluid": "clamp(0.875rem, 0.8000rem + 0.3750vi, 1.1375rem)",
        // 4: 16px → 20.8px
        "4-fluid": "clamp(1rem, 0.9143rem + 0.4286vi, 1.3rem)",
        // 5: 20px → 26px
        "5-fluid": "clamp(1.25rem, 1.1429rem + 0.5357vi, 1.625rem)",
        // 6: 24px → 31.2px
        "6-fluid": "clamp(1.5rem, 1.3714rem + 0.6429vi, 1.95rem)",
        // 7: 28px → 36.4px
        "7-fluid": "clamp(1.75rem, 1.6000rem + 0.7500vi, 2.275rem)",
        // 8: 32px → 41.6px
        "8-fluid": "clamp(2rem, 1.8286rem + 0.8571vi, 2.6rem)",
        // 9: 36px → 46.8px
        "9-fluid": "clamp(2.25rem, 2.0571rem + 0.9643vi, 2.925rem)",
        // 10: 40px → 52px
        "10-fluid": "clamp(2.5rem, 2.2857rem + 1.0714vi, 3.25rem)",
        // 11: 44px → 57.2px
        "11-fluid": "clamp(2.75rem, 2.5143rem + 1.1786vi, 3.575rem)",
        // 12: 48px → 62.4px
        "12-fluid": "clamp(3rem, 2.7429rem + 1.2857vi, 3.9rem)",
        // 14: 56px → 72.8px
        "14-fluid": "clamp(3.5rem, 3.2000rem + 1.5000vi, 4.55rem)",
        // 16: 64px → 83.2px
        "16-fluid": "clamp(4rem, 3.6571rem + 1.7143vi, 5.2rem)",
        // 20: 80px → 104px
        "20-fluid": "clamp(5rem, 4.5714rem + 2.1429vi, 6.5rem)",
        // 24: 96px → 124.8px
        "24-fluid": "clamp(6rem, 5.4857rem + 2.5714vi, 7.8rem)",
        // 28: 112px → 145.6px
        "28-fluid": "clamp(7rem, 6.4000rem + 3.0000vi, 9.1rem)",
        // 32: 128px → 166.4px
        "32-fluid": "clamp(8rem, 7.3143rem + 3.4286vi, 10.4rem)",
        // 36: 144px → 187.2px
        "36-fluid": "clamp(9rem, 8.2286rem + 3.8571vi, 11.7rem)",
        // 40: 160px → 208px
        "40-fluid": "clamp(10rem, 9.1429rem + 4.2857vi, 13rem)",
        // 44: 176px → 228.8px
        "44-fluid": "clamp(11rem, 10.0571rem + 4.7143vi, 14.3rem)",
        // 48: 192px → 249.6px
        "48-fluid": "clamp(12rem, 10.9714rem + 5.1429vi, 15.6rem)",
        // 52: 208px → 270.4px
        "52-fluid": "clamp(13rem, 11.8857rem + 5.5714vi, 16.9rem)",
        // 56: 224px → 291.2px
        "56-fluid": "clamp(14rem, 12.8000rem + 6.0000vi, 18.2rem)",
        // 60: 240px → 312px
        "60-fluid": "clamp(15rem, 13.7143rem + 6.4286vi, 19.5rem)",
        // 64: 256px → 332.8px
        "64-fluid": "clamp(16rem, 14.6286rem + 6.8571vi, 20.8rem)",
        // 72: 288px → 374.4px
        "72-fluid": "clamp(18rem, 16.4571rem + 7.7143vi, 23.4rem)",
        // 80: 320px → 416px
        "80-fluid": "clamp(20rem, 18.2857rem + 8.5714vi, 26rem)",
        // 96: 384px → 499.2px
        "96-fluid": "clamp(24rem, 21.9429rem + 10.2857vi, 31.2rem)",
        // 400: 320px → 400px
        "400-fluid": "clamp(20rem, 18.5714rem + 7.1429vi, 25rem)",
        // 650: 384px → 650px
        '650-fluid': 'clamp(24rem, 19.2500rem + 23.7500vi, 40.625rem)',
        // 650: 384px → 900px
        "900-fluid": "clamp(6.1537rem, -8.1595rem + 71.5661vi, 56.25rem)",
        // 1040: 384px → 1040px
        '1040-fluid': 'clamp(24rem, 12.2857rem + 58.5714vi, 65rem)',
        // 24: 96px → 124.8px
        "basic-fluid": "clamp(6rem, 5.4857rem + 2.5714vi, 7.8rem)",
      },
      boxShadow: {
        sidebar: '0px 17px 33px -2px #1C27310D'
      }
    },
  },
  plugins: [],
  content:[
    'formkit.theme.ts'
  ]
}


