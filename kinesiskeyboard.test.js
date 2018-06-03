const { KinesisKeyboardConfig } = require('./kinesiskeyboardconfig');
const { Layer } = require('./Layer');

test('kinesis keyboard should print include kinesis library', () => {
    var kinesis = new KinesisKeyboardConfig();

    expect(kinesis.print()).toEqual(expect.stringContaining('#include "kinesis.h"'));
});

test('kinesis keyboard should print all includes', () => {
    var kinesis = new KinesisKeyboardConfig(["action_layer.h"]);

    expect(kinesis.print()).toEqual(expect.stringContaining("#include \"kinesis.h\""));
    expect(kinesis.print()).toEqual(expect.stringContaining("#include \"action_layer.h\""));
});

test('kinesis keyboard should print a layer', () => {
    var layer = new Layer(["KC_R"]);
    var kinesis = new KinesisKeyboardConfig([], layer);

    expect(kinesis.print()).toEqual(expect.stringContaining("const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {"));
    expect(kinesis.print()).toEqual(expect.stringContaining("[JOAN] = keymap(KC_R)"));
});

