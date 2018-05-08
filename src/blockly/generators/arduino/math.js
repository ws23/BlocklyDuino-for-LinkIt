/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Generating Arduino for math blocks.
 * @author gasolin@gmail.com  (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.math');

goog.require('Blockly.Arduino');


Blockly.Arduino.math_number = function() {
  // Numeric value.
  var code = window.parseFloat(this.getFieldValue('NUM'));
  // -4.abs() returns -4 in Dart due to strange order of operation choices.
  // -4 is actually an operator and a number.  Reflect this in the order.
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Arduino.math_arithmetic = function() {
  // Basic arithmetic operators, and power.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.Arduino.math_arithmetic.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '0';
  var code;
  if (!operator) {
    code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Arduino.math_arithmetic.OPERATORS = {
  ADD: [' + ', Blockly.Arduino.ORDER_ADDITIVE],
  MINUS: [' - ', Blockly.Arduino.ORDER_ADDITIVE],
  MULTIPLY: [' * ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
  DIVIDE: [' / ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
  MODULO: [' % ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
  POWER: [null, Blockly.Arduino.ORDER_NONE]  // Handle power separately.
};

Blockly.Arduino['math_random_max_min'] = function(block) {
  // Random integer between [X] and [Y].
  var code;
  var max = Blockly.Arduino.valueToCode(block, 'MAX',
                                              Blockly.Arduino.ORDER_ATOMIC) || '1';
  var min = Blockly.Arduino.valueToCode(block, 'MIN',
                                              Blockly.Arduino.ORDER_ATOMIC) || '0';
  if(min > 0) code = 'random(' + min + ', ' + max + ')';
  else        code = 'random(' + max + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['math_map_int'] = function() {
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE);
  var fromlow = this.getFieldValue('FROMLOW') || '0';
  var fromhigh = this.getFieldValue('FROMHIGH') || '1024';
  var tolow = this.getFieldValue('TOLOW') || '0';
  var tohigh = this.getFieldValue('TOHIGH') || '255';
  var code = 'map('+value+ ',' + fromlow + ',' + fromhigh + ','+tolow+','+tohigh+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['math_map_float'] = function() {
  var code_mapFloat = '' +
'float mapFloat(float x, float in_min, float in_max, float out_min, float out_max) {\n'+
'  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;\n' +
'}\n';
  Blockly.Arduino.definitions_['mapFloat'] = code_mapFloat;

  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE);
  var fromlow = this.getFieldValue('FROMLOW') || '0';
  var fromhigh = this.getFieldValue('FROMHIGH') || '1024';
  var tolow = this.getFieldValue('TOLOW') || '0';
  var tohigh = this.getFieldValue('TOHIGH') || '255';
  var code = 'mapFloat('+value+ ',' + fromlow + ',' + fromhigh + ','+tolow+','+tohigh+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['math_constrain'] = function(block) {
  // Constrain a number between two limits.
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
                                             Blockly.Arduino.ORDER_NONE) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'LOW',
                                             Blockly.Arduino.ORDER_NONE) || '0';
  var argument2 = Blockly.Arduino.valueToCode(block, 'HIGH',
                                             Blockly.Arduino.ORDER_NONE) || '255';
  var code = 'constrain(' + argument0 + ', ' + argument1 + ',' + argument2 + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['math_pow'] = function(block) {
  // Constrain a number between two limits.
  var argument0 = Blockly.Arduino.valueToCode(block, 'base',
                                              Blockly.Arduino.ORDER_NONE) || '1';
  var argument1 = Blockly.Arduino.valueToCode(block, 'exp',
                                              Blockly.Arduino.ORDER_NONE) || '1';
  var code = 'pow(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['math_single'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OP');
  var code;
  var arg = Blockly.Arduino.valueToCode(block, 'NUM',
                                        Blockly.Arduino.ORDER_NONE) || '1';
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ABS':
      code = 'abs(' + arg + ')';
      break;
    case 'ROOT':
      code = 'sqrt(' + arg + ')';
      break;
    case 'SIN':
      code = 'sin(' + arg + ')';
      break;
    case 'COS':
      code = 'cos(' + arg + ')';
      break;
    case 'TAN':
      code = 'tan(' + arg + ')';
      break;
  }
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['math_degree_to_radian'] = function(block) {
  Blockly.Arduino.definitions_['const_pi'] = 'const float __MPI = ' + Math.PI + ';';

  var code_radiansFromDegree = '\n' +
'float __radiansFromDegree(float degrees) {\n'+
'  return degrees / 360 * 2 * __MPI;\n' +
'}\n';
  Blockly.Arduino.definitions_['radiansFromDegree'] = code_radiansFromDegree;

  var argument0 = Blockly.Arduino.valueToCode(block, 'DEGREE',
                                              Blockly.Arduino.ORDER_NONE) || 0;
  console.log(Math.PI);
  var code = '__radiansFromDegree(' + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};
