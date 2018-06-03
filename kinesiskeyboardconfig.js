function Key(position, keyType) {
    this.position = position;
    this.keyType = keyType;
}

function KinesisKeyboardConfig(includes) {
    this.includes = ["kinesis.h"].concat(includes);
    this.keys = [];

    this.addKey = function (key) {
        if(typeof Key) {
            this.keys.push(key);
        }
    };

    this.print = function () {
        return "#include \"kinesis.h\"\n#include \"action_layer.h\"\n";
    };
}

module.exports = { KinesisKeyboardConfig };
