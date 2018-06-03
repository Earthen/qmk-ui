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
        var result = "";
        var include;

        for (include in this.includes) {
            result += '#include "' + this.includes[include] + '"\n';
        }
        return result;
    };
}

module.exports = { KinesisKeyboardConfig };
