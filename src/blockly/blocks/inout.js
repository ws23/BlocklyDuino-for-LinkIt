/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.inout');

goog.require('Blockly.Blocks');

Blockly.Blocks.inout.HUE = 230;

Blockly.Blocks['inout_buildin_led'] = {
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_LED_BUINTIN)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH, "HIGH"], [Blockly.Msg.INOUT_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.INOUT_LED_BUINTIN_TOOLTIP);
  }
};

Blockly.Blocks['inout_digital_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_DIGITAL_WRITE_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_STAT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH, "HIGH"], [Blockly.Msg.INOUT_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['inout_custom_digital_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_DIGITAL_WRITE_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_PIN);
    this.appendValueInput("STAT")
      .setCheck('Boolean')
      .appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_STAT)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['inout_digital_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_DIGITAL_READ_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_DIGITAL_READ_APPENDTEXT_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks['inout_digital_buildin_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_LED_BUINTIN_READ_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_LED_BUINTIN_READ);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.INOUT_LED_BUINTIN_READ_TOOLTIP);
  }
};

Blockly.Blocks['inout_custom_digital_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_DIGITAL_READ_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendValueInput("PIN_READ")
      .setCheck("Number")
      .appendField(Blockly.Msg.INOUT_DIGITAL_READ_APPENDTEXT_PIN);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks['inout_custom_digital_read_pullup'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_ENABLE_INTERNAL_PULLUP_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendValueInput("PIN_READ")
      .setCheck("Number")
      .appendField(Blockly.Msg.INOUT_DIGITAL_READ_PULLUP_APPENDTEXT_PIN);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks['inout_enable_pullup'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_ENABLE_INTERNAL_PULLUP_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_ENABLE_INTERNAL_PULLUP_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
      // allows pullups on analog pins (apparently exist, although rarely used)
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.INOUT_ENABLE_INTERNAL_PULLUP_TOOLTIP);
  }
};

Blockly.Blocks['inout_analog_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_ANALOG_WRITE_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.pwm), "PIN");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField(Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_VALUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.INOUT_ANALOG_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['inout_custom_analog_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_ANALOG_WRITE_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendValueInput("PIN_ANALOGWRITE")
      .setCheck("Number")
      .appendField(Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_PIN);
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField(Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_VALUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.INOUT_ANALOG_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['inout_analog_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_ANALOG_READ_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_ANALOG_READ_APPENDTEXT)
      .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['inout_custom_analog_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_ANALOG_READ_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendValueInput("PIN_ANALOGREAD")
      .setCheck("Number")
      .appendField(Blockly.Msg.INOUT_ANALOG_READ_APPENDTEXT);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['inout_highlow'] = {
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/Constants');
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH, "HIGH"], [Blockly.Msg.INOUT_LOW, "LOW"]]), 'BOOL')
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};

Blockly.Blocks['pulsein'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_PULSEIN_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_PULSEIN_APPENDTEXT_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_PULSEIN_APPENDTEXT_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH, "HIGH"], [Blockly.Msg.INOUT_LOW, "LOW"]]), "type");
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_PULSEIN_APPENDTEXT_TIMEOUT)
      .appendField(new Blockly.FieldTextInput("300"),"TIMEOUT");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.INOUT_PULSEIN_TOOLTIP);
  }
};

Blockly.Blocks['custom_tone'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_PIN);
    this.appendValueInput("FREQ")
      .setCheck("Number")
      .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ);
    this.appendValueInput("DURATION")
      .setCheck("Number")
      .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_DURATION);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP);
  }
};

Blockly.Blocks['tone'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ)
      .appendField(new Blockly.FieldDropdown(profile.default.tone), "FREQ");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP);
  }
};

Blockly.Blocks['inout_digitalpin'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_DIGITALPIN_TEXT)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};

Blockly.Blocks['inout_analogpin'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INOUT_ANALOGPIN_TEXT)
      .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};
