/*global $, Stripe */
//Document ready
$(document).on('turbolinks:load', function(){
    var TheForm = $('#pro_form');
    var submitBtn = $('#form-submit-btn');
    //Set stripe public key
    Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
    //When user clicks form submit btn
    submitBtn.click(function(event){
        //prevent default submission behavior
        event.preventDefault();
        
    //Collect the credit card fields
    //Send the card information to Stripe
    var ccNum = #('#card_number').val();,
        cvcNum = #('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
        
        //Stripe wil lreturn back a card token
        Stripe.createToken({
            number: ccNum,
            cvc: cvcNum,
            exp_month: expMonth,
            exp_year: expYear
        }, stripeResponseHandler);
    });
    
    //Inject card token as hidden field into form
    //Submit form to our Rails app
});