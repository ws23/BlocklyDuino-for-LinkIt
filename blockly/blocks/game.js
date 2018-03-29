'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.game');

goog.require('Blockly.Blocks');

Blockly.Blocks.game.HUE = 190;

Blockly.Blocks.game.cat_picture_image = filepath.media + '/cat_picture.jpg';

Blockly.Blocks['game_cat_picture'] = {
  init: function() {
    this.setColour(Blockly.Blocks.game.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.game.cat_picture_image, 64, 46))
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.GAME_CAT_PICTURE_TOOLTIP);
  }
};