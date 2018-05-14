/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author hi@vox.vg (Zhi-Wei Cai)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.test');

goog.require('Blockly.Blocks');

Blockly.Blocks.test.HUE = 20;

Blockly.Blocks['test'] = {
  init: function(){
    this.setHelpUrl(Blockly.Msg.TEST_HELPURL); 
  	this.setColour(Blockly.Blocks.test.HUE); 
	this.appendValueInput("NAME")
	  .setCheck("String")
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TEST); 
	this.setPreviousStatement(true); 
	this.setNextStatement(true); 
	this.setTooltip(Blockly.Msg.TEST_TOOLTIP); 
  }
}; 
