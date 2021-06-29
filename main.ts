input.onButtonPressed(Button.A, function () {
    if (setmode == 1) {
        setlen += -1
    } else if (setmode == 2) {
        setcount += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (setmode == 1) {
        setmode = 0
    } else if (setmode == 2) {
        setmode = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (setmode == 1) {
        setlen += 1
    } else if (setmode == 2) {
        setcount += 1
    }
})
let setcount = 0
let setmode = 0
let name = ""
setmode = 0
let settext_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]
setmode = 1
let setlen = 6
while (!(setmode == 0)) {
    basic.showNumber(setlen)
}
basic.clearScreen()
basic.showString("Length: " + setlen)
basic.clearScreen()
setmode = 2
for (let index = 0; index < setlen; index++) {
    setmode = 2
    setcount = 0
    while (!(setmode == 0)) {
        basic.clearScreen()
        basic.showString("" + (settext_list[setcount]))
    }
    basic.showIcon(IconNames.Happy)
    name = "" + name + settext_list[setcount]
    basic.clearScreen()
}
basic.showString("Name: " + name)
