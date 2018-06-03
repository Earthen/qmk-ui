const { KinesisKeyboardConfig } = require('./kinesiskeyboardconfig');

test('kinesis keyboard should print include kinesis library', () => {
    var kinesis = new KinesisKeyboardConfig();
    expect(kinesis.print()).toEqual(expect.stringContaining("#include \"kinesis.h\""));
})

test('kinesis keyboard should print all includes', () => {
    var kinesis = new KinesisKeyboardConfig(["action_layer.h"]);
    console.log(kinesis.include);
    expect(kinesis.print()).toEqual(expect.stringContaining("#include \"kinesis.h\""));
    expect(kinesis.print()).toEqual(expect.stringContaining("#include \"action_layer.h\""));
})
