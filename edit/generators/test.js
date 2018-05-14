/**
 * @fileoverview Generating Arduino for list blocks.
 * @author hi@vox.vg (Zhi-Wei Cai)
 */
'use strict';

goog.provide('Blockly.Arduino.test');

goog.require('Blockly.Arduino');

Blockly.Arduino.test = function() {
  var name = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  name = name.replace(/\"/g, ""); 

  Blockly.Arduino.definitions_['define_linkit_lremote_include'] = '#include <LRemote.h>'; 
  Blockly.Arduino.definitions_['define_linkit_lremote_name'] = 'char _lremote_name[] = "' + name + '"; '; 

  var code = 'LRemote.setName(_lremote_name); '; 

  return code; 
}; 
