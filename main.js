let basicHTMLColors = [
    {"white": "#FFFFFF"},
    {"Silver":"#C0C0C0"},
    {"Gray":"#808080"},
    {"Black":"#000000"},
    {"Red":"#FF0000"},
    {"Maroon":"#800000"},
    {"Yellow":"#FFFF00"},
    {"Olive":"#808000"},
    {"Lime":"#00FF00"},
    {"Green":"#008000"},
    {"Aqua":"#00FFFF"},
    {"Teal":"#008080"},
    {"Blue":"#0000FF"},
    {"Navy":"#000080"},
    {"Fuchsia":"#FF00FF"},
    {"Purple":"#800080"},
]

let extendedColors = [
    {"MediumVioletRed":	"#C71585"},
    {"DeepPink": "#FF1493"},
    {"PaleVioletRed": "#DB7093"},
    {"HotPink": "#FF69B4"},
    {"LightPink": "#FFB6C1"},
    {"Pink": "#FFC0CB"},
    {"DarkRed":	"#8B0000"},
    {"Red":	"#FF0000"},
    {"Firebrick":	"#B22222"},
    {"Crimson":	"#DC143C"},
    {"IndianRed":	"#CD5C5C"},
    {"LightCoral":	"#F08080"},
    {"Salmon":	"#FA8072"},
    {"DarkSalmon": "#E9967A"},
    {"LightSalmon":	"#FFA07A"},
    {"OrangeRed":	"#FF4500"},
    {"Tomato":	"#FF6347"},
    {"DarkOrange":	"#FF8C00"},
    {"Coral":	"#FF7F50"},
    {"Orange":	"#FFA500"},
    {"DarkKhaki":	"#BDB76B"},
    {"Gold":	"#FFD700"},
    {"Khaki":	"#F0E68C"},
    {"PeachPuff":	"#FFDAB9"},
    {"Yellow":	"#FFFF00"},
    {"PaleGoldenrod":	"#EEE8AA"},
    {"Moccasin":	"#FFE4B5"},
    {"PapayaWhip":	"#FFEFD5"},
    {"LightGoldenrodYellow":	"#FAFAD2"},
    {"LemonChiffon":	"#FFFACD"},
    {"LightYellow":	"#FFFFE0"},
    {"Maroon":	"#800000"},
    {"Brown":	"#A52A2A"},
    {"SaddleBrown":	"#8B4513"},
    {"Sienna":	"#A0522D"},
    {"Chocolate":	"#D2691E"},
    {"DarkGoldenrod":	"#B8860B"},
    {"Peru":	"#CD853F"},
    {"RosyBrown":	"#BC8F8F"},
    {"Goldenrod":	"#DAA520"},
    {"SandyBrown":	"#F4A460"},
    {"Tan":	"#D2B48C"},
    {"Burlywood":	"#DEB887"},
    {"Wheat":	"#F5DEB3"},
    {"NavajoWhite":	"#FFDEAD"},
    {"Bisque":	"#FFE4C4"},
    {"BlanchedAlmond":	"#FFEBCD"},
    {"Cornsilk":	"#FFF8DC"},
    {"Indigo":	"#4B0082"},
    {"Purple":	"#800080"},
    {"DarkMagenta":	"#8B008B"},
    {"DarkViolet":	"#9400D3"},
    {"DarkSlateBlue":	"#483D8B"},
    {"BlueViolet":	"#8A2BE2"},
    {"DarkOrchid":	"#9932CC"},
    {"Fuchsia":	"#FF00FF"},
    {"Magenta":	"#FF00FF"},
    {"SlateBlue":	"#6A5ACD"},
    {"MediumSlateBlue":	"#7B68EE"},
    {"MediumOrchid":	"#BA55D3"},
    {"MediumPurple":	"#9370DB"},
    {"Orchid":	"#DA70D6"},
    {"Violet":	"#EE82EE"},
    {"Plum":	"#DDA0DD"},
    {"Thistle":	"#D8BFD8"},
    {"Lavender":	"#E6E6FA"},
    {"MidnightBlue":	"#191970"},
    {"Navy":	"#000080"},
    {"DarkBlue":	"#00008B"},
    {"MediumBlue":	"#0000CD"},
    {"Blue":	"#0000FF"},
    {"RoyalBlue":	"#4169E1"},
    {"SteelBlue":	"#4682B4"},
    {"DodgerBlue":	"#1E90FF"},
    {"DeepSkyBlue":	"#00BFFF"},
    {"CornflowerBlue":	"#6495ED"},
    {"SkyBlue":	"#87CEEB"},
    {"LightSkyBlue":	"#87CEFA"},
    {"LightSteelBlue":	"#B0C4DE"},
    {"LightBlue":	"#ADD8E6"},
    {"PowderBlue":	"#B0E0E6"},
    {"Teal":	"#008080"},
    {"DarkCyan":	"#008B8B"},
    {"LightSeaGreen":	"#20B2AA"},
    {"CadetBlue":	"#5F9EA0"},
    {"DarkTurquoise":	"#00CED1"},
    {"MediumTurquoise":	"#48D1CC"},
    {"Turquoise":	"#40E0D0"},
    {"Aqua":	"#00FFFF"},
    {"Cyan":	"#00FFFF"},
    {"Aquamarine":	"#7FFFD4"},
    {"PaleTurquoise":	"#AFEEEE"},
    {"LightCyan":	"#E0FFFF"},
    {"DarkGreen":	"#006400"},
    {"Green":	"#008000"},
    {"DarkOliveGreen":	"#556B2F"},
    {"ForestGreen":	"#228B22"},
    {"SeaGreen":	"#2E8B57"},
    {"Olive":	"#808000"},
    {"OliveDrab":	"#6B8E23"},
    {"MediumSeaGreen":	"#3CB371"},
    {"LimeGreen":	"#32CD32"},
    {"Lime":	"#00FF00"},
    {"SpringGreen":	"#00FF7F"},
    {"MediumSpringGreen":	"#00FA9A"},
    {"DarkSeaGreen":	"#8FBC8F"},
    {"MediumAquamarine":	"#66CDAA"},
    {"YellowGreen":	"#9ACD32"},
    {"LawnGreen":	"#7CFC00"},
    {"Chartreuse":	"#7FFF00"},
    {"LightGreen":	"#90EE90"},
    {"GreenYellow":	"#ADFF2F"},
    {"PaleGreen":	"#98FB98"},
    {"MistyRose":	"#FFE4E1"},
    {"AntiqueWhite":	"#FAEBD7"},
    {"Linen":	"#FAF0E6"},
    {"Beige":	"#F5F5DC"},
    {"WhiteSmoke":	"#F5F5F5"},
    {"LavenderBlush":	"#FFF0F5"},
    {"OldLace":	"#FDF5E6"},
    {"AliceBlue":	"#F0F8FF"},
    {"Seashell":	"#FFF5EE"},
    {"GhostWhite":	"#F8F8FF"},
    {"Honeydew":	"#F0FFF0"},
    {"FloralWhite":	"#FFFAF0"},
    {"Azure":	"#F0FFFF"},
    {"MintCream":	"#F5FFFA"},
    {"Snow":	"#FFFAFA"},
    {"Ivory":	"#FFFFF0"},
    {"White":	"#FFFFFF"},
    {"Black":	"#000000"},
    {"DarkSlateGray":	"#2F4F4F"},
    {"DimGray":	"#696969"},
    {"SlateGray":	"#708090"},
    {"Gray":	"#808080"},
    {"LightSlateGray":	"#778899"},
    {"DarkGray":	"#A9A9A9"},
    {"Silver":	"#C0C0C0"},
    {"LightGray":	"#D3D3D3"},
    {"Gainsboro":	"#DCDCDC"},
]


let aliases = [
    {"darkgrey" : "#A9A9A9"},
    {"lightgrey": "#D3D3D3"},
    {"DarkSlateGrey":	"#2F4F4F"},
    {"DimGrey":	"#696969"},
    {"SlateGrey":	"#708090"},
    {"Grey":	"#808080"},
    {"LightSlateGrey":	"#778899"},
]
let newColors = [
    {"RebeccaPurple": "#663399"}
]

let allColors = [
    {"MediumVioletRed":	{
        "hex": "#C71585",
        "img":"",
        "text":""}},
    {"DeepPink": {
        "hex": "#FF1493",
        "img":"",
        "text":""}},
    {"PaleVioletRed": {
        "hex": "#DB7093",
        "img":"",
        "text":""}},
    {"HotPink": {
        "hex": "#FF69B4",
        "img":"",
        "text":""}},
    {"LightPink": {
        "hex": "#FFB6C1",
        "img":"",
        "text":""}},
    {"Pink": {
        "hex": "#FFC0CB",
        "img":"",
        "text":""}},
    {"DarkRed":	{
        "hex": "#8B0000",
        "img":"",
        "text":""}},
    {"Red":	{
        "hex": "#FF0000",
        "img":"",
        "text":""}},
    {"Firebrick":	{
        "hex": "#B22222",
        "img":"",
        "text":""}},
    {"Crimson":	{
        "hex": "#DC143C",
        "img":"",
        "text":""}},
    {"IndianRed":	{
        "hex": "#CD5C5C",
        "img":"",
        "text":""}},
    {"LightCoral":	{
        "hex": "#F08080",
        "img":"",
        "text":""}},
    {"Salmon":	{
        "hex": "#FA8072",
        "img":"salmon.png",
        "text":""}},
    {"DarkSalmon": {
        "hex": "#E9967A",
        "img":"salmon.png",
        "text":""}},
    {"LightSalmon":	{
        "hex": "#FFA07A",
        "img":"salmon.png",
        "text":""}},
    {"OrangeRed":	{
        "hex": "#FF4500",
        "img":"",
        "text":""}},
    {"Tomato":	{
        "hex": "#FF6347",
        "img":"",
        "text":""}},
    {"DarkOrange":	{
        "hex": "#FF8C00",
        "img":"",
        "text":""}},
    {"Coral":	{
        "hex": "#FF7F50",
        "img":"",
        "text":""}},
    {"Orange":	{
        "hex": "#FFA500",
        "img":"",
        "text":""}},
    {"DarkKhaki":	{
        "hex": "#BDB76B",
        "img":"",
        "text":""}},
    {"Gold":	{
        "hex": "#FFD700",
        "img":"",
        "text":""}},
    {"Khaki":	{
        "hex": "#F0E68C",
        "img":"",
        "text":""}},
    {"PeachPuff":	{
        "hex": "#FFDAB9",
        "img":"peachpuff.png",
        "text":""}},
    {"Yellow":	{
        "hex": "#FFFF00",
        "img":"",
        "text":""}},
    {"PaleGoldenrod":	{
        "hex": "#EEE8AA",
        "img":"goldenrod.jpeg",
        "text":""}},
    {"Moccasin":	{
        "hex": "#FFE4B5",
        "img":"",
        "text":""}},
    {"PapayaWhip":	{
        "hex": "#FFEFD5",
        "img":"",
        "text":""}},
    {"LightGoldenrodYellow":	{
        "hex": "#FAFAD2",
        "img":"goldenrod.jpeg",
        "text":""}},
    {"LemonChiffon":	{
        "hex": "#FFFACD",
        "img":"",
        "text":""}},
    {"LightYellow":	{
        "hex": "#FFFFE0",
        "img":"",
        "text":""}},
    {"Maroon":	{
        "hex": "#800000",
        "img":"",
        "text":""}},
    {"Brown":	{
        "hex": "#A52A2A",
        "img":"",
        "text":""}},
    {"SaddleBrown":	{
        "hex": "#8B4513",
        "img":"",
        "text":""}},
    {"Sienna":	{
        "hex": "#A0522D",
        "img":"",
        "text":""}},
    {"Chocolate":	{
        "hex": "#D2691E",
        "img":"",
        "text":""}},
    {"DarkGoldenrod":	{
        "hex": "#B8860B",
        "img":"goldenrod.jpeg",
        "text":""}},
    {"Peru":	{
        "hex": "#CD853F",
        "img":"",
        "text":""}},
    {"RosyBrown":	{
        "hex": "#BC8F8F",
        "img":"",
        "text":""}},
    {"Goldenrod":	{
        "hex": "#DAA520",
        "img":"goldenrod.jpeg",
        "text":""}},
    {"SandyBrown":	{
        "hex": "#F4A460",
        "img":"",
        "text":""}},
    {"Tan":	{
        "hex": "#D2B48C",
        "img":"",
        "text":""}},
    {"Burlywood":	{
        "hex": "#DEB887",
        "img":"",
        "text":""}},
    {"Wheat":	{
        "hex": "#F5DEB3",
        "img":"",
        "text":""}},
    {"NavajoWhite":	{
        "hex": "#FFDEAD",
        "img":"",
        "text":""}},
    {"Bisque":	{
        "hex": "#FFE4C4",
        "img":"",
        "text":""}},
    {"BlanchedAlmond":	{
        "hex": "#FFEBCD",
        "img":"",
        "text":""}},
    {"Cornsilk":	{
        "hex": "#FFF8DC",
        "img":"",
        "text":""}},
    {"Indigo":	{
        "hex": "#4B0082",
        "img":"",
        "text":""}},
    {"Purple":	{
        "hex": "#800080",
        "img":"",
        "text":""}},
    {"DarkMagenta":	{
        "hex": "#8B008B",
        "img":"",
        "text":""}},
    {"DarkViolet":	{
        "hex": "#9400D3",
        "img":"",
        "text":""}},
    {"DarkSlateBlue":	{
        "hex": "#483D8B",
        "img":"",
        "text":""}},
    {"BlueViolet":	{
        "hex": "#8A2BE2",
        "img":"",
        "text":""}},
    {"DarkOrchid":	{
        "hex": "#9932CC",
        "img":"",
        "text":""}},
    {"Fuchsia":	{
        "hex": "#FF00FF",
        "img":"",
        "text":""}},
    {"Magenta":	{
        "hex": "#FF00FF",
        "img":"",
        "text":""}},
    {"SlateBlue":	{
        "hex": "#6A5ACD",
        "img":"",
        "text":""}},
    {"MediumSlateBlue":	{
        "hex": "#7B68EE",
        "img":"",
        "text":""}},
    {"MediumOrchid":	{
        "hex": "#BA55D3",
        "img":"",
        "text":""}},
    {"MediumPurple":	{
        "hex": "#9370DB",
        "img":"",
        "text":""}},
    {"Orchid":	{
        "hex": "#DA70D6",
        "img":"",
        "text":""}},
    {"Violet":	{
        "hex": "#EE82EE",
        "img":"",
        "text":""}},
    {"Plum":	{
        "hex": "#DDA0DD",
        "img":"",
        "text":""}},
    {"Thistle":	{
        "hex": "#D8BFD8",
        "img":"",
        "text":""}},
    {"Lavender":	{
        "hex": "#E6E6FA",
        "img":"",
        "text":""}},
    {"MidnightBlue":	{
        "hex": "#191970",
        "img":"",
        "text":""}},
    {"Navy":	{
        "hex": "#000080",
        "img":"",
        "text":""}},
    {"DarkBlue":	{
        "hex": "#00008B",
        "img":"",
        "text":""}},
    {"MediumBlue":	{
        "hex": "#0000CD",
        "img":"",
        "text":""}},
    {"Blue":	{
        "hex": "#0000FF",
        "img":"",
        "text":""}},
    {"RoyalBlue":	{
        "hex": "#4169E1",
        "img":"",
        "text":""}},
    {"SteelBlue":	{
        "hex": "#4682B4",
        "img":"blue_steel.png",
        "text":""}},
    {"DodgerBlue":	{
        "hex": "#1E90FF",
        "img":"",
        "text":""}},
    {"DeepSkyBlue":	{
        "hex": "#00BFFF",
        "img":"",
        "text":""}},
    {"CornflowerBlue":	{
        "hex": "#6495ED",
        "img":"",
        "text":""}},
    {"SkyBlue":	{
        "hex": "#87CEEB",
        "img":"",
        "text":""}},
    {"LightSkyBlue":	{
        "hex": "#87CEFA",
        "img":"",
        "text":""}},
    {"LightSteelBlue":	{
        "hex": "#B0C4DE",
        "img":"blue_steel.png",
        "text":""}},
    {"LightBlue":	{
        "hex": "#ADD8E6",
        "img":"",
        "text":""}},
    {"PowderBlue":	{
        "hex": "#B0E0E6",
        "img":"",
        "text":""}},
    {"Teal":	{
        "hex": "#008080",
        "img":"",
        "text":""}},
    {"DarkCyan":	{
        "hex": "#008B8B",
        "img":"",
        "text":""}},
    {"LightSeaGreen":	{
        "hex": "#20B2AA",
        "img":"",
        "text":""}},
    {"CadetBlue":	{
        "hex": "#5F9EA0",
        "img":"",
        "text":""}},
    {"DarkTurquoise":	{
        "hex": "#00CED1",
        "img":"",
        "text":""}},
    {"MediumTurquoise":	{
        "hex": "#48D1CC",
        "img":"",
        "text":""}},
    {"Turquoise":	{
        "hex": "#40E0D0",
        "img":"",
        "text":""}},
    {"Aqua":	{
        "hex": "#00FFFF",
        "img":"",
        "text":""}},
    {"Cyan":	{
        "hex": "#00FFFF",
        "img":"",
        "text":""}},
    {"Aquamarine":	{
        "hex": "#7FFFD4",
        "img":"",
        "text":""}},
    {"PaleTurquoise":	{
        "hex": "#AFEEEE",
        "img":"",
        "text":""}},
    {"LightCyan":	{
        "hex": "#E0FFFF",
        "img":"",
        "text":""}},
    {"DarkGreen":	{
        "hex": "#006400",
        "img":"",
        "text":""}},
    {"Green":	{
        "hex": "#008000",
        "img":"",
        "text":""}},
    {"DarkOliveGreen":	{
        "hex": "#556B2F",
        "img":"",
        "text":""}},
    {"ForestGreen":	{
        "hex": "#228B22",
        "img":"",
        "text":""}},
    {"SeaGreen":	{
        "hex": "#2E8B57",
        "img":"",
        "text":""}},
    {"Olive":	{
        "hex": "#808000",
        "img":"",
        "text":""}},
    {"OliveDrab":	{
        "hex": "#6B8E23",
        "img":"",
        "text":""}},
    {"MediumSeaGreen":	{
        "hex": "#3CB371",
        "img":"",
        "text":""}},
    {"LimeGreen":	{
        "hex": "#32CD32",
        "img":"",
        "text":""}},
    {"Lime":	{
        "hex": "#00FF00",
        "img":"",
        "text":""}},
    {"SpringGreen":	{
        "hex": "#00FF7F",
        "img":"",
        "text":""}},
    {"MediumSpringGreen":	{
        "hex": "#00FA9A",
        "img":"",
        "text":""}},
    {"DarkSeaGreen":	{
        "hex": "#8FBC8F",
        "img":"",
        "text":""}},
    {"MediumAquamarine":	{
        "hex": "#66CDAA",
        "img":"",
        "text":""}},
    {"YellowGreen":	{
        "hex": "#9ACD32",
        "img":"",
        "text":""}},
    {"LawnGreen":	{
        "hex": "#7CFC00",
        "img":"",
        "text":""}},
    {"Chartreuse":	{
        "hex": "#7FFF00",
        "img":"",
        "text":""}},
    {"LightGreen":	{
        "hex": "#90EE90",
        "img":"",
        "text":""}},
    {"GreenYellow":	{
        "hex": "#ADFF2F",
        "img":"",
        "text":""}},
    {"PaleGreen":	{
        "hex": "#98FB98",
        "img":"",
        "text":""}},
    {"MistyRose":	{
        "hex": "#FFE4E1",
        "img":"",
        "text":""}},
    {"AntiqueWhite":	{
        "hex": "#FAEBD7",
        "img":"",
        "text":""}},
    {"Linen":	{
        "hex": "#FAF0E6",
        "img":"",
        "text":""}},
    {"Beige":	{
        "hex": "#F5F5DC",
        "img":"",
        "text":""}},
    {"WhiteSmoke":	{
        "hex": "#F5F5F5",
        "img":"",
        "text":""}},
    {"LavenderBlush":	{
        "hex": "#FFF0F5",
        "img":"",
        "text":""}},
    {"OldLace":	{
        "hex": "#FDF5E6",
        "img":"",
        "text":""}},
    {"AliceBlue":	{
        "hex": "#F0F8FF",
        "img":"",
        "text":""}},
    {"Seashell":	{
        "hex": "#FFF5EE",
        "img":"",
        "text":""}},
    {"GhostWhite":	{
        "hex": "#F8F8FF",
        "img":"",
        "text":""}},
    {"Honeydew":	{
        "hex": "#F0FFF0",
        "img":"",
        "text":""}},
    {"FloralWhite":	{
        "hex": "#FFFAF0",
        "img":"",
        "text":""}},
    {"Azure":	{
        "hex": "#F0FFFF",
        "img":"",
        "text":""}},
    {"MintCream":	{
        "hex": "#F5FFFA",
        "img":"",
        "text":""}},
    {"Snow":	{
        "hex": "#FFFAFA",
        "img":"",
        "text":""}},
    {"Ivory":	{
        "hex": "#FFFFF0",
        "img":"",
        "text":""}},
    {"White":	{
        "hex": "#FFFFFF",
        "img":"",
        "text":""}},
    {"Black":	{
        "hex": "#000000",
        "img":"",
        "text":""}},
    {"DarkSlateGray/DarkSlateGrey":	{
        "hex": "#2F4F4F",
        "img":"",
        "text":""}},
    {"DimGray/DimGrey":	{
        "hex": "#696969",
        "img":"",
        "text":""}},
    {"SlateGray/SlateGrey":	{
        "hex": "#708090",
        "img":"",
        "text":""}},
    {"Gray/Grey":	{
        "hex": "#808080",
        "img":"",
        "text":""}},
    {"LightSlateGray/LightSlateGrey":	{
        "hex": "#778899",
        "img":"",
        "text":""}},
    {"DarkGray/DarkGrey":	{
        "hex": "#A9A9A9",
        "img":"",
        "text":""}},
    {"Silver":	{
        "hex": "#C0C0C0",
        "img":"",
        "text":""}},
    {"LightGray/LightGrey":	{
        "hex": "#D3D3D3",
        "img":"",
        "text":""}},
    {"Gainsboro":	{
        "hex": "#DCDCDC",
        "img":"",
        "text":""}},
    {"RebeccaPurple":{
        "hex":  "#663399",
        "img":"",
        "text":""}
    }
]
function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // https://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}


for(let i = 0; i < allColors.length; i++){
    for (const [key, value] of Object.entries(allColors[i])) {
        console.log(`${value.hex}`);
        let c = document.createElement('div');
        c.style.background = value.hex;
        c.style.color = invertColor(value.hex, true)
        c.dataHex = value.hex
        c.innerHTML = "<p>"+ key +"</p>";
        c.dataImg = value.img;
 
       
        document.getElementById("wrapper").appendChild(c)
        c.addEventListener("mouseover",function(e){
            let img = document.querySelector("#mainimg")
            img.style.backgroundImage = "url('./assets/" + this.dataImg+"')"
            document.querySelector("#instructions").style.color = invertColor(invertColor(this.dataHex, false), true)
            document.body.style.background = invertColor(this.dataHex, false)
        })
      }
}

// document.addEventListener("mousemove", function(e){
//     let img = this.querySelector("#mainimg");
//     let left = e.pageX;
//     let top = e.pageY;
//     img.style.left = left + 'px';
//     img.style.top = top + 'px';
// })