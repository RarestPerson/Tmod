//base syntax by sightnado
/*elements.warm = {
    color: "#7fff7f",
    tool: function(pixel) {
        pixel.temp = 20;
		pixelTempCheck(pixel)
    },
    category: "tools",
};*/
//warm is redundant due to room_temp
elements.hyperheat = {
    color: ["#ff0000", "#ffbf4f", "#ff0000", "#ffbf4f", "#ff0000", "#ffbf4f"],
    tool: function(pixel) {
        if(shiftDown) { pixel.temp += (3500 * (1 + shiftDown)) } else { pixel.temp += 3500 }
		pixelTempCheck(pixel)
    },
    category: "tools",
};
elements.hypercool = {
    color: ["#0000ff", "#4fbfff", "#0000ff", "#4fbfff", "#0000ff", "#4fbfff"],
    tool: function(pixel) {
        if(shiftDown) { pixel.temp -= (3500 * (1 + shiftDown)) } else { pixel.temp -= 3500 }
		pixelTempCheck(pixel)
    },
    category: "tools",
};