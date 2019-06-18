/*global define*/
define([
	'knockout',
        'jquery',
        'mage/url',
        'Magento_Ui/js/form/form',
        'Magento_Customer/js/model/customer',
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/model/url-builder',
        'Magento_Checkout/js/model/error-processor',
        'Magento_Checkout/js/model/cart/cache',
        'Nauman1_CheckoutCustomField/js/model/checkout/custom-checkout-form'
], function(ko, $, urlFormatter, Component, customer, quote, urlBuilder, errorProcessor, cartCache, formData) {
    'use strict';
    return Component.extend({
        customFields: ko.observable(null),
        formData: formData.customFieldsData,
        initialize: function () {
	
            this._super();
            // component initialization logic
	    

            
            return this;
        },

        /**
         * Form submit handler
         *
         * This method can have any name.
         */
        onSubmit: function() {
            // trigger form validation
            //this.source.set('params.invalid', false);
            //this.source.trigger('customCheckoutForm.data.validate');

            // verify that form data is valid
            //if (!this.source.get('params.invalid')) {
                // data is retrieved from data provider by value of the customScope property
               // var formData = this.source.get('customCheckoutForm');
                // do something with form data
              //  console.dir(formData);
           // }
        }
    });
});