input.onButtonPressed(Button.AB, function () {
    timer = randint(3, 5)
    basic.showNumber(timer)
    basic.showIcon(IconNames.Heart)
    while (timer > 0) {
        timer += -1
        basic.pause(500)
        led.toggle(1, 1)
    }
    basic.showIcon(IconNames.StickFigure)
})
let timer = 0
basic.showString("HOT")
