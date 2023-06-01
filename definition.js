const ColorBlock = '#44cbc6';
const ImgUrl = 'https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_aiot/images/';

// Mini Fan Module

Blockly.Blocks['create_tinyrgbled'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "create_tinyrgbled",
        "message0": "tạo đèn LED RGB chân %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P10",
                "pin10"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          } 
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['create_tinyrgbled'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';  
  Blockly.Python.definitions_['import_led_tiny'] = 'from tiny_rgbled import RGBLed';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'tiny_rgb_' + dropdown_name + ' = RGBLed(' +dropdown_name+', 4)\n';
  return code;
};

// Tiny LED Module

Blockly.Blocks["led_tiny_set_all"] = {
  init: function () {
    this.jsonInit({
      inputsInline: true,
      colour: ColorBlock,
      nextStatement: null,
      tooltip: "",
      message0: "%5 LED RGB chân %1 đổi màu led %2 thành %3 %4",
      previousStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          "options": [
            [
              "P14",
              "pin14"
            ],
            [
              "P0",
              "pin0"
            ],
            [
              "P1",
              "pin1"
            ],
            [
              "P2",
              "pin2"
            ],
            [
              "P3",
              "pin3"
            ],
            [
              "P4",
              "pin4"
            ],
            [
              "P5",
              "pin5"
            ],
            [
              "P6",
              "pin6"
            ],
            [
              "P7",
              "pin7"
            ],
            [
              "P8",
              "pin8"
            ],
            [
              "P9",
              "pin9"
            ],
            [
              "P10",
              "pin10"
            ],
            [
              "P11",
              "pin11"
            ],
            [
              "P12",
              "pin12"
            ],
            [
              "P13",
              "pin13"
            ],
            [
              "P15",
              "pin15"
            ],
            [
              "P16",
              "pin16"
            ],
            [
              "P19",
              "pin19"
            ],
            [
              "P20",
              "pin20"
            ]
          ],
        },
        {
          type: "field_dropdown",
          name: "option",
          options: [
            ["tất cả", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
          ],
        },
        { type: "input_value", name: "COLOR" },
        {type: "input_dummy"},
        {
          "type": "field_image",
          "src": ImgUrl + 'rgb.png',
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      helpUrl: ""
    });
  },
  getDeveloperVars: function() {
    return ['tiny_rgb'];
  }
};

Blockly.Python['led_tiny_set_all'] = function(block) {
  var port = block.getFieldValue('port');
  var option = block.getFieldValue('option');
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_led_tiny'] = 'from tiny_rgbled import RGBLed';
  // TODO: Assemble Python into code variable.
  var code = "tiny_rgb_"+port+".show("+ option +", hex_to_rgb("+ color +"))\n";
  return code;
};