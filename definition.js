const ColorBlock = '#44cbc6';
const ImgUrl = 'https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_aiot/images/';

// IR Receiver

Blockly.Blocks["aiot_ir_recv"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%3 cảm biến IR %1 đọc được nút %2 trên remote",
      args0: [
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": [
            [
              "P1",
              "pin1"
            ],
            [
              "P0",
              "pin0"
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
        },
        {
          type: "field_dropdown",
          name: "remote",
          options: [
            ["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "D"],
            ["E", "E"],
            ["F", "F"],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/forward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/backward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_left.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_right.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "RIGHT"
            ],
            ["Setup", "SETUP"],
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
          ],
        },
        {
          "type": "field_image",
          "src": ImgUrl + 'remote.png',
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['aiot_ir_rx'];
  }
};

Blockly.Python["aiot_ir_recv"] = function (block) {
  var remote = block.getFieldValue("remote");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from aiot_ir_receiver import *';
  Blockly.Python.definitions_['import_ir_receiver_init'] = 'aiot_ir_rx = IR_RX(Pin(' + pin + '.pin, Pin.IN)); aiot_ir_rx.start();';
  var code = 'aiot_ir_rx.get_code() == IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["aiot_ir_clear"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%1 xóa tín hiệu remote đã thu được",
      args0: [
        {
          "type": "field_image",
          "src": ImgUrl + 'remote.png',
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['aiot_ir_rx'];
  }
};

Blockly.Python["aiot_ir_clear"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'aiot_ir_rx.clear_code()\n';
  return code;
};

Blockly.Blocks["aiot_ir_on_receive"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      message0: "%5 nếu cảm biến IR %1 nhận được %2 %3 %4 từ remote",
      args0: [
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": [
            [
              "P1",
              "pin1"
            ],
            [
              "P0",
              "pin0"
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
        },
        {
          variable: "tín hiệu",
          type: "field_variable",
          name: "message",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "ACTION",
        },
        {
          "type": "field_image",
          "src": ImgUrl + 'remote.png',
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['aiot_ir_rx'];
  }
};

Blockly.Python['aiot_ir_on_receive'] = function(block) {
  var pin = block.getFieldValue("pin");
  Blockly.Python.definitions_['import_ir_receiver'] = 'from aiot_ir_receiver import *';
  Blockly.Python.definitions_['import_ir_receiver_init'] = 'aiot_ir_rx = IR_RX(Pin(' + pin + '.pin, Pin.IN)); aiot_ir_rx.start();';
  var variable_message = Blockly.Python.variableDB_.getName(block.getFieldValue('message'), Blockly.Names.NameType?Blockly.Names.NameType.VARIABLE:Blockly.Variables.NAME_TYPE);
  var statements_action = Blockly.Python.statementToCode(block, 'ACTION');

  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = workspace.getAllVariables() || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (Blockly.Python.variableDB_.getName(varName, Blockly.Names.NameType?Blockly.Names.NameType.VARIABLE:Blockly.Variables.NAME_TYPE) != variable_message) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
        Blockly.Names.NameType?Blockly.Names.NameType.VARIABLE:Blockly.Variables.NAME_TYPE));
    }
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';

  var cbFunctionName = Blockly.Python.provideFunction_(
    'on_ir_receive_callback',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(' + variable_message + ', addr, ext):',
      globals,
      statements_action || Blockly.Python.PASS
    ]);
  
  var code = 'aiot_ir_rx.on_received(' + cbFunctionName + ')\n';
  Blockly.Python.definitions_['on_ir_receive_callback' + '_statement'] = code;
  return '';
};

Blockly.Blocks["aiot_ir_remote_btn"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%2 nút %1",
      args0: [
        {
          type: "field_dropdown",
          name: "remote",
          options: [
            ["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "D"],
            ["E", "E"],
            ["F", "F"],
            [
              {
                "src": ImgUrl + 'forward.svg',
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": ImgUrl + 'backward.svg',
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": ImgUrl + 'turn_left.svg',
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": ImgUrl + 'turn_right.svg',
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "RIGHT"
            ],
            ["Setup", "SETUP"],
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
          ],
        },
        {
          "type": "field_image",
          "src": ImgUrl + 'remote.png',
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['aiot_ir_rx'];
  }
};

Blockly.Python["aiot_ir_remote_btn"] = function (block) {
  var remote = block.getFieldValue("remote");
  // TODO: Assemble Python into code variable.
  var code = 'IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};


// DHT20

Blockly.Blocks["aiot_dht_measure"] = {
  init: function() {
    this.jsonInit({
      message0: Blockly.Msg.BLOCK_AIOT_DHT_MEANSURE_MESSAGE0,
      args0: [
        {
          "type": "field_image",
          "src": ImgUrl + 'temp-humi.png',
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: ColorBlock,
      tooltip: Blockly.Msg.BLOCK_AIOT_DHT_MEANSURE_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_AIOT_DHT_MEANSURE_HELPURL
    });
  },
  getDeveloperVars: function() {
    return ['aiot_dht20'];
  }
};

Blockly.Python["aiot_dht_measure"] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_dht20"] = "from aiot_dht20 import DHT20";
  Blockly.Python.definitions_["import_create_dht20"] = "aiot_dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "aiot_dht20.read_dht20()\n";
  return code;
};

Blockly.Blocks["aiot_dht_read"] = {
  init: function() {
    this.jsonInit({
      message0: Blockly.Msg.BLOCK_AIOT_DHT_READ_MESSAGE0,
      args0: [
        {
          type: "field_dropdown",
          name: "DATA",
          options: [
            [Blockly.Msg.BLOCK_AIOT_DHT_READ_MESSAGE1, "TEMP"],
            [Blockly.Msg.BLOCK_AIOT_DHT_READ_MESSAGE2, "HUMID"]
          ]
        },
        {
          "type": "field_image",
          "src": ImgUrl + 'temp-humi.png',
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
        
      ],
      output: null,
      colour: ColorBlock,
      tooltip: Blockly.Msg.BLOCK_AIOT_DHT_READ_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_AIOT_DHT_READ_HELPURL
    });
  },
  getDeveloperVars: function() {
    return ['aiot_dht20'];
  }
};

Blockly.Python["aiot_dht_read"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_dht20"] = "from aiot_dht20 import DHT20";
  Blockly.Python.definitions_["import_create_dht20"] = "aiot_dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "";
  if (dropdown_data == "TEMP")
    code = "aiot_dht20.dht20_temperature()";
  else 
    code = "aiot_dht20.dht20_humidity()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


// LCD 1602

Blockly.Blocks["aiot_lcd1602_backlight"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%2 %1 đèn màn hình LCD1602",
      args0: [
        {
          type: "field_dropdown",
          name: "action",
          options: [
            ["bật", "on"],
            ["tắt", "off"],
          ],
        },
        {
          "type": "field_image",
          "src": ImgUrl + 'lcd.png',
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['aiot_lcd1602'];
  }
};

Blockly.Python['aiot_lcd1602_backlight'] = function(block) {
  var action = block.getFieldValue("action");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_lcd1602'] = 'from aiot_lcd1602 import LCD1602';
  Blockly.Python.definitions_['import_lcd1602_init'] = 'aiot_lcd1602 = LCD1602()';
  var code = 'aiot_lcd1602.backlight_' + action + '()\n';
  return code;
};

Blockly.Blocks["aiot_lcd1602_display"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%5 hiện lên LCD1602 %1 tại x %2 y %3 %4",
      args0: [
        {
          type: "input_value",
          name: "string"
        },
        {
          type: "input_value",
          name: "X",
          check: "Number",
          min: 0,
          max: 16
        },
        {
          type: "input_value",
          name: "Y",
          check: "Number",
          min: 0,
          max: 2
        },
        {
          type: "input_dummy"
        },
        {
          "type": "field_image",
          "src": ImgUrl + 'lcd.png',
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['aiot_lcd1602'];
  }
};

Blockly.Python["aiot_lcd1602_display"] = function (block) {
  Blockly.Python.definitions_['import_lcd1602'] = 'from aiot_lcd1602 import LCD1602';
  Blockly.Python.definitions_['import_lcd1602_init'] = 'aiot_lcd1602 = LCD1602()';
  var string = Blockly.Python.valueToCode(block, 'string', Blockly.Python.ORDER_ATOMIC);
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);  // TODO: Assemble Python into code variable.
  var code = "aiot_lcd1602.move_to(" + x + ", "+ y +")\n" + "aiot_lcd1602.putstr("+ string +")\n";
  return code;
};

Blockly.Blocks["aiot_lcd1602_clear"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%1 xóa màn hình LCD1602",
      args0: [
        {
          "type": "field_image",
          "src": ImgUrl + 'lcd.png',
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "Xóa trắng màn hình LCD1602",
    });
  },
  getDeveloperVars: function() {
    return ['aiot_lcd1602'];
  }
};

Blockly.Python["aiot_lcd1602_clear"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_lcd1602'] = 'from aiot_lcd1602 import LCD1602';
  Blockly.Python.definitions_['import_lcd1602_init'] = 'aiot_lcd1602 = LCD1602()';
  var code = "aiot_lcd1602.clear()\n";
  return code;
};

// Mini Fan Module

Blockly.Blocks['aiot_minifan'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "aiot_minifan",
        "message0": "%3 bật quạt chân %1 với tốc độ (0-100) %2 %%",
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
          },
          {
            "type": "input_value",
            "name": "percent",
            "check": "Number"
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'fan.png',
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
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

Blockly.Python['aiot_minifan'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  var value_percent = Blockly.Python.valueToCode(block, 'percent', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '' + dropdown_name + '.write_analog(round(translate('+value_percent+', 0, 100, 0, 1023)))\n';
  return code;
};

// Tiny LED Module

Blockly.Blocks["aiot_led_tiny_set_all"] = {
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

Blockly.Python['aiot_led_tiny_set_all'] = function(block) {
  var port = block.getFieldValue('port');
  var option = block.getFieldValue('option');
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_led_tiny'] = 'from aiot_rgbled import RGBLed';
  Blockly.Python.definitions_['import_led_tiny_init'] = 'tiny_rgb'+port+' = RGBLed('+ port +'.pin, 4)';
  // TODO: Assemble Python into code variable.
  var code = "tiny_rgb"+port+".show("+ option +", hex_to_rgb("+ color +"))\n";
  return code;
};

// Cảm biến chuyển động PIR

Blockly.Blocks['aiot_detect_motion'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "aiot_detect_motion",
        "message0": "%2 cảm biến PIR chân %1 phát hiện có người",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P16",
                "pin16"
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
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
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
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'pir.png',
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          }
        ],
        output: "Boolean",
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['aiot_detect_motion'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '' + dropdown_name + '.read_digital()==1';
  return [code, Blockly.Python.ORDER_NONE];
};

// Cảm biến ánh sáng

Blockly.Blocks['aiot_light_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "aiot_light_sensor",
        "message0": "%2 đọc cảm biến ánh sáng (%%) chân %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
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
              ]
            ]
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'light.png',
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "output": null,
        "colour": ColorBlock,
        "tooltip": "Đọc giá trị của cảm biến ánh sáng",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['aiot_light_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'round(translate((' + dropdown_name + '.read_analog()), 0, 4095, 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Ultrasonic

Blockly.Blocks['aiot_ultrasonic_create'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit(
      {
        "type": "aiot_ultrasonic_create",
        "message0": "%3 khởi tạo cảm biến khoảng cách với chân trigger %1 chân echo %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TRG",
            "options": [
              [
                "P3",
                "pin3"
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
          },
          {
            "type": "field_dropdown",
            "name": "ECH",
            "options": [
              [
                "P6",
                "pin6"
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
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'ultrasonic.png',
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "Khởi tạo cảm biến khoảng cách với 2 chân cắm Trigger và Echo được chọn",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['aiot_ultrasonic'];
  }
};

Blockly.Python['aiot_ultrasonic_create'] = function (block) {
  var dropdown_trg = block.getFieldValue('TRG');
  var dropdown_ech = block.getFieldValue('ECH');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_ultrasonic'] = 'from aiot_hcsr04 import HCSR04';
  var code = 'aiot_ultrasonic = HCSR04(trigger_pin=' + dropdown_trg + '.pin, echo_pin=' + dropdown_ech + '.pin)\n';
  return code;
};

Blockly.Blocks['aiot_ultrasonic_read'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "aiot_ultrasonic_read",
        "message0": "%2 đọc cảm biến khoảng cách theo %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'ultrasonic.png',
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "output": null,
        "colour": ColorBlock,
        "tooltip": "Đọc giá trị đo được của cảm biến khoảng cách",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['aiot_ultrasonic'];
  }
};

Blockly.Python['aiot_ultrasonic_read'] = function (block) {
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM') {
    code = 'aiot_ultrasonic.distance_cm()';
  } else {
    code = 'aiot_ultrasonic.distance_mm()';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['aiot_ultrasonic_checkdistance'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "aiot_ultrasonic_checkdistance",
        "message0": "%4 cảm biến khoảng cách đọc được < %1 %2 %3",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "DISTANCE",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'ultrasonic.png',
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "output": "Boolean",
        "colour": ColorBlock,
        "tooltip": "Kiểm tra xem khoảng cách đo được của cảm biến có lớn hơn giá trị được chọn hay không",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['aiot_ultrasonic'];
  }
};

Blockly.Python['aiot_ultrasonic_checkdistance'] = function (block) {
  var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM')
    code = 'aiot_ultrasonic.distance_cm() < ' + value_distance;
  else
    code = 'aiot_ultrasonic.distance_mm() < ' + value_distance;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Cảm biến độ ẩm đất
Blockly.Blocks['aiot_soil_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_soil_sensor",
        "message0": "%2 đọc độ ẩm đất (%%) %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
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
              ]
            ]
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'soil.png',
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "output": "Number",
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['aiot_soil_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'round(translate(('+dropdown_name+'.read_analog()), 0, 4095, 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Dual USB Module

Blockly.Blocks['aiot_dual_usb'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "aiot_dual_usb",
        "message0": "%3 bật cổng USB ở chân %1 mức (0-100) %2 %%",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
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
            ]
          },
          {
            "type": "input_value",
            "name": "percent",
            "check": "Number"
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'dual_usb.jpg',
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
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

Blockly.Python['aiot_dual_usb'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  var value_percent = Blockly.Python.valueToCode(block, 'percent', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+dropdown_name+'.write_analog(round(translate('+value_percent+', 0, 100, 0, 1023)))\n';
  return code;
};

// Relay Module
Blockly.Blocks['aiot_relay'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "aiot_relay",
        "message0": "%3 %2 relay ở chân %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P15",
                "pin15"
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
                "P14",
                "pin14"
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
          },
          {
            "type": "field_dropdown",
            "name": "state",
            "options": [
              [
                "bật",
                "1"
              ],
              [
                "tắt",
                "0"
              ]
            ]
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'relay.png',
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
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

Blockly.Python['aiot_relay'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_state = block.getFieldValue('state');
  // TODO: Assemble Python into code variable.
  var code = ''+dropdown_name+'.write_digital('+dropdown_state+')\n';
  return code;
};