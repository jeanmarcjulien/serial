scene.setBackgroundColor(2)
game.onUpdate(function () {
    // Check for button presses and send data over serial
    if (controller.A.isPressed()) {
        serial.writeLine("A pressed")
    }
    if (controller.B.isPressed()) {
        serial.writeLine("B pressed")
    }
    if (controller.up.isPressed()) {
        serial.writeLine("Up pressed")
    }
    if (controller.down.isPressed()) {
        serial.writeLine("Down pressed")
    }
    if (controller.left.isPressed()) {
        serial.writeLine("Left pressed")
    }
    if (controller.right.isPressed()) {
        serial.writeLine("Right pressed")
    }
    // Add a small delay to avoid flooding the serial output
    pause(100)
})
