function KinesisKeyboardConfig(includes, layer) {
    this.includes = ["kinesis.h"].concat(includes);
    this.keys = [];
    this.layers = layer;
    this.layerHeader = "const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {\n";

    this.addKey = function (key) {
        if(typeof Key) {
            this.keys.push(key);
        }
    };

    this.addLayer = function() {
        var result = "";
        result += this.layerHeader;
        result += this.addKeymap();
        result += this.closeLayerHeader();
        return result;
    };

    this.addKeymap = function() {
        var result = "";
        result += "[" + this.layers.name + "] = keymap(";
        result += this.addLayerKeys(result);
        result += ")";
        return result;
    };

    function notFirst(key) {
        return key > 0;
    };

    this.addLayerKeys = function() {
        var result = "";
        var key;
        for(key in this.layers.keys) {
            if(notFirst(key)) {
                result += ', ';
            }

            result += this.layers.keys[key];
        }
        return result;
    };

    this.closeLayerHeader = function() {
        return "\n}";
    };

    this.print = function () {
        var result = "";
        var include;

        for (include in this.includes) {
            result += '#include "' + this.includes[include] + '"\n';
        }

        if(this.layers != undefined ) {
            result += this.addLayer();
            console.log(result);
        }
        return result;
    };
}

module.exports = { KinesisKeyboardConfig };
