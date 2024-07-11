/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "custom-red":"#ea5353",
        "custom-cyan" : "#45d3d3",
        "custom-orange" : "#fcaf4a",
        "custom-blue" : "#549ef2",
        "custom-dark-blue" : "#4c4e61",
        "custom-greyish-blue" : "#a3a5ae",
        "custom-light-grey" : "#fafafa"
      },
      boxShadow:{
        "custom-shadow": `0px 15px 25px rgba(0, 0, 0, 0.15)` 
      },
      borderRadius:{
        "ssm":"7px"
      },
      borderWidth:{
        "3": "3px"
      },
      fontSize :{
        "xxl": ["25px", "34px"]
      },
      screens:{
        "xxs" : {
          "min":"0px",
          "max":"900px"
        },
        "xs" : {
          "min":"900px"
        }
        
      }
    },
  },
  plugins: [],
}

