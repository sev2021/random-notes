<?php
/*
Plugin Name: Email Return Path Fix
Author: Abdussamad Abdurrazzaq
*/
class email_return_path {
   function __construct() {
  add_action( 'phpmailer_init', array( $this, 'fix' ) );   
   }

function fix( $phpmailer ) {
    $phpmailer->Sender = $phpmailer->From;
}
}

new email_return_path();
?>
