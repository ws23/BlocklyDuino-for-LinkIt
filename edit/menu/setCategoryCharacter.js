function setCategoryCharacter() {
  $('#category_initializes').attr('name',Blockly.Msg.CATEGORY_INITIALIZES);
  $('#category_inout').attr('name',Blockly.Msg.CATEGORY_INOUT);
  $('#category_digital').attr('name',Blockly.Msg.CATEGORY_DIGITAL);
  $('#category_analog').attr('name',Blockly.Msg.CATEGORY_ANALOG);
  $('#category_others').attr('name',Blockly.Msg.CATEGORY_OTHERS);
  $('#category_interrupts').attr('name',Blockly.Msg.CATEGORY_INTERRUPTS);
  $('#category_ethernet').attr('name',Blockly.Msg.CATEGORY_ETHERNET);
  $('#category_ethernet_init').attr('name',Blockly.Msg.CATEGORY_ETHERNET_INIT);
  $('#category_ethernet_client').attr('name',Blockly.Msg.CATEGORY_ETHERNET_CLIENT);
  $('#category_cloud_service').attr('name',Blockly.Msg.CATEGORY_CLOUD_SERVICE);
  $('#category_ifttt').attr('name',Blockly.Msg.CATEGORY_IFTTT);
  $('#category_ir_remote').attr('name',Blockly.Msg.CATEGORY_IR_REMOTE);
  $('#category_m2x').attr('name',Blockly.Msg.CATEGORY_M2X);
  $('#category_blynk').attr('name',Blockly.Msg.CATEGORY_BYLNK);
  $('#category_grove').attr('name',Blockly.Msg.CATEGORY_GROVE);
  $('#category_robot').attr('name',Blockly.Msg.CATEGORY_ROBOT);
  $('#category_shield_bot').attr('name',Blockly.Msg.CATEGORY_SHIELD_BOT);
  $('#category_aerobot').attr('name',Blockly.Msg.CATEGORY_AEROBOT);
  $('#category_serial').attr('name',Blockly.Msg.CATEGORY_SERIAL);
  $('#category_servo').attr('name',Blockly.Msg.CATEGORY_SERVO);
  $('#category_logic').attr('name',Blockly.Msg.CATEGORY_LOGIC);
  $('#category_ultrasonic').attr('name',Blockly.Msg.CATEGORY_ULTRA_SONIC);
  $('#category_lcd').attr('name',Blockly.Msg.CATEGORY_LCD);
  $('#category_lcd_rgb').attr('name',Blockly.Msg.CATEGORY_GROVE_LCD_RGB);
  $('#category_grove_input').attr('name',Blockly.Msg.CATEGORY_GROVE_INPUT);
  $('#category_grove_output').attr('name',Blockly.Msg.CATEGORY_GROVE_OUTPUT);
  $('#category_grove_actuator').attr('name',Blockly.Msg.CATEGORY_GROVE_ACTUATOR);
  $('#category_grove_display').attr('name',Blockly.Msg.CATEGORY_GROVE_DISPLAY);
  $('#category_grove_sensor').attr('name',Blockly.Msg.CATEGORY_GROVE_SENSOR);
  $('#category_adafruit').attr('name',Blockly.Msg.CATEGORY_ADAFRUIT);
  $('#category_sparkfun').attr('name',Blockly.Msg.CATEGORY_SPARKFUN);
  $('#category_rgbled').attr('name',Blockly.Msg.CATEGORY_RGBLED);
  $('#category_neopixel').attr('name',Blockly.Msg.CATEGORY_NEOPIXEL);
  $('#category_i2c_matrix').attr('name',Blockly.Msg.CATEGORY_I2C_MATRIX);
  $('#category_i2c_sevenseg').attr('name',Blockly.Msg.CATEGORY_I2C_SEVENSEG);
  $('#category_mpr121').attr('name',Blockly.Msg.CATEGORY_MPR121);
  $('#category_other_sensor').attr('name',Blockly.Msg.CATEGORY_OTHER_SENSOR);
  $('#category_loops').attr('name',Blockly.Msg.CATEGORY_LOOPS);
  $('#category_time').attr('name',Blockly.Msg.CATEGORY_TIME);
  $('#category_array').attr('name',Blockly.Msg.CATEGORY_ARRAY);
  $('#category_math').attr('name',Blockly.Msg.CATEGORY_MATH);
  $('#category_text').attr('name',Blockly.Msg.CATEGORY_TEXT);
  $('#category_variables').attr('name',Blockly.Msg.CATEGORY_VARIABLES);
  $('#category_functions').attr('name',Blockly.Msg.CATEGORY_FUNCTIONS);
  $('#category_robot').attr('name',Blockly.Msg.CATEGORY_ROBOT);
  //  $('#category_involt').attr('name',Blockly.Msg.CATEGORY_INVOLT);
  $('label[for="chbox_category_ethernet"]').text(Blockly.Msg.CATEGORY_ETHERNET);
  $('label[for="chbox_category_cloud_service"]').text(Blockly.Msg.CATEGORY_CLOUD_SERVICE);
  $('label[for="chbox_category_ifttt"]').text(Blockly.Msg.CATEGORY_IFTTT);
  $('label[for="chbox_category_ir_remote"]').text(Blockly.Msg.CATEGORY_IR_REMOTE);
  $('label[for="chbox_category_m2x"]').text(Blockly.Msg.CATEGORY_M2X);
  $('label[for="chbox_category_blynk"]').text(Blockly.Msg.CATEGORY_BYLNK);
  $('label[for="chbox_category_grove"]').text(Blockly.Msg.CATEGORY_GROVE);
  $('label[for="chbox_category_adafruit"]').text(Blockly.Msg.CATEGORY_ADAFRUIT);
  $('label[for="chbox_category_sparkfun"]').text(Blockly.Msg.CATEGORY_SPARKFUN);
  $('label[for="chbox_category_robot"]').text(Blockly.Msg.CATEGORY_ROBOT);
  $('label[for="chbox_category_shield_bot"]').text(Blockly.Msg.CATEGORY_SHIELD_BOT);
  $('label[for="chbox_category_aerobot"]').text(Blockly.Msg.CATEGORY_AEROBOT);
  $('label[for="chbox_category_servo"]').text(Blockly.Msg.CATEGORY_SERVO);
  $('label[for="chbox_category_ultrasonic"]').text(Blockly.Msg.CATEGORY_ULTRA_SONIC);
  $('label[for="chbox_category_lcd"]').text(Blockly.Msg.CATEGORY_LCD);
  $('label[for="chbox_category_lcd_rgb"]').text(Blockly.Msg.CATEGORY_GROVE_LCD_RGB);
  $('label[for="chbox_category_rgbled"]').text(Blockly.Msg.CATEGORY_RGBLED);
  $('label[for="chbox_category_neopixel"]').text(Blockly.Msg.CATEGORY_NEOPIXEL);
  $('label[for="chbox_category_i2c_matrix"]').text(Blockly.Msg.CATEGORY_I2C_MATRIX);
  $('label[for="chbox_category_i2c_sevenseg"]').text(Blockly.Msg.CATEGORY_I2C_SEVENSEG);
  $('label[for="chbox_category_other_sensor"]').text(Blockly.Msg.CATEGORY_OTHER_SENSOR);

  // LinkIt
  $('label[for="chbox_category_linkit"]').text(Blockly.Msg.CATEGORY_LINKIT);
  $('#category_linkit').attr('name',Blockly.Msg.CATEGORY_LINKIT);
  $('#category_linkit_wifi').attr('name',Blockly.Msg.CATEGORY_LINKIT_WIFI);
  $('#category_linkit_wifi_advanced').attr('name',Blockly.Msg.CATEGORY_LINKIT_WIFI_ADVANCED);
  $('#category_linkit_mcs').attr('name',Blockly.Msg.CATEGORY_LINKIT_MCS);
  //$('#category_linkit_lremote').attr('name', Blockly.Msg.CATEGORY_LINKIT_LREMOTE); 
  $('#category_linkit_ble').attr('name',Blockly.Msg.CATEGORY_LINKIT_BLE);
  $('#category_linkit_ble_ibeacon').attr('name',Blockly.Msg.CATEGORY_LINKIT_BLE_BEACON);

  // Otto
  $('#category_otto').attr('name',Blockly.Msg.CATEGORY_OTTO);

  // External
  $('#category_external').attr('name',Blockly.Msg.CATEGORY_EXTERNAL);
  $('#category_beta').attr('name',Blockly.Msg.CATEGORY_BETA);
}
