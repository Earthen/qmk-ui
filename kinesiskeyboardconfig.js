function KinesisKeyboardConfig(includes, layer) {
    this.includes = ["kinesis.h"].concat(includes);
    this.keys = [];
    this.layers = layer;

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

        if(this.layers != undefined ) {
            result += "const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {\n";
            result += "[JOAN] = keymap(";
            var key;
            for(key in this.layers.keys) {
                result += this.layers.keys[key];
            }
            result += ")";
            result += "}";
        }
        return result;
    };
}

module.exports = { KinesisKeyboardConfig };
