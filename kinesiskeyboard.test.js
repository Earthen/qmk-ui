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

test('kinesis keyboard should print the header fo the layers when have layers', () => {
    var layer = new Layer("someLayerName", ["some key"]);
    var kinesis = new KinesisKeyboardConfig([], layer);

    expect(kinesis.print()).toEqual(expect.stringContaining("const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {"));
});

test('kinesis keyboard should print the name of the layer', () => {
    var layer = new Layer("JOAN", ["KC_R"]);
    var kinesis = new KinesisKeyboardConfig([], layer);

    expect(kinesis.print()).toEqual(expect.stringContaining("[JOAN] = keymap("));
});

test('kinesis keyboard should print all keys of the layer with comma', () => {
    var layer = new Layer("JOAN", ["KC_Q", "KC_W", "KC_E", "KC_R"]);
    var kinesis = new KinesisKeyboardConfig([], layer);

    expect(kinesis.print()).toEqual(expect.stringContaining('KC_Q, KC_W, KC_E, KC_R'));
});

