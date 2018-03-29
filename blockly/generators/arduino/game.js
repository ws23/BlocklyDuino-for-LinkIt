'use strict';

goog.provide('Blockly.Arduino.game');

goog.require('Blockly.Arduino');

Blockly.Arduino.game_cat_picture = function() {
  var code = 'cat';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};