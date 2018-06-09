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

    this.addLayer = function(layer) {
        var result = "";
        result += this.addKeymap(layer);
        return result;
    };

    this.addKeymap = function(layer) {
        var result = "";
        result += "[" + layer.name + "] = keymap(";
        result += this.addLayerKeys(layer);
        result += ")";
        return result;
    };

    function notFirst(key) {
        return key > 0;
    };

    this.addLayerKeys = function(layer) {
        var result = "";
        var key;
        for(key in layer.keys) {
            if(notFirst(key)) {
                result += ', ';
            }

            result += layer.keys[key];
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

        result += this.layerHeader;
        if(this.layers != undefined ) {

            for (layer in this.layers) {
                if(notFirst(layer)) {
                    result += ',\n' ;
                }
                result += this.addLayer(this.layers[layer]);
            }
        }
        result += this.closeLayerHeader();

        return result;
    };
}

module.exports = { KinesisKeyboardConfig };
